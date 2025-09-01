import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HomeSeoArticle } from "@/components/home-seo-article"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SurahFull } from "@/components/surah-full"
import Link from "next/link"
import dynamic from "next/dynamic"
import Script from "next/script" // Correct way to include JSON-LD in App Router
// Updated Arabic verses
  const arabicVerses = [
    { number: 1, arabic: "اَلرَّحۡمٰنُ ۙ" },
    { number: 2, arabic: "عَلَّمَ الۡقُرۡاٰنَ ؕ" },
    { number: 3, arabic: "خَلَقَ الۡاِنۡسَانَ ۙ" },
    { number: 4, arabic: "عَلَّمَہُ الۡبَیَانَ" },
    { number: 5, arabic: "اَلشَّمۡسُ وَ الۡقَمَرُ بِحُسۡبَانٍ" },
    { number: 6, arabic: "وَّ النَّجۡمُ وَ الشَّجَرُ یَسۡجُدٰنِ" },
    { number: 7, arabic: "وَ السَّمَآءَ رَفَعَہَا وَ وَضَعَ الۡمِیۡزَانَ ۙ" },
    { number: 8, arabic: "اَلَّا تَطۡغَوۡا فِی الۡمِیۡزَانِ" },
    { number: 9, arabic: "وَ اَقِیۡمُوا الۡوَزۡنَ بِالۡقِسۡطِ وَ لَا تُخۡسِرُوا الۡمِیۡزَانَ" },
    { number: 10, arabic: "وَ الۡاَرۡضَ وَضَعَہَا لِلۡاَنَامِ" },
    { number: 11, arabic: "فِیۡہَا فَاکِہَۃٌ ۪ۙ وَّ النَّخۡلُ ذَاتُ الۡاَکۡمَامِ" },
    { number: 12, arabic: "وَ الۡحَبُّ ذُو الۡعَصۡفِ وَ الرَّیۡحَانُ" },
    { number: 13, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 14, arabic: "خَلَقَ الۡاِنۡسَانَ مِنۡ صَلۡصَالٍ کَالۡفَخَّارِ" },
    { number: 15, arabic: "وَ خَلَقَ الۡجَآنَّ مِنۡ مَّارِجٍ مِّنۡ نَّارٍ" },
    { number: 16, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 17, arabic: "رَبُّ الۡمَشۡرِقَیۡنِ وَ رَبُّ الۡمَغۡرِبَیۡنِ" },
    { number: 18, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 19, arabic: "مَرَجَ الۡبَحۡرَیۡنِ یَلۡتَقِیٰنِ" },
    { number: 20, arabic: "بَیۡنَہُمَا بَرۡزَخٌ لَّا یَبۡغِیٰنِ" },
    { number: 21, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 22, arabic: "یَخۡرُجُ مِنۡہُمَا اللُّؤۡلُؤُ وَ الۡمَرۡجَانُ" },
    { number: 23, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 24, arabic: "وَ لَہُ الۡجَوَارِ الۡمُنۡشَئٰتُ فِی الۡبَحۡرِ کَالۡاَعۡلَامِ" },
    { number: 25, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 26, arabic: "کُلُّ مَنۡ عَلَیۡہَا فَانٍ" },
    { number: 27, arabic: "وَّ یَبۡقٰی وَجۡہُ رَبِّکَ ذُو الۡجَلٰلِ وَ الۡاِکۡرَامِ" },
    { number: 28, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 29, arabic: "یَسۡـَٔلُہٗ مَنۡ فِی السَّمٰوٰتِ وَ الۡاَرۡضِ ؕ کُلَّ یَوۡمٍ ہُوَ فِیۡ شَاۡنٍ" },
    { number: 30, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 31, arabic: "سَنَفۡرُغُ لَکُمۡ اَیُّہَ الثَّقَلٰنِ" },
    { number: 32, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 33,
      arabic: "یٰمَعۡشَرَ الۡجِنِّ وَ الۡاِنۡسِ اِنِ اسۡتَطَعۡتُمۡ اَنۡ تَنۡفُذُوۡا مِنۡ اَقۡطَارِ السَّمٰوٰتِ وَ الۡاَرۡضِ فَانۡفُذُوۡا ؕ لَا تَنۡفُذُوۡنَ اِلَّا بِسُلۡطٰنٍ",
    },
    { number: 34, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 35, arabic: "یُرۡسَلُ عَلَیۡکُمَا شُوَاظٌ مِّنۡ نَّارٍ ۬ۙ وَّ نُحَاسٌ فَلَا تَنۡتَصِرٰنِ" },
    { number: 36, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 37, arabic: "فَاِذَا انۡشَقَّتِ السَّمَآءُ فَکَانَتۡ وَرۡدَۃً کَالدِّہَانِ" },
    { number: 38, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 39, arabic: "فَیَوۡمَئِذٍ لَّا یُسۡـَٔلُ عَنۡ ذَنۡۢبِہٖۤ اِنۡسٌ وَّ لَا جَآنٌّ" },
    { number: 40, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 41, arabic: "یُعۡرَفُ الۡمُجۡرِمُوۡنَ بِسِیۡمٰہُمۡ فَیُؤۡخَذُ بِالنَّوَاصِیۡ وَ الۡاَقۡدَامِ" },
    { number: 42, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 43, arabic: "ہٰذِہٖ جَہَنَّمُ الَّتِیۡ یُکَذِّبُ بِہَا الۡمُجۡرِمُوۡنَ" },
    { number: 44, arabic: "یَطُوۡفُوۡنَ بَیۡنَہَا وَ بَیۡنَ حَمِیۡمٍ اٰنٍ" },
    { number: 45, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 46, arabic: "وَ لِمَنۡ خَافَ مَقَامَ رَبِّہٖ جَنَّتٰنِ" },
    { number: 47, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 48, arabic: "ذَوَاتَاۤ اَفۡنَانٍ" },
    { number: 49, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 50, arabic: "فِیۡہِمَا عَیۡنٰنِ تَجۡرِیٰنِ" },
    { number: 51, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 52, arabic: "فِیۡہِمَا مِنۡ کُلِّ فَاکِہَۃٍ زَوۡجٰنِ" },
    { number: 53, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 54, arabic: "مُتَّکِـِٕیۡنَ عَلٰی فُرُشٍۭ بَطَآئِنُہَا مِنۡ اِسۡتَبۡرَقٍ ؕ وَ جَنَا الۡجَنَّتَیۡنِ دَانٍ" },
    { number: 55, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 56, arabic: "فِیۡہِنَّ قٰصِرٰتُ الطَّرۡفِ ۙ لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ" },
    { number: 57, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 58, arabic: "کَاَنَّہُنَّ الۡیَاقُوۡتُ وَ الۡمَرۡجَانُ" },
    { number: 59, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 60, arabic: "ہَلۡ جَزَآءُ الۡاِحۡسَانِ اِلَّا الۡاِحۡسَانُ" },
    { number: 61, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 62, arabic: "وَ مِنۡ دُوۡنِہِمَا جَنَّتٰنِ" },
    { number: 63, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 64, arabic: "مُدۡہَآ مَّتٰنِ" },
    { number: 65, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 66, arabic: "فِیۡہِمَا عَیۡنٰنِ نَضَّاخَتٰنِ" },
    { number: 67, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 68, arabic: "فِیۡہِمَا فَاکِہَۃٌ وَّ نَخۡلٌ وَّ رُمَّانٌ" },
    { number: 69, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 70, arabic: "فِیۡہِنَّ خَیۡرٰتٌ حِسَانٌ" },
    { number: 71, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 72, arabic: "حُوۡرٌ مَّقۡصُوۡرٰتٌ فِی الۡخِیَامِ" },
    { number: 73, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 74, arabic: "لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ" },
    { number: 75, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 76, arabic: "مُتَّکِـِٕیۡنَ عَلٰی رَفۡرَفٍ خُضۡرٍ وَّ عَبۡقَرِیٍّ حِسَانٍ" },
    { number: 77, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 78, arabic: "تَبٰرَکَ اسۡمُ رَبِّکَ ذِی الۡجَلٰلِ وَ الۡاِکۡرَامِ" },
  ]
// Defer loading the (heavier) gallery JS until after hydration
const SurahImageGallery = dynamic(
  () => import("@/components/surah-image-gallery").then(m => m.SurahImageGallery),
  { ssr: true, loading: () => (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="h-40 w-full animate-pulse rounded-xl bg-muted" />
        </div>
      </section>
    )
  }
)

export default function HomePage() {
  const galleryImages = [
    {
      src: "https://suraherahman.com/suraherahman-1.jpg",
      alt: "Surah Rahman – Arabic Page 1",
      page: 1,
    },
    {
      src: "https://suraherahman.com/suraherahman-2.jpg",
      alt: "Surah Rahman – Arabic Page 2",
      page: 2,
    },
    {
      src: "https://suraherahman.com/suraherahman-3.jpg",
      alt: "Surah Rahman – Arabic Page 3",
      page: 3,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Surah Rahman</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Experience the beauty and blessings of Surah Rahman with authentic Arabic text, translations in multiple
              languages, and beautiful recitations by renowned Qaris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/surah-rahman-listen-online">Listen Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/surah-rahman-read-online">Read Online</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Surah Rahman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Arabic Text</CardTitle>
                  <CardDescription>Read the original Arabic text with proper Tajweed</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-arabic">Read Arabic</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Urdu Translation</CardTitle>
                  <CardDescription>Understand the meaning in beautiful Urdu</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-urdu">Read Urdu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>English Translation</CardTitle>
                  <CardDescription>Comprehend the verses in clear English</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-english">Read English</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Qari Abdul Basit</CardTitle>
                  <CardDescription>Listen to the melodious recitation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/qari-abdul-basit">Listen Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mishari al-Afasi</CardTitle>
                  <CardDescription>Experience the beautiful recitation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/mishari-al-afasi">Listen Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PDF Download</CardTitle>
                  <CardDescription>View and download high-quality PDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-pdf">View PDF</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <SurahFull verses={arabicVerses} />
        {/* Image Gallery Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold">Arabic Pages Gallery</h2>
                <p className="text-muted-foreground">
                  Browse high-quality scans of Surah Rahman (original Arabic script)
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-arabic">View All Pages</Link>
              </Button>
            </div>

            <SurahImageGallery images={galleryImages} title="Surah Rahman - Arabic Pages" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Surah Rahman</h2>
              <p className="text-lg text-muted-foreground text-balance mb-8">
                Surah Rahman, known as "The Most Merciful," is the 55th chapter of the Holy Quran. It beautifully
                describes Allah's countless blessings and mercy upon His creation. This website provides you with
                authentic recitations, translations, and the spiritual benefits of this blessed chapter.
              </p>
              <Button asChild size="lg">
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
        <HomeSeoArticle />
      </main>

      <Footer />
      
      {/* Structured Data - JSON-LD for FAQ */}
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are the benefits of Surah Rahman?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Reciting Surah Rahman brings blessings, peace, and spiritual healing. It is often recited for gratitude and reflection on Allah’s Mercy."
              }
            },
            {
              "@type": "Question",
              "name": "Where can I listen to Surah Rahman MP3?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can stream or download Surah Rahman MP3 by Qari Abdul Basit and Mishari Al-Afasi on this page’s audio players."
              }
            },
            {
              "@type": "Question",
              "name": "Is Surah Rahman available with Urdu & English translation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, this website provides the original Arabic text alongside translations in both Urdu and English for easy understanding."
              }
            }
          ]
        }) }} />
    </div>
  )
}
