import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { StructuredData } from "@/components/structured-data";
import { Suspense } from "react";
import Script from "next/script"; // Correct way to include JSON-LD and Analytics in App Router

export const metadata: Metadata = {
  metadataBase: new URL("https://suraherahman.com"),
  title: {
    default: "Surah Rahman (Ar-Rahman) — MP3, Urdu & English Translation",
    template: "%s | Surah Al Rahman",
  },
  description:
    "Listen and read Surah Rahman online with Arabic text, Urdu & English translation. Recitations by Qari Abdul Basit & Mishari Al-Afasi, virtues & benefits.",
  keywords: [
    "surah rahman",
    "surah e rahman",
    "surah ar rahman mp3",
    "abdul basit",
    "mishari al-afasi",
    "english translation",
  ],
  generator: "Surah Rahman Website",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suraherahman.com",
    siteName: "Surah Rahman",
    title:
      "Surah Rahman (Ar-Rahman) — Audio Recitation, Urdu & English Translation",
    description:
      "Listen and read Surah Rahman online with Arabic text, Urdu & English translation. Recitations by Qari Abdul Basit & Mishari Al-Afasi, virtues & benefits.",
    images: [
      {
        url: "https://suraherahman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surah Rahman — The Most Merciful",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surah Rahman (Ar-Rahman) — Listen & Read with Translation",
    description:
      "Listen and read Surah Rahman online with Arabic text, Urdu & English translation. Recitations by Qari Abdul Basit & Mishari Al-Afasi, virtues & benefits.",
    images: ["https://suraherahman.com/twitter-image.jpg"],
    site: "@suraherahman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with actual Google Search Console verification code
    google: "Gooogle_Search_Console_Verification_Code",
  },

  category: "Religion",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD for structured data
  const ldWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Surah Rahman",
    url: "https://suraherahman.com",
  };

  const ldWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Surah Rahman (Ar-Rahman) — Tilawat, MP3, Urdu & English Translation",
    url: "https://suraherahman.com",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Surah Rahman",
      url: "https://suraherahman.com",
    },
    description:
      "Listen to Surah Rahman with Abdul Basit & Mishari Al-Afasi and read Arabic with Urdu & English translation, virtues, and benefits.",
  };

  const ldAudio = {
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: "Surah Rahman Recitation — Qari Abdul Basit",
    url: "https://suraherahman.com/audio/abdul-basit-surah-rahman.mp3", // Update with actual URL
    encodingFormat: "audio/mpeg",
    inLanguage: "ar",
    duration: "PT15M", // Update with actual duration
    byArtist: { "@type": "Person", name: "Qari Abdul Basit" },
  };

  const ldBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://suraherahman.com",
      },
      { "@type": "ListItem", position: 2, name: "Surah Rahman" },
    ],
  };

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the benefits of Surah Rahman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reciting Surah Rahman brings blessings, peace, and spiritual healing. It is often recited for gratitude and reflection on Allah’s Mercy.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I listen to Surah Rahman MP3?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can stream or download Surah Rahman MP3 by Qari Abdul Basit and Mishari Al-Afasi on this page’s audio players.",
        },
      },
      {
        "@type": "Question",
        name: "Is Surah Rahman available with Urdu & English translation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this website provides the original Arabic text alongside translations in both Urdu and English for easy understanding.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional: small perf boost for GA */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* JSON-LD Structured Data */}
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebsite) }}
        />

        <Script
          id="ld-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldWebPage),
          }}
        />
        <Script
          id="ld-audio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldAudio),
          }}
        />
        <Script
          id="ld-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldBreadcrumbs),
          }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ldFAQ),
          }}
        />

        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t5e81z8weg");
          `}
        </Script>

        {/* Google Analytics (gtag) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XYE936JLWC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XYE936JLWC', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body className="font-sans">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
