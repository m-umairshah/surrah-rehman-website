import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SurahImageGallery } from "@/components/surah-image-gallery"
import Link from "next/link"
import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Surah Rahman Arabic Text - Original Quran Chapter 55",
  description:
    "Read Surah Rahman in original Arabic text with proper Tajweed. Chapter 55 of the Holy Quran with authentic Arabic script and verse numbers.",
  keywords:
    "surah rahman arabic, quran arabic text, surah rahman original, arabic quran chapter 55, tajweed, quranic arabic",
  alternates: {
    canonical: "https://suraherahman.com/surah-rahman-arabic",
  },
  openGraph: {
    title: "Surah Rahman Arabic Text - Original Quran Chapter 55",
    description: "Read Surah Rahman in original Arabic text with proper Tajweed.",
    url: "https://suraherahman.com/surah-rahman-arabic",
    type: "article",
  },
}

export default function SurahRahmanArabicPage() {
  const surahImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suraherahman-1.jpg-PaPItUw7pmFfdZXgNglQSIv1LltPar.jpeg",
      alt: "Surah Rahman Page 1 - Arabic Text",
      page: 1,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suraherahman-2.jpg-etSzJcsqyUKxNsfBwa6vYJlsgZrSka.jpeg",
      alt: "Surah Rahman Page 2 - Arabic Text",
      page: 2,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suraherahman-3.jpg-ZPPq6i2RrqskwUjKSJ58OJMmeVYaYj.jpeg",
      alt: "Surah Rahman Page 3 - Arabic Text",
      page: 3,
    },
  ]

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

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData
        type="article"
        data={{
          title: "Surah Rahman Arabic Text",
          description: "Original Arabic text of Surah Rahman with proper Tajweed",
          url: "https://suraherahman.com/surah-rahman-arabic",
        }}
      />
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">سُورَةُ الرَّحۡمَٰن</h1>
              <p className="text-xl text-muted-foreground">Surah Rahman - Arabic Text</p>
              <p className="text-sm text-muted-foreground mt-2">Chapter 55 • 78 Verses • Meccan</p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild variant="outline">
                <Link href="/surah-rahman-urdu">Urdu Translation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-english">English Translation</Link>
              </Button>
              <Button asChild>
                <Link href="/surah-rahman-listen-online">Listen Online</Link>
              </Button>
            </div>

            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</CardTitle>
                <p className="text-sm text-muted-foreground">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </CardHeader>
            </Card>

            <div className="mb-12">
              <SurahImageGallery images={surahImages} title="Surah Rahman - Original Arabic Pages" />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Text Version</h2>
              <p className="text-muted-foreground">Read the verses in text format below</p>
            </div>

            <div className="space-y-6">
              {arabicVerses.map((verse, index) => (
                <Card key={index} className="p-6">
                  <div className="text-right mb-4">
                    <p className="text-2xl leading-relaxed font-arabic" dir="rtl">
                      {verse.arabic}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                    <span>Verse {verse.number}</span>
                    <span>سُورَةُ الرَّحۡمَٰن</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Continue Your Journey</h2>
                <p className="text-muted-foreground mb-6">Explore more ways to experience Surah Rahman</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/surah-rahman-benefits">Learn Benefits</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/qari-abdul-basit">Listen to Qari Abdul Basit</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/assets/pdf/suraherahman.pdf">Download PDF</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
