import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SurahFull } from "@/components/surah-full"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read Surah Ar Rahman online with Arabic",
  description:
    "Read Surah Ar Rahman online with Urdu and English translations. Explore benefits, and recitations to experience the beauty of Surrah al rahman online.",
  keywords:
    "read surah rahman online, surah ar rahman arabic, english, urdu, islamic translations, read in pdf",

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
    {
      number: 9,
      arabic:
        "وَ اَقِیۡمُوا الۡوَزۡنَ بِالۡقِسۡطِ وَ لَا تُخۡسِرُوا الۡمِیۡزَانَ",
    },
    { number: 10, arabic: "وَ الۡاَرۡضَ وَضَعَہَا لِلۡاَنَامِ" },
    {
      number: 11,
      arabic: "فِیۡہَا فَاکِہَۃٌ ۪ۙ وَّ النَّخۡلُ ذَاتُ الۡاَکۡمَامِ",
    },
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
    {
      number: 24,
      arabic: "وَ لَہُ الۡجَوَارِ الۡمُنۡشَئٰتُ فِی الۡبَحۡرِ کَالۡاَعۡلَامِ",
    },
    { number: 25, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 26, arabic: "کُلُّ مَنۡ عَلَیۡہَا فَانٍ" },
    {
      number: 27,
      arabic: "وَّ یَبۡقٰی وَجۡہُ رَبِّکَ ذُو الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    },
    { number: 28, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 29,
      arabic:
        "یَسۡـَٔلُہٗ مَنۡ فِی السَّمٰوٰتِ وَ الۡاَرۡضِ ؕ کُلَّ یَوۡمٍ ہُوَ فِیۡ شَاۡنٍ",
    },
    { number: 30, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    { number: 31, arabic: "سَنَفۡرُغُ لَکُمۡ اَیُّہَ الثَّقَلٰنِ" },
    { number: 32, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 33,
      arabic:
        "یٰمَعۡشَرَ الۡجِنِّ وَ الۡاِنۡسِ اِنِ اسۡتَطَعۡتُمۡ اَنۡ تَنۡفُذُوۡا مِنۡ اَقۡطَارِ السَّمٰوٰتِ وَ الۡاَرۡضِ فَانۡفُذُوۡا ؕ لَا تَنۡفُذُوۡنَ اِلَّا بِسُلۡطٰنٍ",
    },
    { number: 34, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 35,
      arabic:
        "یُرۡسَلُ عَلَیۡکُمَا شُوَاظٌ مِّنۡ نَّارٍ ۬ۙ وَّ نُحَاسٌ فَلَا تَنۡتَصِرٰنِ",
    },
    { number: 36, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 37,
      arabic: "فَاِذَا انۡشَقَّتِ السَّمَآءُ فَکَانَتۡ وَرۡدَۃً کَالدِّہَانِ",
    },
    { number: 38, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 39,
      arabic:
        "فَیَوۡمَئِذٍ لَّا یُسۡـَٔلُ عَنۡ ذَنۡۢبِہٖۤ اِنۡسٌ وَّ لَا جَآنٌّ",
    },
    { number: 40, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 41,
      arabic:
        "یُعۡرَفُ الۡمُجۡرِمُوۡنَ بِسِیۡمٰہُمۡ فَیُؤۡخَذُ بِالنَّوَاصِیۡ وَ الۡاَقۡدَامِ",
    },
    { number: 42, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 43,
      arabic: "ہٰذِہٖ جَہَنَّمُ الَّتِیۡ یُکَذِّبُ بِہَا الۡمُجۡرِمُوۡنَ",
    },
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
    {
      number: 54,
      arabic:
        "مُتَّکِـِٕیۡنَ عَلٰی فُرُشٍۭ بَطَآئِنُہَا مِنۡ اِسۡتَبۡرَقٍ ؕ وَ جَنَا الۡجَنَّتَیۡنِ دَانٍ",
    },
    { number: 55, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 56,
      arabic:
        "فِیۡہِنَّ قٰصِرٰتُ الطَّرۡفِ ۙ لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ",
    },
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
    {
      number: 74,
      arabic: "لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ",
    },
    { number: 75, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 76,
      arabic: "مُتَّکِـِٕیۡنَ عَلٰی رَفۡرَفٍ خُضۡرٍ وَّ عَبۡقَرِیٍّ حِسَانٍ",
    },
    { number: 77, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ" },
    {
      number: 78,
      arabic: "تَبٰرَکَ اسۡمُ رَبِّکَ ذِی الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    },
  ];

export default function SurahRahmanReadOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Read Surah Ar-Rahman Online
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Choose your preferred language to read the Surah al Rahman Online
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

            <SurahFull verses={arabicVerses} />

            {/* Surah Rahman Description */}
            <div className="text-center mb-12 mt-12">
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
