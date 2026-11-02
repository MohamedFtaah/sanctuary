"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PatientReview } from "../types/review.types";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function ReviewCard({ review }: { review: PatientReview }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="flex flex-col justify-between rounded-3xl border border-surface-container/70 bg-surface-container-lowest p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-colors cursor-default"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(review.ratingStars)].map((_, i) => (
              <AnimatedIcon
                key={i}
                name="star"
                animation="star"
                size={16}
                iconClassName="fill-secondary text-secondary"
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-secondary flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {review.source}
          </span>
        </div>

        <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-surface-container/60 flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="h-10 w-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary text-xs shadow-sm"
        >
          {review.initials}
        </motion.div>
        <div>
          <h4 className="font-headline-sm text-sm font-bold text-primary">
            {review.authorName}
          </h4>
          <p className="font-body-sm text-xs text-on-surface-variant">
            {review.patientContext}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
