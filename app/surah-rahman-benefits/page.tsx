import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Surah Rahman Benefits - Spiritual Blessings",
  description:
    "Discover the virtues, blessings, and healing benefits of Surah Rahman (Chapter 55). Learn its rewards, spiritual effects, and power in the Holy Quran.",
  keywords:
    "Explore Surah Rahman benefits, Quranic healing, Islamic blessings, virtues, and spiritual rewards.",
  openGraph: {
    title: "Surah Rahman Benefits - Spiritual Rewards and Blessings",
    description:
      "Discover the spiritual rewards and blessings of reciting Surah Rahman. Learn about the blessings, virtues, and positive effects of Chapter 55 of the Holy Quran.",
    url: "https://suraherahman.com/surah-rahman-benefits",
    type: "article",
    images: [
      {
        url: "https://suraherahman.com/surah-rahman-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surah Rahman Benefits - Spiritual Rewards and Blessings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surah Rahman Benefits - Spiritual Rewards and Blessings",
    description:
      "Discover the spiritual rewards and blessings of reciting Surah Rahman. Learn about the blessings, virtues, and positive effects of Chapter 55 of the Holy Quran.",
    images: ["https://suraherahman.com/surah-rahman-image.jpg"],
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
    google: "Google_Search_Console_Verification_Code", // Replace with your actual verification code
  },
};

export default function SurahRahmanBenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Benefits of Surah Rahman
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Discover the spiritual rewards and blessings of reciting the
                Chapter of the Most Merciful
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  The Chapter of Mercy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-muted-foreground mb-6">
                  Surah Rahman, known as "The Most Merciful," is a chapter that
                  beautifully describes Allah's countless blessings and mercy.
                  Reciting this blessed chapter brings numerous spiritual and
                  worldly benefits.
                </p>
                <div className="text-center">
                  <div className="inline-block bg-primary/10 rounded-lg p-4">
                    <p className="text-2xl font-arabic" dir="rtl">
                      فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      "So which of the favors of your Lord would you deny?"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spiritual Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🤲</span>
                    <h2>Spiritual Benefits</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Increased Faith (Iman):</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Regular recitation strengthens belief and connection
                          with Allah
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Heart Purification:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Cleanses the heart from negative thoughts and emotions
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Divine Protection:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Provides spiritual protection from evil and harm
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Gratitude Enhancement:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Increases awareness and appreciation of Allah's
                          blessings
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌟</span>
                    <h2>Worldly Benefits</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Peace of Mind:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Brings tranquility and reduces anxiety and stress
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Healing Properties:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Believed to have therapeutic effects on physical and
                          mental health
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Barakah in Life:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Brings blessings and positive changes in daily life
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <h3><strong>Better Sleep:</strong></h3>
                        <p className="text-sm text-muted-foreground">
                          Reciting before sleep promotes peaceful rest
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Internal Linking Section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Explore More</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/surah-rahman-arabic">
                    Read Surah Rahman Arabic
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/surah-rahman-english">
                    Read Surah Rahman in English
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/surah-rahman-listen-online">
                    Listen to Surah Rahman Online
                  </Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Related Resources</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg">
                  <Link href="/surah-rahman-benefits">
                    Surah Rahman Spiritual Benefits
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/qari-abdul-basit">
                    Listen to Qari Abdul Basit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/mishari-al-afasi">
                    Listen to Mishari al-Afasi
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
