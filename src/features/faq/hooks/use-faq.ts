"use client";

import { useState, useCallback } from "react";

export function useFaq(defaultOpenId: string | null = "faq-membership") {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: string) => openId === id, [openId]);

  return {
    openId,
    toggle,
    isOpen,
  };
}

