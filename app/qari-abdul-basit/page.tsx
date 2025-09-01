import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AudioPlayer } from "@/components/audio-player"
import Link from "next/link"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import Script from "next/script" // Correct way to include JSON-LD in App Router

export const metadata: Metadata = {
  title: "Qari Abdul Basit - Surah Rahman Recitation | Beautiful Quranic Voice",
  description:
    "Listen to Surah Rahman recited by the legendary Qari Abdul Basit Abd us-Samad. Experience his melodious and soul-stirring recitation of Chapter 55 of the Holy Quran.",
  keywords:
    "qari abdul basit, abdul basit surah rahman, quranic recitation, famous qari, islamic audio, quran tilawat, abdul basit recitation, qari abdul basit biography, qari voice",
  openGraph: {
    title: "Qari Abdul Basit - Surah Rahman Recitation",
    description:
      "Listen to Surah Rahman recited by the legendary Qari Abdul Basit Abd us-Samad, known for his beautiful and emotional recitation of the Quran.",
    url: "https://suraherahman.com/qari-abdul-basit",
    type: "profile",
    images: [
      {
        url: "https://suraherahman.com/images/qari-abdul-basit.webp",
        width: 1200,
        height: 630,
        alt: "Qari Abdul Basit Abd us-Samad - Surah Rahman Recitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qari Abdul Basit - Surah Rahman Recitation",
    description:
      "Listen to Surah Rahman recited by the legendary Qari Abdul Basit Abd us-Samad.",
    images: [
      "https://suraherahman.com/images/qari-abdul-basit.webp",
    ],
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
    google: "Google_Search_Console_Verification_Code",
  },

}

export default function QariAbdulBasitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData
        type="person"
        data={{
          name: "Qari Abdul Basit Abd us-Samad",
          description: "Renowned Quranic reciter from Egypt (1927-1988)",
          url: "https://suraherahman.com/qari-abdul-basit",
          nationality: "Egyptian",
        }}
      />
      <StructuredData
        type="audioObject"
        data={{
          name: "Surah Rahman by Qari Abdul Basit",
          description: "Beautiful recitation of Surah Rahman by Qari Abdul Basit Abd us-Samad",
          url: "https://suraherahman.com/audio/surah-rahman-abdul-basit.mp3",
          duration: "PT12M45S",
          reciter: "Qari Abdul Basit Abd us-Samad",
        }}
      />

      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <img
                  src="https://suraherahman.com/images/qari-abdul-basit.webp"
                  alt="Qari Abdul Basit Abd us-Samad"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Qari Abdul Basit Abd us-Samad</h1>
              <p className="text-xl text-muted-foreground mb-2">قاری عبدالباسط عبدالصمد</p>
              <p className="text-lg text-muted-foreground">1927 - 1988 | Egypt</p>
            </div>

            {/* Audio Player Section */}
            <div className="mb-8">
              <AudioPlayer
                src="/assets/mp3/suraherahman-qari-basit.mp3"
                title="Surah Rahman"
                reciter="Qari Abdul Basit Abd us-Samad"
                reciterImage="https://suraherahman.com/images/qari-abdul-basit.webp"
                downloadUrl="/assets/mp3/suraherahman-qari-basit.mp3"
              />
            </div>

            {/* Biography Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Qari Abdul Basit Abd us-Samad was one of the most renowned Quranic reciters of the 20th century.
                    Born in Egypt in 1927, he became famous worldwide for his melodious and emotionally moving
                    recitations of the Holy Quran.
                  </p>
                  <p>
                    His recitation style was characterized by perfect pronunciation, beautiful melody, and deep
                    spiritual connection that touched the hearts of millions of Muslims around the world.
                  </p>
                  <p>
                    Qari Abdul Basit's recitations have been broadcast on radio and television stations globally, making
                    him one of the most recognized voices in Islamic recitation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>First prize winner in international Quran recitation competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Official reciter for Egyptian Radio and Television</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Performed Hajj recitations in Mecca and Medina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recorded complete Quran in multiple Qira'at styles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Influenced generations of Quranic reciters worldwide</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recitation Style */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recitation Style & Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Vocal Qualities</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Deep, resonant voice with perfect pitch control</li>
                      <li>• Exceptional breath control and pacing</li>
                      <li>• Emotional depth that moves listeners to tears</li>
                      <li>• Crystal clear pronunciation of Arabic letters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Technical Excellence</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Master of Hafs 'an 'Asim recitation style</li>
                      <li>• Perfect application of Tajweed rules</li>
                      <li>• Consistent rhythm and melodic patterns</li>
                      <li>• Appropriate pauses and emphasis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Explore More</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-arabic" className="flex flex-col items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Read Arabic Text</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/mishari-al-afasi" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎙️</span>
                    <span>Mishari al-Afasi</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-benefits" className="flex flex-col items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Surah Benefits</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-listen-online" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎧</span>
                    <span>Listen Online</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
