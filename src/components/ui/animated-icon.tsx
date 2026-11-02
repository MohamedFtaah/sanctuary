"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import {
  Phone,
  Clock,
  HeartPulse,
  Star,
  MapPin,
  Sparkles,
  Shield,
  ShieldCheck,
  Scan,
  Car,
  Accessibility,
  Bus,
  Crown,
  Layers,
  Smile,
  Calendar,
  Check,
  Award,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type AnimationType =
  | "phone"
  | "heart"
  | "pin"
  | "clock"
  | "star"
  | "sparkle"
  | "shield"
  | "scan"
  | "car"
  | "crown"
  | "check"
  | "smile";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  clock: Clock,
  heart: HeartPulse,
  star: Star,
  pin: MapPin,
  sparkle: Sparkles,
  shield: Shield,
  shieldCheck: ShieldCheck,
  scan: Scan,
  car: Car,
  accessibility: Accessibility,
  bus: Bus,
  crown: Crown,
  layers: Layers,
  smile: Smile,
  calendar: Calendar,
  check: Check,
  award: Award,
};

const animationVariants: Record<AnimationType, Variants> = {
  phone: {
    animate: {
      rotate: [0, -14, 14, -10, 10, -4, 4, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2.5,
        duration: 0.9,
        ease: "easeInOut",
      },
    },
    hover: {
      rotate: [0, -20, 20, -15, 15, -6, 6, 0],
      scale: 1.2,
      transition: { duration: 0.6, repeat: Infinity },
    },
  },
  heart: {
    animate: {
      scale: [1, 1.22, 1, 1.12, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 1.2,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: [1, 1.3, 1, 1.2, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
  },
  pin: {
    animate: {
      y: [0, -8, 2, -4, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
    hover: {
      y: [0, -12, 0],
      scale: 1.25,
      transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
    },
  },
  clock: {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
    hover: {
      rotate: 360,
      scale: 1.15,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  },
  star: {
    animate: {
      scale: [1, 1.25, 0.95, 1],
      rotate: [0, 15, -10, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.35,
      rotate: 45,
      transition: { duration: 0.3 },
    },
  },
  sparkle: {
    animate: {
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 1.5,
        duration: 2.5,
        ease: "linear",
      },
    },
    hover: {
      rotate: 360,
      scale: 1.3,
      transition: { duration: 0.6 },
    },
  },
  shield: {
    animate: {
      scale: [1, 1.08, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 3,
        duration: 1.4,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  },
  scan: {
    animate: {
      y: [-2, 3, -2],
      transition: {
        repeat: Infinity,
        duration: 1.8,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.25,
      rotate: [0, -8, 8, 0],
      transition: { duration: 0.5 },
    },
  },
  car: {
    animate: {
      x: [0, 3, -2, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    hover: {
      x: [0, 6, -3, 0],
      scale: 1.15,
      transition: { duration: 0.4 },
    },
  },
  crown: {
    animate: {
      y: [0, -4, 0],
      rotate: [0, -4, 4, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2.5,
        duration: 1.6,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.25,
      y: -6,
      transition: { duration: 0.3 },
    },
  },
  smile: {
    animate: {
      scale: [1, 1.15, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1.2,
      },
    },
    hover: {
      scale: 1.28,
      rotate: 15,
      transition: { duration: 0.3 },
    },
  },
  check: {
    animate: {
      scale: [1, 1.12, 1],
      transition: { repeat: Infinity, repeatDelay: 3, duration: 1 },
    },
    hover: {
      scale: 1.3,
      transition: { duration: 0.2 },
    },
  },
};

interface AnimatedIconProps extends HTMLMotionProps<"div"> {
  name: string;
  animation?: AnimationType;
  className?: string;
  iconClassName?: string;
  size?: number;
}

export function AnimatedIcon({
  name,
  animation = "sparkle",
  className,
  iconClassName,
  size = 20,
  ...props
}: AnimatedIconProps) {
  const Icon = iconMap[name] || Sparkles;
  const variant = animationVariants[animation] || animationVariants.sparkle;

  return (
    <motion.div
      variants={variant}
      animate="animate"
      whileHover="hover"
      className={cn("inline-flex items-center justify-center shrink-0", className)}
      {...props}
    >
      <Icon size={size} className={iconClassName} />
    </motion.div>
  );
}
