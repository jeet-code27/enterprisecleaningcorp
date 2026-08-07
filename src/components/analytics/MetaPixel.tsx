"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const META_PIXEL_ID = "1678012113285850";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

function MetaPixelTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

/**
 * Meta Pixel Component for tracking PageView and Custom Events
 */
export function MetaPixel() {
  return (
    <>
      <MetaPixelTracker />
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Meta Pixel"
        />
      </noscript>
    </>
  );
}

/**
 * Track Meta Pixel Events
 */
export function trackMetaEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }
}

/**
 * Track Meta Pixel Custom Events
 */
export function trackMetaCustomEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("trackCustom", eventName, params);
    } else {
      window.fbq("trackCustom", eventName);
    }
  }
}

export function trackPhoneCallClick() {
  trackMetaEvent("Contact", { content_name: "Phone Call Click", phone: "508-890-1000" });
  trackMetaCustomEvent("PhoneCall_Click", { timestamp: new Date().toISOString() });
}

export function trackCTAButtonClick(buttonName: string) {
  trackMetaCustomEvent("CTA_Click", { button: buttonName, timestamp: new Date().toISOString() });
}

export function trackLeadSubmission(service?: string) {
  trackMetaEvent("Lead", { content_name: "Commercial Cleaning Quote Lead", service });
}

