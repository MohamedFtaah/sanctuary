"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  appointmentSchema,
  AppointmentFormData,
} from "../schemas/appointment-schema";
import { BookingSubmissionResult } from "../types/appointment.types";
import { launchDentalConfetti } from "@/lib/confetti";

export function useAppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<BookingSubmissionResult | null>(null);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      patientType: "New Patient (First Visit)",
      preferredTimeSlot: "early-morning",
      clinicalReason: "Routine Cleaning & Exam",
      notes: "",
      consentAcknowledged: true,
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate network request to booking endpoint
      await new Promise((resolve) => setTimeout(resolve, 800));

      const refCode = `SFD-${Math.floor(100000 + Math.random() * 900000)}`;
      const result: BookingSubmissionResult = {
        success: true,
        referenceNumber: refCode,
        data,
        submittedAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setSubmissionResult(result);
      form.reset();

      // Launch dazzling confetti celebration
      launchDentalConfetti();
    } catch (err) {
      console.error("Booking error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormState = () => {
    setSubmissionResult(null);
    form.reset();
  };

  return {
    form,
    isSubmitting,
    submissionResult,
    onSubmit: form.handleSubmit(onSubmit),
    resetFormState,
  };
}
