"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AppointmentFormData } from "../schemas/appointment-schema";
import { TimeSlotOption } from "../types/appointment.types";
import { cn } from "@/lib/utils";

const TIME_SLOTS: TimeSlotOption[] = [
  {
    id: "slot-early",
    value: "early-morning",
    label: "Early 7:30 AM",
    sublabel: "Pre-work slot",
  },
  {
    id: "slot-mid",
    value: "late-morning",
    label: "10:00 AM – 12:00 PM",
    sublabel: "Mid-morning",
  },
  {
    id: "slot-afternoon",
    value: "early-afternoon",
    label: "1:00 PM – 3:00 PM",
    sublabel: "Early afternoon",
  },
  {
    id: "slot-late",
    value: "late-afternoon",
    label: "3:30 PM – 5:00 PM",
    sublabel: "End of day",
  },
];

interface TimeSlotPickerProps {
  register: UseFormRegister<AppointmentFormData>;
  selectedValue: AppointmentFormData["preferredTimeSlot"];
  errors: FieldErrors<AppointmentFormData>;
}

export function TimeSlotPicker({
  register,
  selectedValue,
  errors,
}: TimeSlotPickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-interactive text-label-interactive text-primary block">
        Preferred Time Window
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {TIME_SLOTS.map((slot) => {
          const isChecked = selectedValue === slot.value;
          return (
            <motion.label
              key={slot.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "cursor-pointer rounded-xl border p-3 text-center transition-colors duration-200 select-none relative",
                isChecked
                  ? "bg-primary text-on-primary border-primary shadow-md ring-2 ring-primary/20"
                  : "bg-surface border-surface-container text-primary hover:bg-surface-container"
              )}
            >
              <input
                type="radio"
                value={slot.value}
                {...register("preferredTimeSlot")}
                className="sr-only"
              />
              <span className="block font-headline-sm text-xs sm:text-sm font-semibold">
                {slot.label}
              </span>
              <span
                className={cn(
                  "block text-[11px] mt-0.5",
                  isChecked ? "text-primary-fixed" : "text-on-surface-variant"
                )}
              >
                {slot.sublabel}
              </span>
            </motion.label>
          );
        })}
      </div>
      {errors.preferredTimeSlot && (
        <p className="mt-1 text-xs text-error font-medium">
          {errors.preferredTimeSlot.message}
        </p>
      )}
    </div>
  );
}
