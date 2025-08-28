import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { StructuredData } from "@/components/structured-data"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Surah Rahman - Complete Quran Chapter with Audio Recitation",
  description:
    "Listen to Surah Rahman with beautiful recitations by Qari Abdul Basit and Mishari al-Afasi. Read in Arabic, Urdu, and English with translations and benefits.",
  keywords:
    "surah rahman, quran, islamic, recitation, qari abdul basit, mishari al-afasi, arabic, urdu, english translation",
  generator: "Surah Rahman Website",
  openGraph: {
    title: "Surah Rahman - Complete Quran Chapter with Audio Recitation",
    description:
      "Listen to Surah Rahman with beautiful recitations by Qari Abdul Basit and Mishari al-Afasi. Read in Arabic, Urdu, and English with translations and benefits.",
    type: "website",
    locale: "en_US",
    url: "https://suraherahman.com",
    siteName: "Surah Rahman",
    images: [
      {
        url: "https://suraherahman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surah Rahman - The Most Merciful",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surah Rahman - Complete Quran Chapter with Audio Recitation",
    description: "Listen to Surah Rahman with beautiful recitations by Qari Abdul Basit and Mishari al-Afasi.",
    images: ["https://suraherahman.com/twitter-image.jpg"],
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
    google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://suraherahman.com",
    languages: {
      "en-US": "https://suraherahman.com",
      ar: "https://suraherahman.com/surah-rahman-arabic",
      ur: "https://suraherahman.com/surah-rahman-urdu",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData
          type="website"
          data={{
            name: "Surah Rahman",
            description: "Complete Surah Rahman with recitations and translations",
            url: "https://suraherahman.com",
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
