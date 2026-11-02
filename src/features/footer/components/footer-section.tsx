import * as React from "react";
import { Container } from "@/components/common/container";
import { FooterBrand } from "./footer-brand";
import { FooterColumn } from "./footer-column";
import { FooterEmergencyBox } from "./footer-emergency-box";
import { FooterBottomBar } from "./footer-bottom-bar";
import { FOOTER_SECTIONS } from "../constants/footer-data";

export function FooterSection() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-12 border-t border-surface-container">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          <FooterBrand />

          <div className="lg:col-span-2">
            <FooterColumn
              title={FOOTER_SECTIONS[0].title}
              links={FOOTER_SECTIONS[0].links}
            />
          </div>

          <div className="lg:col-span-3">
            <FooterColumn
              title={FOOTER_SECTIONS[1].title}
              links={FOOTER_SECTIONS[1].links}
            />
          </div>

          <div className="lg:col-span-3">
            <FooterEmergencyBox />
          </div>
        </div>

        <FooterBottomBar />
      </Container>
    </footer>
  );
}

