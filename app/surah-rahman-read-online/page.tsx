import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Surah Rahman online with Arabic",
  description:
    "Read Surah Rahman online with Arabic text, Urdu and English translations. Explore virtues, benefits, and recitations to experience the beauty of Chapter 55.",
  keywords:
    "read surah rahman online, surah ar rahman arabic, english, urdu, islamic translations, read in pdf",

  openGraph: {
    title: "Read Surah Rahman Online - Arabic, Urdu & English Translations",
    description:
      "Read Surah Rahman online in Arabic, Urdu, and English. Complete Chapter 55 of the Holy Quran with multiple language options and beautiful formatting.",
    url: "https://suraherahman.com/surah-rahman-read-online",
    type: "article",
    images: [
      {
        url: "https://suraherahman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Read Surah Rahman Online",
      },
    ],
  },
};

export default function SurahRahmanReadOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Read Surah Rahman Online
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Choose your preferred language to read the complete Surah Rahman
              </p>
            </div>
            

            {/* Language Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">العربية</CardTitle>
                  <p className="text-muted-foreground">Original Arabic Text</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-lg font-arabic" dir="rtl">
                      ٱلرَّحۡمَٰنُ عَلَّمَ ٱلۡقُرۡءَانَ
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-arabic">Read in Arabic</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">اردو</CardTitle>
                  <p className="text-muted-foreground">Urdu Translation</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-lg" dir="rtl">
                      اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گے
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-urdu">Read in Urdu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">English</CardTitle>
                  <p className="text-muted-foreground">English Translation</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-lg">
                      The Most Merciful taught the Quran
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-english">Read in English</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            {/* --- Surah Rahman Detailed Articles --- */}
            <section className="max-w-4xl mx-auto mt-12 mb-12 space-y-12">
              {/* Arabic */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  📖 Surah Rahman in Arabic
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Surah Rahman is one of the most beautiful and oft-recited
                  chapters of the Holy Quran. Reading it in Arabic connects
                  believers directly with the divine words of Allah ﷻ in their
                  original form. The eloquence, rhythm, and flow of its verses
                  are unmatched and carry a spiritual depth that touches the
                  heart.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Why Read in Arabic?
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Reciting in the original language preserves the Quran’s
                    divine rhythm and style.
                  </li>
                  <li>
                    Each verse holds linguistic beauty that translations cannot
                    fully capture.
                  </li>
                  <li>
                    Reading in Arabic is itself an act of worship with immense
                    reward.
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  By engaging with Surah Rahman in Arabic, Muslims strengthen
                  their bond with the Quran and experience its message in the
                  form it was revealed.
                </p>
              </article>

              {/* Urdu */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  📖 Surah Rahman with Urdu Translation
                </h2>
                <p className="mb-4 text-muted-foreground">
                  For Urdu-speaking Muslims, reading Surah Rahman with Urdu
                  translation provides a deeper understanding of Allah’s
                  message. While Arabic recitation brings immense spiritual
                  reward, the translation allows believers to reflect upon the
                  meanings and apply them in everyday life.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Benefits of Urdu Translation
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Understanding Allah’s countless blessings highlighted
                    throughout the Surah.
                  </li>
                  <li>
                    Strengthening gratitude and mindfulness in daily living.
                  </li>
                  <li>
                    Applying Quranic lessons practically in personal and family
                    matters.
                  </li>
                  <li>
                    Sharing the message of mercy and compassion with
                    Urdu-speaking communities.
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Many platforms now provide synchronized Arabic recitation with
                  Urdu translation, making it easier to read, listen, and
                  reflect simultaneously.
                </p>
              </article>

              {/* English */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  📖 Surah Rahman with English Translation
                </h2>
                <p className="mb-4 text-muted-foreground">
                  For global audiences, Surah Rahman with English translation
                  opens the door to the beauty of Chapter 55 of the Quran.
                  Non-Arabic speakers can engage with the Surah’s teachings of
                  mercy, gratitude, and divine blessings in clear, accessible
                  English.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Why Choose English Translation?
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Helps new Muslims and non-Arabic speakers understand the
                    Quran deeply.
                  </li>
                  <li>
                    Offers clarity on the meaning of repeated verses like{" "}
                    <em>“Which of the favors of your Lord will you deny?”</em>
                  </li>
                  <li>
                    Encourages reflection and discussion in families, study
                    groups, and classrooms.
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Reading Surah Rahman in English translation ensures that the
                  universal message of the Quran reaches all believers,
                  regardless of language.
                </p>
              </article>
            </section>
            {/* Surah Rahman Description */}
            <div className="text-center mb-12">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">About Surah Rahman</h2>
                <p className="text-lg text-muted-foreground text-balance mb-6">
                  Surah Rahman is the 55th chapter of the Holy Quran, consisting
                  of 78 verses. Known as "The Most Merciful," it beautifully
                  describes Allah's countless blessings and mercy upon His
                  creation. The chapter repeatedly asks "Which of the favors of
                  your Lord would you deny?" emphasizing gratitude for divine
                  blessings.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Chapter:</strong> 55
                  </div>
                  <div>
                    <strong>Verses:</strong> 78
                  </div>
                  <div>
                    <strong>Type:</strong> Meccan
                  </div>
                </div>
              </Card>
            </div>

            {/* Related Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">
                More Ways to Experience Surah Rahman
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <span>Benefits</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/assets/pdf/suraherahman.pdf"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">📄</span>
                    <span>Download PDF</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/about-us"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg">ℹ️</span>
                    <span>About Us</span>
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
