import { AppointmentFormData } from "../schemas/appointment-schema";

export interface TimeSlotOption {
  id: string;
  value: AppointmentFormData["preferredTimeSlot"];
  label: string;
  sublabel: string;
}

export interface BookingSubmissionResult {
  success: boolean;
  referenceNumber: string;
  data: AppointmentFormData;
  submittedAt: string;
}

