import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/audio-player";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script"; // Correct way to include JSON-LD in App Router

export const metadata: Metadata = {
  title: "Mishari al-Afasi - Surah Rahman Recitation",
  description:
    "Listen to Surah Rahman recited by Sheikh Mishari Rashid al-Afasi. Experience his beautiful and contemporary recitation style of Chapter 55 of the Holy Quran.",
  keywords:
    "mishari al-afasi, mishari rashid alafasy, surah rahman recitation, surah rahman mp3",
  openGraph: {
    title: "Mishari al-Afasi - Surah Rahman Recitation",
    description:
      "Listen to Surah Rahman recited by Sheikh Mishari Rashid al-Afasi. Experience his beautiful and contemporary recitation style of Chapter 55 of the Holy Quran.",
    type: "website",
    url: "https://suraherahman.com/mishari-al-afasi",
    images: [
      {
        url: "https://suraherahman.com/images/mishari-al-afasi.jpeg",
        width: 1200,
        height: 630,
        alt: "Sheikh Mishari Rashid al-Afasi - Surah Rahman Recitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mishari al-Afasi - Surah Rahman Recitation",
    description:
      "Listen to Surah Rahman recited by Sheikh Mishari Rashid al-Afasi, with his unique, contemporary Quranic recitation style.",
    images: ["https://suraherahman.com/images/mishari-al-afasi.jpeg"],
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

export default function MishariAlAfasiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <img
                  src="https://suraherahman.com/images/mishari-al-afasi.jpeg"
                  alt="Sheikh Mishari Rashid al-Afasi"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Sheikh Mishari Rashid al-Afasi
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                الشيخ مشاري راشد العفاسي
              </p>
              <p className="text-lg text-muted-foreground">
                Born 1976 | Kuwait
              </p>
            </div>

            {/* Audio Player Section */}
            <div className="mb-8">
              <AudioPlayer
                src="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
                title="Surah Rahman"
                reciter="Sheikh Mishari Rashid al-Afasi"
                reciterImage="https://suraherahman.com/images/mishari-al-afasi.jpeg"
                downloadUrl="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
              />
            </div>

            <section className="mx-auto mt-12 mb-12 space-y-10">
              {/* H2: Biography & Timeline */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  Sheikh Mishari Rashid al-Afasi – Biography & Timeline
                </h2>

                {/* Intro */}
                <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
                <p className="text-muted-foreground mb-3">
                  Sheikh Mishari Rashid al-Afasi (الشيخ مشاري راشد العفاسي) is
                  one of the most renowned Quran reciters and Islamic nasheed
                  artists of the 21st century. Born in Kuwait, his melodious
                  voice, humility, and devotion to the Quran have inspired
                  millions worldwide. He serves as a Qari, imam, religious
                  leader, and munshid (Islamic singer), with recitations widely
                  broadcast on TV, YouTube, and Quran apps.
                </p>
                <h4 className="text-lg font-semibold mb-2">
                  What this section covers
                </h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>Year-wise overview of his life and education</li>
                  <li>Career milestones and public roles</li>
                  <li>Key works, platforms, and reach</li>
                </ul>

                {/* Early Life & Education */}
                <h3 className="text-2xl font-semibold mb-2">
                  Early Life & Education (1976–1995)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Born on <strong>September 5, 1976</strong> in Kuwait City, he
                  showed deep interest in the Quran from a young age. Encouraged
                  by family, he memorized the entire Quran and studied advanced
                  qirā’āt (recitation modes).
                </p>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    <strong>1976</strong> — Birth in Kuwait City, Kuwait.
                  </li>
                  <li>
                    Memorized the Quran (Hafiz) in his youth; began learning
                    various qirā’āt.
                  </li>
                  <li>
                    Studied at the Islamic University of Madinah, specializing
                    in the ten qirā’āt (القراءات العشر).
                  </li>
                </ul>

                {/* Career Start */}
                <h3 className="text-2xl font-semibold mb-2">
                  Career Start (1997–2000)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Began leading Taraweeh in Kuwait; his moving recitations
                  quickly gained attention at home and abroad.
                </p>
                <h4 className="text-lg font-semibold mb-2">Key Moments</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    Popular early recordings of Surah Ar-Rahman, Yā-Sīn, and
                    Al-Kahf.
                  </li>
                  <li>
                    Appearances on Islamic TV; early Quranic CDs expanded his
                    reach.
                  </li>
                </ul>

                {/* Rise to International Fame */}
                <h3 className="text-2xl font-semibold mb-2">
                  Rise to International Fame (2000–2005)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Launched official audio/video releases, including complete
                  Quran recitations; introduced nasheeds blending spirituality
                  and melody.
                </p>
                <h4 className="text-lg font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    Broadcast on Al-Majd TV, Quran TV, and Islamic radio
                    channels.
                  </li>
                  <li>
                    Became imam at Kuwait’s Masjid al-Kabir (Grand Mosque),
                    drawing thousands during Ramadan.
                  </li>
                </ul>

                {/* Awards & Global Recognition */}
                <h3 className="text-2xl font-semibold mb-2">
                  Awards & Global Recognition (2006–2010)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Honored for Quranic recitation and nasheeds; performed across
                  the Middle East and the West. Launched{" "}
                  <strong>Alafasy TV</strong> (2007) for Quran recitation,
                  lectures, and nasheeds.
                </p>
                <h4 className="text-lg font-semibold mb-2">Notable Works</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    Albums such as <em>Qalbi</em>, <em>Ilahi</em>, and{" "}
                    <em>Sammi’ni</em> gained global popularity.
                  </li>
                  <li>
                    Expanded influence through studio-quality productions and
                    live events.
                  </li>
                </ul>

                {/* Widening Reach */}
                <h3 className="text-2xl font-semibold mb-2">
                  Widening Reach (2011–2015)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Embraced digital platforms and apps; his Surah Ar-Rahman
                  recitation became one of the most listened-to versions online.
                </p>
                <h4 className="text-lg font-semibold mb-2">Milestones</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>Consistently led Taraweeh at Kuwait’s Grand Mosque.</li>
                  <li>Featured among influential Muslim personalities.</li>
                </ul>

                {/* New Milestones */}
                <h3 className="text-2xl font-semibold mb-2">
                  New Milestones (2016–2020)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Social media presence grew across YouTube, Facebook, and
                  Instagram; frequently invited to conferences and competitions.
                </p>
                <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>Quran apps among top downloads on Android and iOS.</li>
                  <li>
                    Recognitions from organizations in Malaysia, Indonesia, and
                    Pakistan.
                  </li>
                </ul>

                {/* Continuing Legacy */}
                <h3 className="text-2xl font-semibold mb-2">
                  Continuing Legacy (2021–Present)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Active as imam, Qari, and munshid; maintains a massive global
                  audience via digital platforms.
                </p>
                <h4 className="text-lg font-semibold mb-2">Ongoing Impact</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>
                    YouTube channel with millions of subscribers and billions of
                    views.
                  </li>
                  <li>
                    New nasheeds with strong spiritual themes continue to
                    resonate worldwide.
                  </li>
                  <li>
                    His voice is regularly heard in mosques, apps, and
                    gatherings globally.
                  </li>
                </ul>
              </article>

              {/* H2: Style, Honors & Legacy */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  Style, Recognitions & Legacy
                </h2>

                {/* Style of Recitation */}
                <h3 className="text-2xl font-semibold mb-2">
                  Style of Recitation
                </h3>
                <p className="text-muted-foreground mb-2">
                  Sheikh al-Afasi is admired for a soothing, melodic, and
                  emotionally resonant style that invites reflection on Allah’s
                  words. His delivery is modern yet rooted in tradition—often
                  compared, for global influence, with Qari Abdul Basit.
                </p>
                <h4 className="text-lg font-semibold mb-2">
                  Distinctive Traits
                </h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>
                    Balanced pace, clarity of articulation, and profound khushū‘
                    (devotional humility).
                  </li>
                  <li>
                    Mastery of maqāmāt (melodic modes) while maintaining tajweed
                    precision.
                  </li>
                  <li>
                    Accessibility for memorization and collective listening.
                  </li>
                </ul>

                {/* Recognitions & Honors */}
                <h3 className="text-2xl font-semibold mb-2">
                  Recognitions & Honors
                </h3>
                <p className="text-muted-foreground mb-2">
                  His contributions span recitation, teaching, and media
                  initiatives that amplify Quranic engagement globally.
                </p>
                <h4 className="text-lg font-semibold mb-2">Key Honors</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-6">
                  <li>Imam at the Grand Mosque of Kuwait.</li>
                  <li>
                    Founder of Alafasy TV, promoting Quran and Islamic
                    teachings.
                  </li>
                  <li>Listed among the Top 500 Most Influential Muslims.</li>
                  <li>
                    Recipient of multiple Islamic awards for recitation and
                    nasheeds.
                  </li>
                  <li>
                    Recordings officially used across apps, websites, and global
                    platforms.
                  </li>
                </ul>

                {/* Legacy & Influence */}
                <h3 className="text-2xl font-semibold mb-2">
                  Legacy & Influence
                </h3>
                <p className="text-muted-foreground mb-2">
                  His Quranic recitations are played in homes, cars, mosques,
                  and online—making the Quran more accessible to millions. His
                  Surah Ar-Rahman recitation, in particular, is cherished for
                  its beauty and depth. Through nasheeds, he reaches younger
                  audiences, connecting them to Islamic values.
                </p>
                <h4 className="text-lg font-semibold mb-2">Lasting Impact</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>
                    Role model for contemporary Qaris and nasheed artists.
                  </li>
                  <li>Bridges traditional scholarship with modern media.</li>
                  <li>
                    Inspires devotion, learning, and communal reflection
                    worldwide.
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
                    href="/qari-abdul-basit"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">🎙️</span>
                    <span>Qari Abdul Basit</span>
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
