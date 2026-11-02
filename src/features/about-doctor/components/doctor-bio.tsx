import * as React from "react";
import { Quote } from "lucide-react";
import { DOCTOR_DATA } from "../constants/doctor-data";

export function DoctorBio() {
  return (
    <div className="flex flex-col">
      <div className="relative p-5 md:p-6 rounded-2xl bg-surface-container/60 border border-surface-container-high/60 mb-6">
        <Quote className="h-8 w-8 text-secondary/30 mb-2" />
        <p className="font-headline-sm text-base md:text-lg italic text-primary leading-relaxed">
          &ldquo;{DOCTOR_DATA.quote}&rdquo;
        </p>
      </div>

      <div className="flex flex-col gap-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {DOCTOR_DATA.bioParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

