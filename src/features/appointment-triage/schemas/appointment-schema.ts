import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[\d\s()+-]+$/, "Please enter a valid phone number"),
  emailAddress: z
    .string()
    .min(5, "Email is required")
    .email("Please provide a valid email address"),
  patientType: z.enum(
    [
      "New Patient (First Visit)",
      "Returning Patient",
      "Seeking Second Opinion",
      "Dental Emergency / Acute Pain",
    ],
    {
      required_error: "Please select your patient status",
    }
  ),
  preferredTimeSlot: z.enum(
    [
      "early-morning",
      "late-morning",
      "early-afternoon",
      "late-afternoon",
    ],
    {
      required_error: "Please select a preferred time slot",
    }
  ),
  clinicalReason: z.string().min(1, "Please select your primary reason for visit"),
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
  consentAcknowledged: z.literal(true, {
    errorMap: () => ({
      message: "You must acknowledge before requesting an appointment",
    }),
  }),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

