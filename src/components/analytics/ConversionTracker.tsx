"use client";

import { useEffect } from "react";
import { trackPhoneCallClick, trackCTAButtonClick } from "./MetaPixel";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Universal Click-to-Call and Conversion Event Tracker
 * Automatically binds to all tel: and contact endpoints across the site
 * Pushes unified events to Google Tag Manager (dataLayer), GA4 (gtag), and Meta Pixel (fbq)
 */
export function ConversionTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";

      // 1. Click-to-call link tracking
      if (href.startsWith("tel:")) {
        const cleanNumber = href.replace("tel:", "").trim();

        // GTM DataLayer Push
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "click_to_call",
            event_category: "Conversion",
            event_action: "Phone Call Click",
            phone_number: cleanNumber,
            link_url: href,
            page_path: window.location.pathname,
          });

          // GA4 Direct gtag Event
          if (typeof window.gtag === "function") {
            window.gtag("event", "phone_call_click", {
              event_category: "Engagement",
              event_label: cleanNumber,
              value: 1,
            });
          }

          // Meta Pixel Event
          trackPhoneCallClick();
        }
      }

      // 2. Email link tracking
      else if (href.startsWith("mailto:")) {
        const email = href.replace("mailto:", "").trim();
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "email_click",
            event_category: "Conversion",
            email_address: email,
            page_path: window.location.pathname,
          });

          if (typeof window.gtag === "function") {
            window.gtag("event", "email_click", {
              event_category: "Engagement",
              event_label: email,
            });
          }
        }
      }

      // 3. High-intent Quote / Contact CTA click tracking
      else if (
        href === "/contact" ||
        href === "/commercial-cleaning-quote" ||
        href.startsWith("/contact?") ||
        href.startsWith("/commercial-cleaning-quote?")
      ) {
        const buttonText = (target.textContent || "").trim();
        trackCTAButtonClick(buttonText || "Get a Quote CTA");

        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "cta_quote_click",
            event_category: "Conversion Intent",
            cta_text: buttonText,
            destination_url: href,
            page_path: window.location.pathname,
          });
        }
      }
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

/**
 * Helper to trigger unified lead conversion event across GTM, GA4, and Meta Pixel
 */
export function fireLeadConversion(formName: string, service?: string) {
  if (typeof window === "undefined") return;

  // 1. Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    form_name: formName,
    service_type: service || "General Commercial Cleaning",
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  });

  // 2. Google Analytics 4 (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      currency: "USD",
      value: 0,
      form_name: formName,
      service_type: service || "General Commercial Cleaning",
    });
  }
}
