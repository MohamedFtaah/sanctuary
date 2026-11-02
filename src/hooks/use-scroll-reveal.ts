"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delayStep?: number;
}

export function useScrollReveal({
  threshold = 0.12,
  rootMargin = "0px 0px -50px 0px",
  delayStep = 0.08,
}: ScrollRevealOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const elements = container.querySelectorAll(".reveal-item");
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = container.querySelectorAll(".reveal-item");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${(index % 4) * delayStep}s`;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delayStep]);

  return containerRef;
}

