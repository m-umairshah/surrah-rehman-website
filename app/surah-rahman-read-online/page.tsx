import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Read Surah Rahman Online - Arabic, Urdu & English Translations",
  description:
    "Read Surah Rahman online in Arabic, Urdu, and English. Complete Chapter 55 of the Holy Quran with multiple language options and beautiful formatting.",
  keywords:
    "read surah rahman online, quran online reading, surah rahman text, islamic reading online, quran chapter 55",
}

export default function SurahRahmanReadOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Read Surah Rahman Online</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Choose your preferred language to read the complete Surah Rahman
              </p>
            </div>

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
                      رحمان نے قرآن سکھایا
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
                    <p className="text-lg">The Most Merciful taught the Quran</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-english">Read in English</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">About Surah Rahman</h2>
                <p className="text-lg text-muted-foreground text-balance mb-6">
                  Surah Rahman is the 55th chapter of the Holy Quran, consisting of 78 verses. Known as "The Most
                  Merciful," it beautifully describes Allah's countless blessings and mercy upon His creation. The
                  chapter repeatedly asks "Which of the favors of your Lord would you deny?" emphasizing gratitude for
                  divine blessings.
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

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">More Ways to Experience Surah Rahman</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-listen-online" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎧</span>
                    <span>Listen Online</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-benefits" className="flex flex-col items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Benefits</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/assets/pdf/suraherahman.pdf" className="flex flex-col items-center gap-2">
                    <span className="text-lg">📄</span>
                    <span>Download PDF</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/about-us" className="flex flex-col items-center gap-2">
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
  )
}
