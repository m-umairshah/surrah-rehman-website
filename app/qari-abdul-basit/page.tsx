import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/audio-player";
import Link from "next/link";
import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import Script from "next/script"; // Correct way to include JSON-LD in App Router

export const metadata: Metadata = {
  title: "Qari Abdul Basit - Surah Rahman Recitation",
  description:
    "Listen to Surah Rahman recited by Qari Abdul Basit Abd us-Samad. Experience his melodious and soul-stirring recitation of Chapter 55 of the Holy Quran.",
  keywords:
    "qari abdul basit, abdul basit surah rahman, quran tilawat, islamic audio, famous qari, qari voice",
  openGraph: {
    title: "Qari Abdul Basit - Surah Rahman Recitation",
    description:
      "Listen to Surah Rahman recited by Qari Abdul Basit Abd us-Samad, known for his beautiful and emotional recitation of the Quran.",
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
      "Listen to Surah Rahman recited by Qari Abdul Basit Abd us-Samad.",
    images: ["https://suraherahman.com/images/qari-abdul-basit.webp"],
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
};

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
          description:
            "Beautiful recitation of Surah Rahman by Qari Abdul Basit Abd us-Samad",
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
              <h1 className="text-4xl font-bold mb-4">
                Qari Abdul Basit Abd us-Samad
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                قاری عبدالباسط عبدالصمد
              </p>
              <p className="text-lg text-muted-foreground">
                1927 - 1988 | Egypt
              </p>
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

            <section className="mx-auto mt-12 mb-12 space-y-10">
              {/* H2: Biography & Timeline */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  Qari Abdul Basit – Biography & Timeline
                </h2>

                {/* Intro */}
                <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
                <p className="text-muted-foreground mb-3">
                  Qari Abdul Basit Abdul Samad (1927–1988) is widely regarded as
                  one of the most influential Quran reciters in the world. His
                  breathtaking voice, unique style, and mastery of tajweed made
                  him a global icon of tilawat. Millions still listen to his
                  legendary Surah Rahman recitation, which continues to inspire
                  generations.
                </p>
                <h4 className="text-lg font-semibold mb-2">
                  Scope of this Biography
                </h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>Year-wise overview of life and milestones</li>
                  <li>Key achievements and international recognition</li>
                  <li>
                    Lasting contributions to Islamic spirituality and Quran
                    recitation
                  </li>
                </ul>

                {/* Early Life */}
                <h3 className="text-2xl font-semibold mb-2">
                  Early Life (1927–1945)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1927</strong> — Born in Armant, Egypt, to a devout
                    Muslim family; gifted with extraordinary vocal talent.
                  </li>
                  <li>
                    Memorized the entire Quran (Hafiz) by age 10 in a deeply
                    religious environment.
                  </li>
                  <li>
                    Studied tajweed and qirā’āt under local scholars, excelling
                    in melody and precision.
                  </li>
                </ul>

                {/* Rise to Fame */}
                <h3 className="text-2xl font-semibold mb-2">
                  Rise to Fame (1946–1951)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1946</strong> — Began public recitations in Cairo
                    and nearby regions; drew large audiences.
                  </li>
                  <li>
                    <strong>1949</strong> — Recognized in Quran competitions as
                    a promising young reciter.
                  </li>
                  <li>
                    <strong>1951</strong> — Gained national attention at a
                    Mawlid in Cairo; radio broadcast captivated listeners.
                  </li>
                </ul>

                {/* National Recognition */}
                <h3 className="text-2xl font-semibold mb-2">
                  National Recognition (1952–1959)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1952</strong> — Invited to Egypt’s official Radio
                    Quran Station; recitations reached millions.
                  </li>
                  <li>
                    <strong>1955</strong> — Became a household name noted for
                    clarity, melody, and emotion.
                  </li>
                  <li>
                    <strong>1957</strong> — Received multiple awards as one of
                    Egypt’s most beloved reciters.
                  </li>
                  <li>
                    Surah Rahman recitation gained exceptional popularity across
                    the country.
                  </li>
                </ul>

                {/* International Fame */}
                <h3 className="text-2xl font-semibold mb-2">
                  International Fame (1960–1969)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1960</strong> — Recited in Pakistan; massive crowds
                    and deep impact across South Asia.
                  </li>
                  <li>
                    <strong>1961</strong> — Performed in Indonesia and Malaysia;
                    fame spread through Southeast Asia.
                  </li>
                  <li>
                    <strong>1962–1964</strong> — Represented Egypt at
                    international Quran conferences (India, Sudan, Saudi
                    Arabia).
                  </li>
                  <li>
                    <strong>1966</strong> — Honored with the title{" "}
                    <em>Sheikh al-Maqāri</em> (Master of Reciters).
                  </li>
                  <li>
                    By late 1960s, recordings distributed worldwide, making him
                    a global ambassador of tilawat.
                  </li>
                </ul>

                {/* Peak Years */}
                <h3 className="text-2xl font-semibold mb-2">
                  Peak Years & Global Recognition (1970–1979)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1970</strong> — Recited at Al-Aqsa Mosque; earned
                    respect from global communities.
                  </li>
                  <li>
                    <strong>1972</strong> — Delivered recitations in London;
                    reached wider European audiences.
                  </li>
                  <li>
                    <strong>1975</strong> — Performed in Makkah and Madinah,
                    cementing legendary status.
                  </li>
                  <li>
                    <strong>1978</strong> — Received high honors from the
                    Egyptian government.
                  </li>
                  <li>
                    1970s saw official studio recordings and cassette
                    distribution across Muslim-majority countries.
                  </li>
                </ul>

                {/* Later Years */}
                <h3 className="text-2xl font-semibold mb-2">
                  Later Years (1980–1988)
                </h3>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>
                    <strong>1980</strong> — Continued international tours across
                    the Middle East, Africa, and Asia.
                  </li>
                  <li>
                    <strong>1982</strong> — Health declined, yet dedication to
                    Quran recitation remained steadfast.
                  </li>
                  <li>
                    <strong>1985</strong> — Final major international tour;
                    honored in multiple Islamic countries.
                  </li>
                  <li>
                    <strong>1988</strong> — Passed away in Egypt, leaving a
                    timeless legacy of Quranic recitation.
                  </li>
                </ul>
              </article>

              {/* H2: Achievements, Recognition & Legacy */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  Achievements, Recognition & Legacy
                </h2>

                {/* Achievements */}
                <h3 className="text-2xl font-semibold mb-2">
                  Global Achievements
                </h3>
                <h4 className="text-lg font-semibold mb-2">Key Accolades</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    Recognized as one of the greatest Qaris of the 20th century.
                  </li>
                  <li>Signature voice on Egypt’s state Radio Quran.</li>
                  <li>
                    International honors from Pakistan, Indonesia, Saudi Arabia,
                    and others.
                  </li>
                  <li>
                    Surah Rahman rendition among history’s most-listened Islamic
                    recordings.
                  </li>
                  <li>
                    Master of tajweed with a melodic style revered by scholars
                    and audiences.
                  </li>
                  <li>
                    Inspired generations of Qaris, including world-renowned
                    figures like Sheikh Mishari Al-Afasi.
                  </li>
                </ul>

                {/* Recognition */}
                <h3 className="text-2xl font-semibold mb-2">
                  Recognition Across the Muslim World
                </h3>
                <h4 className="text-lg font-semibold mb-2">By Region</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>Egypt</strong> — Revered as a national treasure;
                    honored posthumously for lifelong service to the Quran.
                  </li>
                  <li>
                    <strong>Pakistan</strong> — Surah Rahman frequently played
                    on TV/radio, especially in Ramadan.
                  </li>
                  <li>
                    <strong>Global</strong> — Praised for bridging tradition
                    with accessibility and touching hearts worldwide.
                  </li>
                </ul>

                {/* Legacy */}
                <h3 className="text-2xl font-semibold mb-2">
                  Enduring Influence & Legacy
                </h3>
                <h4 className="text-lg font-semibold mb-2">Lasting Impact</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>
                    Remembered as more than a reciter—also a spiritual guide
                    through voice and emotion.
                  </li>
                  <li>
                    Brought the Quran closer to millions, deepening love for
                    divine mercy and remembrance.
                  </li>
                  <li>
                    Recordings remain a cornerstone for study, memorization, and
                    devotional listening.
                  </li>
                </ul>
              </article>
            </section>

            {/* Related Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Explore More</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/surah-rahman-arabic"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">📖</span>
                    <span>Read Arabic Text</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/mishari-al-afasi"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">🎙️</span>
                    <span>Mishari al-Afasi</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/surah-rahman-benefits"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">✨</span>
                    <span>Surah Benefits</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/surah-rahman-listen-online"
                    className="flex flex-col items-center gap-2"
                  >
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
  );
}
