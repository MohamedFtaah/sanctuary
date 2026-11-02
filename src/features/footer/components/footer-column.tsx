import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
  isUrgent?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-label-interactive text-label-interactive uppercase text-primary tracking-wider font-bold">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className={cn(
                "hover:text-primary transition-all hover:translate-x-1 inline-block",
                link.isUrgent && "text-error font-semibold hover:text-error/80"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

