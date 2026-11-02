"use client";

import * as React from "react";
import { Loader2, Send } from "lucide-react";
import { useAppointmentForm } from "../hooks/use-appointment-form";
import { TimeSlotPicker } from "./time-slot-picker";
import { BookingConfirmation } from "./booking-confirmation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function TriageForm() {
  const { form, isSubmitting, submissionResult, onSubmit, resetFormState } =
    useAppointmentForm();

  const {
    register,
    watch,
    formState: { errors },
  } = form;

  const selectedTimeSlot = watch("preferredTimeSlot");

  if (submissionResult) {
    return (
      <BookingConfirmation
        result={submissionResult}
        onReset={resetFormState}
      />
    );
  }

  return (
    <div className="rounded-3xl border border-surface-container/70 bg-surface-container-lowest p-6 sm:p-8 shadow-card">
      <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
        {/* Row 1: Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="fullName" requiredIndicator className="mb-2">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Jane Doe"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber" requiredIndicator className="mb-2">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="(608) 555-0123"
              {...register("phoneNumber")}
              error={errors.phoneNumber?.message}
            />
          </div>
        </div>

        {/* Row 2: Email and Patient Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="emailAddress" requiredIndicator className="mb-2">
              Email Address
            </Label>
            <Input
              id="emailAddress"
              type="email"
              placeholder="jane@example.com"
              {...register("emailAddress")}
              error={errors.emailAddress?.message}
            />
          </div>

          <div>
            <Label htmlFor="patientType" className="mb-2">
              Patient Status
            </Label>
            <Select
              id="patientType"
              {...register("patientType")}
              error={errors.patientType?.message}
            >
              <option value="New Patient (First Visit)">
                New Patient (First Visit)
              </option>
              <option value="Returning Patient">Returning Patient</option>
              <option value="Seeking Second Opinion">
                Seeking Second Opinion
              </option>
              <option value="Dental Emergency / Acute Pain">
                Dental Emergency / Acute Pain
              </option>
            </Select>
          </div>
        </div>

        {/* Row 3: Preferred Time Window */}
        <TimeSlotPicker
          register={register}
          selectedValue={selectedTimeSlot}
          errors={errors}
        />

        {/* Row 4: Primary Reason */}
        <div>
          <Label htmlFor="clinicalReason" className="mb-2">
            Primary Reason for Visit
          </Label>
          <Select
            id="clinicalReason"
            {...register("clinicalReason")}
            error={errors.clinicalReason?.message}
          >
            <option value="Routine Cleaning & Exam">
              Routine Cleaning &amp; Exam (6-Month Checkup)
            </option>
            <option value="Tooth Pain / Acute Issue">
              Toothache / Broken Tooth / Acute Discomfort
            </option>
            <option value="Second Opinion on Dental Treatment">
              Second Opinion on Past Treatment Plan
            </option>
            <option value="Direct Membership Plan Enrollment">
              In-House Dental Membership Consultation
            </option>
            <option value="Cosmetic Whitening or Veneers">
              Cosmetic Whitening / Veneers Consultation
            </option>
            <option value="Dental Implant Consultation">
              Dental Implant &amp; Restoration Evaluation
            </option>
          </Select>
        </div>

        {/* Row 5: Notes & Anxiety Details */}
        <div>
          <Label htmlFor="notes" className="mb-2">
            Notes or Dental Anxiety Concerns (Optional)
          </Label>
          <Textarea
            id="notes"
            placeholder="Share any past dental anxieties, medications, or specific questions so we can prepare your operatory..."
            {...register("notes")}
            error={errors.notes?.message}
          />
        </div>

        {/* Row 6: Consent Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consentAcknowledged"
            {...register("consentAcknowledged")}
            className="mt-1 h-4 w-4 rounded border-surface-container text-secondary focus:ring-secondary cursor-pointer"
          />
          <label
            htmlFor="consentAcknowledged"
            className="text-xs text-on-surface-variant font-body-sm leading-relaxed cursor-pointer select-none"
          >
            I understand that submitting this form requests an appointment window. The Scinico Dental team will contact me to confirm the date and time.
          </label>
        </div>
        {errors.consentAcknowledged && (
          <p className="text-xs text-error font-medium">
            {errors.consentAcknowledged.message}
          </p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="shimmer"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center text-base font-semibold mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Submit Appointment Request
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

