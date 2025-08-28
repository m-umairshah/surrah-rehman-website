import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Surah Rahman English Translation - Chapter 55 of the Quran",
  description:
    "Read Surah Rahman in English translation. Complete Chapter 55 of the Holy Quran with verse-by-verse English translation and meaning.",
  keywords:
    "surah rahman english, quran english translation, chapter 55 english, surah rahman meaning, islamic english content",
}

export default function SurahRahmanEnglishPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Surah Rahman</h1>
              <p className="text-xl text-muted-foreground">English Translation</p>
              <p className="text-sm text-muted-foreground mt-2">Chapter 55 • 78 Verses • Meccan</p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild variant="outline">
                <Link href="/surah-rahman-arabic">Arabic Text</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-urdu">Urdu Translation</Link>
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

            <div className="space-y-6">
              {englishVerses.map((verse, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <div className="text-right mb-3">
                      <p className="text-xl leading-relaxed font-arabic" dir="rtl">
                        {verse.arabic}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg leading-relaxed">{verse.english}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                    <span>Verse {verse.number}</span>
                    <span>Surah Rahman</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Continue Reading</h2>
                <p className="text-muted-foreground mb-6">Discover the benefits and blessings of Surah Rahman</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/surah-rahman-benefits">Learn Benefits</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/qari-abdul-basit">Qari Abdul Basit</Link>
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

const englishVerses = [
  { number: 1, arabic: "اَلرَّحۡمٰنُ", english: "The Most Compassionate (is He)," },
  {
    number: 2,
    arabic: "عَلَّمَ الۡقُرۡاٰنَ",
    english:
      "Who (Himself) taught the Qur'an (to the Arab Messenger [blessings and peace be upon him] or the humans through him).",
  },
  { number: 3, arabic: "خَلَقَ الۡاِنۡسَانَ", english: "He is the One Who created humankind." },
  { number: 4, arabic: "عَلَّمَہُ الۡبَیَانَ", english: "He alone taught him the art of expression and communication." },
  {
    number: 5,
    arabic: "اَلشَّمۡسُ وَ الۡقَمَرُ بِحُسۡبَانٍ",
    english: "The sun and the moon are rotating according to the configuration determined (by Him).",
  },
  {
    number: 6,
    arabic: "وَّ النَّجۡمُ وَ الشَّجَرُ یَسۡجُدٰنِ",
    english: "And the herbs spread over the earth, and all (species of) the trees prostrate themselves (to Him alone).",
  },
  {
    number: 7,
    arabic: "وَ السَّمَآءَ رَفَعَہَا وَ وَضَعَ الۡمِیۡزَانَ",
    english:
      "And He is the One Who has maintained the sky raised high and (He is the One) Who has set up the balance (for justice),",
  },
  { number: 8, arabic: "اَلَّا تَطۡغَوۡا فِی الۡمِیۡزَانِ", english: "So that you violate not the balance whilst weighing." },
  {
    number: 9,
    arabic: "وَ اَقِیۡمُوا الۡوَزۡنَ بِالۡقِسۡطِ وَ لَا تُخۡسِرُوا الۡمِیۡزَانَ",
    english: "And keep weighing justly and do not make the balance fall short.",
  },
  {
    number: 10,
    arabic: "وَ الۡاَرۡضَ وَضَعَہَا لِلۡاَنَامِ",
    english: "He is the One Who has spread out the earth for the creatures.",
  },
  {
    number: 11,
    arabic: "فِیۡہَا فَاکِہَۃٌ وَّ النَّخۡلُ ذَاتُ الۡاَکۡمَامِ",
    english: "There are fruits in it and blossom-bearing date-palms,",
  },
  {
    number: 12,
    arabic: "وَ الۡحَبُّ ذُو الۡعَصۡفِ وَ الرَّیۡحَانُ",
    english: "And chaff-covered grain and fragrant (fruits and) blooms.",
  },
  {
    number: 13,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    english: "So, (O assembly of jinn and men,) which of your Lord's blessings will you deny?",
  },
  {
    number: 14,
    arabic: "خَلَقَ الۡاِنۡسَانَ مِنۡ صَلۡصَالٍ کَالۡفَخَّارِ",
    english: "He is the One Who created man from a dry mud sounding like earthenware,",
  },
  { number: 15, arabic: "وَ خَلَقَ الۡجَآنَّ مِنۡ مَّارِجٍ مِّنۡ نَّارٍ", english: "And created the jinn from a flame of fire." },
  { number: 16, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 17,
    arabic: "رَبُّ الۡمَشۡرِقَیۡنِ وَ رَبُّ الۡمَغۡرِبَیۡنِ",
    english: "(He alone is) the Lord of the two easts and (He alone is) the Lord of the two wests.",
  },
  { number: 18, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 19,
    arabic: "مَرَجَ الۡبَحۡرَیۡنِ یَلۡتَقِیٰنِ",
    english: "He is the One Who has made the two seas flow that join each other;",
  },
  {
    number: 20,
    arabic: "بَیۡنَہُمَا بَرۡزَخٌ لَّا یَبۡغِیٰنِ",
    english: "There is a barrier between them; they cannot breach (their respective) limits.",
  },
  { number: 21, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 22,
    arabic: "یَخۡرُجُ مِنۡہُمَا اللُّؤۡلُؤُ وَ الۡمَرۡجَانُ",
    english: "The pearls (shading green) and corals (shading red) come forth from both (the seas).",
  },
  { number: 23, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 24,
    arabic: "وَ لَہُ الۡجَوَارِ الۡمُنۡشَئٰتُ فِی الۡبَحۡرِ کَالۡاَعۡلَامِ",
    english:
      "And (under) His (control) are (also) the big vessels with lofty sails raised high (anchoring or sailing) in the sea like mountains.",
  },
  { number: 25, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 26, arabic: "کُلُّ مَنۡ عَلَیۡہَا فَانٍ", english: "Whoever is on the earth will perish." },
  {
    number: 27,
    arabic: "وَّ یَبۡقٰی وَجۡہُ رَبِّکَ ذُو الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    english:
      "And the essence of your Lord, Who is the Master of glory and splendour and the Master of bounty and honour, will remain.",
  },
  { number: 28, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 29,
    arabic: "یَسۡـَٔلُہٗ مَنۡ فِی السَّمٰوٰتِ وَ الۡاَرۡضِ ؕ کُلَّ یَوۡمٍ ہُوَ فِیۡ شَاۡنٍ",
    english: "All that are in the heavens and the earth beg from Him alone. Every moment His Glory manifests anew.",
  },
  { number: 30, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 31,
    arabic: "سَنَفۡرُغُ لَکُمۡ اَیُّہَ الثَّقَلٰنِ",
    english: "O both the groups (of men and jinn), soon shall We attend to your account.",
  },
  { number: 32, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 33,
    arabic: "یٰمَعۡشَرَ الۡجِنِّ وَ الۡاِنۡسِ اِنِ اسۡتَطَعۡتُمۡ اَنۡ تَنۡفُذُوۡا مِنۡ اَقۡطَارِ السَّمٰوٰتِ وَ الۡاَرۡضِ فَانۡفُذُوۡا ؕ لَا تَنۡفُذُوۡنَ اِلَّا بِسُلۡطٰنٍ",
    english:
      "O company of the jinn and men! If you have the power to go across the boundaries of the heaven and the earth (and overpower the universe), then go ahead. Whichever station (i.e., heavenly sphere) you will go to, there too will be His Kingdom alone.",
  },
  { number: 34, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 35,
    arabic: "یُرۡسَلُ عَلَیۡکُمَا شُوَاظٌ مِّنۡ نَّارٍ ۬ۙ وَّ نُحَاسٌ فَلَا تَنۡتَصِرٰنِ",
    english:
      "The flames of pure (i.e., smokeless) fire will be sent upon both of you and (flameless) smoke (too will be sent) and you both will be unable to escape from them.",
  },
  { number: 36, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 37,
    arabic: "فَاِذَا انۡشَقَّتِ السَّمَآءُ فَکَانَتۡ وَرۡدَۃً کَالدِّہَانِ",
    english: "And when the heavens will split apart and will become rosy like burnt oil (or red leather),",
  },
  { number: 38, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 39,
    arabic: "فَیَوۡمَئِذٍ لَّا یُسۡـَٔلُ عَنۡ ذَنۡۢبِہٖۤ اِنۡسٌ وَّ لَا جَآنٌّ",
    english: "That Day no man or jinn will be asked about his sin.",
  },
  { number: 40, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 41,
    arabic: "یُعۡرَفُ الۡمُجۡرِمُوۡنَ بِسِیۡمٰہُمۡ فَیُؤۡخَذُ بِالنَّوَاصِیۡ وَ الۡاَقۡدَامِ",
    english:
      "The evildoers will be recognized by the darkness of their faces and so they will be pulled, seized by their forelocks and feet.",
  },
  { number: 42, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 43,
    arabic: "ہٰذِہٖ جَہَنَّمُ الَّتِیۡ یُکَذِّبُ بِہَا الۡمُجۡرِمُوۡنَ",
    english: "(It will be said to them:) 'It is this Hell which the evildoers used to deny.'",
  },
  {
    number: 44,
    arabic: "یَطُوۡفُوۡنَ بَیۡنَہَا وَ بَیۡنَ حَمِیۡمٍ اٰنٍ",
    english: "They will move about in that (Hell) and in the boiling hot water.",
  },
  { number: 45, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 46,
    arabic: "وَ لِمَنۡ خَافَ مَقَامَ رَبِّہٖ جَنَّتٰنِ",
    english: "And whoever fears standing before his Lord (for meeting), for him are two Gardens.",
  },
  { number: 47, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 48, arabic: "ذَوَاتَاۤ اَفۡنَانٍ", english: "They are (green and fresh Gardens) with deep thick branches." },
  { number: 49, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 50, arabic: "فِیۡہِمَا عَیۡنٰنِ تَجۡرِیٰنِ", english: "Two springs are flowing in both of them." },
  { number: 51, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 52, arabic: "فِیۡہِمَا مِنۡ کُلِّ فَاکِہَۃٍ زَوۡجٰنِ", english: "In them are two kinds of every fruit." },
  { number: 53, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 54,
    arabic: "مُتَّکِـِٕیۡنَ عَلٰی فُرُشٍۭ بَطَآئِنُہَا مِنۡ اِسۡتَبۡرَقٍ ؕ وَ جَنَا الۡجَنَّتَیۡنِ دَانٍ",
    english:
      "The residents of Paradise will be reclining on couches lined with fine and thick brocade (i.e., satin) and the fruits of both the Gardens will be hanging low (over them).",
  },
  { number: 55, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 56,
    arabic: "فِیۡہِنَّ قٰصِرٰتُ الطَّرۡفِ ۙ لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ",
    english: "And in them will be (chaste maidens) with downcast gazes, untouched either by any man or jinn.",
  },
  { number: 57, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 58, arabic: "کَاَنَّہُنَّ الۡیَاقُوۡتُ وَ الۡمَرۡجَانُ", english: "As if they (chaste maidens) were rubies and pearls." },
  { number: 59, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 60, arabic: "ہَلۡ جَزَآءُ الۡاِحۡسَانِ اِلَّا الۡاِحۡسَانُ", english: "The reward of good cannot be anything but good." },
  { number: 61, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 62,
    arabic: "وَ مِنۡ دُوۡنِہِمَا جَنَّتٰنِ",
    english: "And apart from these two there are also two more gardens (for them).",
  },
  { number: 63, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 64, arabic: "مُدۡہَآ مَّتٰنِ", english: "Both appear deep green tinting black." },
  { number: 65, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 66,
    arabic: "فِیۡہِمَا عَیۡنٰنِ نَضَّاخَتٰنِ",
    english: "There are two springs which will be gushing with force in these two (as well).",
  },
  { number: 67, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 68,
    arabic: "فِیۡہِمَا فَاکِہَۃٌ وَّ نَخۡلٌ وَّ رُمَّانٌ",
    english: "In both of them there are also fruits, date-palms and pomegranates.",
  },
  { number: 69, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 70, arabic: "فِیۡہِنَّ خَیۡرٰتٌ حِسَانٌ", english: "In them are pious and beautiful (chaste maidens as well)." },
  { number: 71, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 72, arabic: "حُوۡرٌ مَّقۡصُوۡرٰتٌ فِی الۡخِیَامِ", english: "The maidens who are veiling, confined in tents." },
  { number: 73, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  { number: 74, arabic: "لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ", english: "Untouched before either by any man or jinn." },
  { number: 75, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 76,
    arabic: "مُتَّکِـِٕیۡنَ عَلٰی رَفۡرَفٍ خُضۡرٍ وَّ عَبۡقَرِیٍّ حِسَانٍ",
    english:
      "(The residents of Paradise) will be (sitting) reclining on cushions over green carpets and rare and exquisite, fine rugs.",
  },
  { number: 77, arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ", english: "So which of your Lord's blessings will you both deny?" },
  {
    number: 78,
    arabic: "تَبٰرَکَ اسۡمُ رَبِّکَ ذِی الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    english:
      "Most Blessed is the Name of your Lord, the Master of glory and splendour and the Master of bounty and honour.",
  },
]
