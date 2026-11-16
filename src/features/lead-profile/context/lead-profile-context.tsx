"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";

export interface LeadProfile {
  found: boolean;
  id: string;
  name: string;
  companyName: string;
  clinicName: string;
  doctorLastName: string;
  city: string;
  targetService: string;
  isDoctor: boolean;
  entityType: "DOCTOR" | "CLINIC";
  calendlyUrl: string;
}

export const DEFAULT_LEAD_PROFILE: LeadProfile = {
  found: true,
  id: "default_doctor",
  name: "Dr. Sarah Jenkins",
  companyName: "Dr. Sarah Jenkins Aesthetic Dentistry",
  clinicName: "Dr. Sarah Jenkins Aesthetic Dentistry",
  doctorLastName: "Jenkins",
  city: "London",
  targetService: "Composite Bonding & Smile Makeovers",
  isDoctor: true,
  entityType: "DOCTOR",
  calendlyUrl: "https://calendly.com/imayousefgo/30min",
};

export interface LeadProfileContextValue extends LeadProfile {
  profile: LeadProfile;
  isLoading: boolean;
  error: string | null;
}

const LeadProfileContext = React.createContext<LeadProfileContextValue>({
  ...DEFAULT_LEAD_PROFILE,
  profile: DEFAULT_LEAD_PROFILE,
  isLoading: false,
  error: null,
});

// In-memory cache to prevent redundant fetches
const profileCache = new Map<string, LeadProfile>();

interface LeadProfileProviderProps {
  children: React.ReactNode;
}

function SearchParamWatcher({
  onRefDetected,
}: {
  onRefDetected: (ref: string | null) => void;
}) {
  const searchParams = useSearchParams();
  const ref = searchParams?.get("ref") || null;

  React.useEffect(() => {
    onRefDetected(ref);
  }, [ref, onRefDetected]);

  return null;
}

export function LeadProfileProvider({ children }: LeadProfileProviderProps) {
  const [profile, setProfile] = React.useState<LeadProfile>(DEFAULT_LEAD_PROFILE);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  // Immediate synchronous browser check on first client mount
  React.useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const initialRef = urlParams.get("ref");
      if (initialRef) {
        handleFetchLead(initialRef);
      }
    }
  }, []);

  const handleFetchLead = React.useCallback(async (leadId: string | null) => {
    if (!leadId) {
      setProfile(DEFAULT_LEAD_PROFILE);
      setIsLoading(false);
      return;
    }

    // Check memory cache
    if (profileCache.has(leadId)) {
      setProfile(profileCache.get(leadId)!);
      setIsLoading(false);
      return;
    }

    // Check sessionStorage
    if (typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(`sanctuary_lead_${leadId}`);
        if (cached) {
          const parsed = JSON.parse(cached) as LeadProfile;
          profileCache.set(leadId, parsed);
          setProfile(parsed);
          setIsLoading(false);
          return;
        }
      } catch {
        // Ignore session storage errors
      }
    }

    setIsLoading(true);
    setError(null);

    try {
      const baseApiUrl =
        process.env.NEXT_PUBLIC_CRM_API_URL ||
        "https://involved-nerti-o0sans0o-a85dfacc.apps.mistral.run/api/v1/webhooks";

      const cleanedBase = baseApiUrl.replace(/\/$/, "");
      const endpoint = cleanedBase.includes("prototype-profile")
        ? `${cleanedBase}/${leadId}`
        : `${cleanedBase}/prototype-profile/${leadId}`;

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`API responded with HTTP ${res.status}`);
      }

      const json = await res.json();
      if (json && json.success && json.data) {
        const item = json.data;
        const entityType: "DOCTOR" | "CLINIC" =
          item.entityType === "CLINIC" ? "CLINIC" : "DOCTOR";
        const isDoctor = entityType === "DOCTOR" || Boolean(item.isDoctor);

        const rawName = (item.name || DEFAULT_LEAD_PROFILE.name).trim();
        const formattedName = rawName.startsWith("Dr.")
          ? rawName
          : `Dr. ${rawName}`;

        const rawLastName =
          item.doctorLastName ||
          (rawName
            ? rawName.replace(/^Dr\.?\s*/i, "").trim().split(" ").pop() || "Doctor"
            : "Doctor");
        const cleanDoctorLastName = String(rawLastName).replace(/^Dr\.?\s*/i, "").trim();

        const resolved: LeadProfile = {
          found: Boolean(item.found),
          id: item.id || leadId,
          name: isDoctor ? formattedName : rawName,
          companyName:
            item.companyName ||
            item.clinicName ||
            item.name ||
            DEFAULT_LEAD_PROFILE.companyName,
          clinicName:
            item.clinicName ||
            item.companyName ||
            item.name ||
            DEFAULT_LEAD_PROFILE.clinicName,
          doctorLastName: cleanDoctorLastName,
          city: item.city || DEFAULT_LEAD_PROFILE.city,
          targetService:
            item.targetService || DEFAULT_LEAD_PROFILE.targetService,
          isDoctor,
          entityType,
          calendlyUrl: item.calendlyUrl || DEFAULT_LEAD_PROFILE.calendlyUrl,
        };

        profileCache.set(leadId, resolved);
        if (typeof window !== "undefined") {
          try {
            sessionStorage.setItem(
              `sanctuary_lead_${leadId}`,
              JSON.stringify(resolved)
            );
          } catch {
            // Ignore session storage write errors
          }
        }

        setProfile(resolved);
      }
    } catch (err: unknown) {
      console.warn("Failed to load lead profile from CRM:", err);
      setError(err instanceof Error ? err.message : "Failed to load lead");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const contextValue: LeadProfileContextValue = React.useMemo(
    () => ({
      ...profile,
      profile,
      isLoading,
      error,
    }),
    [profile, isLoading, error]
  );

  return (
    <LeadProfileContext.Provider value={contextValue}>
      <React.Suspense fallback={null}>
        <SearchParamWatcher onRefDetected={handleFetchLead} />
      </React.Suspense>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isMounted ? "opacity-100" : "opacity-95"
        }`}
      >
        {children}
      </div>
    </LeadProfileContext.Provider>
  );
}

export function useLeadProfile(): LeadProfileContextValue {
  const context = React.useContext(LeadProfileContext);
  if (!context) {
    throw new Error("useLeadProfile must be used within a LeadProfileProvider");
  }
  return context;
}
