"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_dimension_1': 'page_type',
              'custom_dimension_2': 'content_language'
            }
          });
        `}
      </Script>

      {/* Google Search Console Verification */}
      <Script id="search-console-verification" strategy="afterInteractive">
        {`
          // Add Google Search Console verification meta tag
          const meta = document.createElement('meta');
          meta.name = 'google-site-verification';
          meta.content = 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE';
          document.head.appendChild(meta);
        `}
      </Script>
    </>
  )
}
