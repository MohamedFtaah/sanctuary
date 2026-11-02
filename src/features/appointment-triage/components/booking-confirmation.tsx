"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, RotateCcw } from "lucide-react";
import { BookingSubmissionResult } from "../types/appointment.types";
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/ui/animated-icon";

interface BookingConfirmationProps {
  result: BookingSubmissionResult;
  onReset: () => void;
}

export function BookingConfirmation({
  result,
  onReset,
}: BookingConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="rounded-3xl border-2 border-secondary/40 bg-surface-container-lowest p-8 sm:p-10 shadow-2xl text-center flex flex-col items-center relative overflow-hidden"
    >
      {/* Animated glowing check icon container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
        className="h-20 w-20 rounded-3xl bg-secondary/15 flex items-center justify-center text-secondary mb-5 shadow-inner"
      >
        <AnimatedIcon
          name="check"
          animation="check"
          size={38}
          iconClassName="stroke-[3]"
        />
      </motion.div>

      <span className="font-label-credential text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3.5 py-1 rounded-full mb-2">
        Request Confirmed &amp; Dispatched
      </span>

      <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-primary mb-2">
        Thank you, {result.data.fullName}!
      </h3>

      <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
        Our East Madison scheduling coordinator received your triage request at{" "}
        <strong className="text-primary">{result.submittedAt}</strong>. We will
        call or text you at{" "}
        <strong className="text-primary">{result.data.phoneNumber}</strong> within
        2–4 business hours to finalize your appointment time.
      </p>

      <div className="w-full max-w-sm rounded-2xl bg-surface-container/60 p-4 mb-6 border border-surface-container-high text-xs text-left">
        <div className="flex justify-between py-1.5 border-b border-surface-container">
          <span className="text-on-surface-variant">Reference ID:</span>
          <span className="font-mono font-bold text-primary">
            {result.referenceNumber}
          </span>
        </div>
        <div className="flex justify-between py-1.5 border-b border-surface-container">
          <span className="text-on-surface-variant">Patient Type:</span>
          <span className="font-medium text-primary">{result.data.patientType}</span>
        </div>
        <div className="flex justify-between py-1.5">
          <span className="text-on-surface-variant">Selected Window:</span>
          <span className="font-medium text-primary capitalize">
            {result.data.preferredTimeSlot.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="outline" size="sm">
          <a href="tel:6082496616" className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-secondary" />
            <span>Call Office (608) 249-6616</span>
          </a>
        </Button>

        <Button variant="ghost" size="sm" onClick={onReset}>
          <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
          Submit Another Request
        </Button>
      </div>
    </motion.div>
  );
}
