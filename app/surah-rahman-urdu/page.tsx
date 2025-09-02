import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surah Rahman Urdu Translation",
  description:
    "Surah Rahman Urdu Translation – Read Chapter 55 of the Holy Quran with full Urdu tarjuma & tafseer. Explore meanings, lessons, and divine blessings.",
  keywords:
    "surah rahman tarjuma ke sath, surah rahman urdu, quran urdu translation, surah rahman tarjuma",
};

export default function SurahRahmanUrduPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">سورہ رحمان</h1>
              <p className="text-xl text-muted-foreground">
                Surah Rahman - Urdu Translation
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-arabic !text-[16px]">
                باب 55 • 78 آیات • مکی سورہ
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild variant="outline">
                <Link href="/surah-rahman-arabic">Arabic Text</Link>
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
                <CardTitle className="font-arabic">
                  بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
                </CardTitle>
                <br />
                <p className="text-sm text-muted-foreground">
                  اللہ کے نام سے جو بہت مہربان نہایت رحم والا ہے
                </p>
              </CardHeader>
            </Card>

            <div className="space-y-6">
              {urduVerses.map((verse, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <div className="text-right mb-3">
                      <p className="leading-relaxed font-arabic" dir="rtl">
                        {verse.arabic}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg leading-relaxed" dir="rtl">
                        {verse.urdu}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                    <span>آیت {verse.number}</span>
                    <span className="font-arabic !text-[16px]">
                      سُورَةُ الرَّحۡمَٰن
                    </span>
                  </div>
                </Card>
              ))}
            </div>
            {/* --- ARTICLE: Surah Rahman Urdu (SEO-rich) --- */}
            <section
              dir="rtl"
              className="prose prose-zinc max-w-none dark:prose-invert mt-10 mb-10"
            >
              {/* H2 #1 */}
              <h2 className="text-3xl font-bold">
                سورہ رحمان اردو ترجمہ — تعارف، مقام اور اہمیت
              </h2>

              <h3 className="text-2xl font-semibold">
                Surah Ar-Rahman (سورة الرحمن) — Chapter 55 کا تعارف
              </h3>
              <p className="text-muted-foreground">
                <strong>سورۂ رحمان (Surah Ar-Rahman)</strong> قرآنِ مجید کی{" "}
                <strong>55ویں مکی سورت</strong> ہے جس میں
                <strong> 78 آیات</strong> ہیں۔ یہ سورت اپنے اعجازِ بیان، موسیقیت
                اور بار بار آنے والی آیت
                <em> “فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ”</em> (“Which of
                the favors of your Lord will you deny?”) کی وجہ سے مشہور ہے۔ اسی
                صفحہ پر آپ{" "}
                <strong>
                  Surah Rahman Urdu Translation (سورہ رحمان اردو ترجمہ)
                </strong>{" "}
                مطالعہ کریں،
                <Link href="/surah-rahman-arabic" className="underline">
                  Arabic Text (Uthmani Script)
                </Link>{" "}
                دیکھیں،
                <Link href="/surah-rahman-english" className="underline">
                  English Translation
                </Link>{" "}
                پڑھیں، اور
                <Link href="/surah-rahman-listen-online" className="underline">
                  Tilawat / Listen Online (MP3)
                </Link>{" "}
                سنیں۔
              </p>

              <h3 className="text-2xl font-semibold">
                کیوں پڑھیں — Urdu Tarjuma & Tafseer کے ساتھ
              </h3>
              <p className="text-muted-foreground">
                اصل <strong>Arabic</strong> متن کے ساتھ{" "}
                <strong>Urdu tarjuma</strong> اور <strong>tafseer</strong> پڑھنے
                سے معانی واضح ہوتے ہیں، ایمان، شکر اور عملِ صالح کی رغبت بڑھتی
                ہے، اور روزمرہ زندگی میں قرآنی ہدایات کا اطلاق آسان ہوتا ہے۔
              </p>

              <h3 className="text-2xl font-semibold">
                ساخت، موضوعات اور اسلوب
              </h3>
              <p className="text-muted-foreground">
                سورت میں تخلیقِ انسان و جن، نظامِ کائنات، عدل و میزان، رزق کی
                نعمتیں (کھجور، انار، پھل)، سمندر، موتی و مرجان، نیکوکاروں کے لیے
                جنت اور منکروں کے لیے وعید جیسے موضوعات ہیں۔ دہرایا جانے والا
                جملہ قاری کو شکر اور محاسبۂ نفس کی طرف بلاتا ہے۔
              </p>
              <h4 className="text-xl font-semibold">کلیدی نکات</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Makki Surah — 78 ayat — Chapter 55</li>
                <li>
                  Repeated verse:{" "}
                  <em>فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</em>
                </li>
                <li>
                  Arabic text (Uthmani), Urdu translation, English translation
                </li>
              </ul>

              {/* H2 #2 */}
              <h2 className="text-3xl font-bold mt-10">
                تلاوت، تجوید اور سمعی مطالعہ — Tilawat, Tajweed & Audio
              </h2>

              <h3 className="text-2xl font-semibold">
                Tajweed & Makharij کے ساتھ Surah Rahman Arabic
              </h3>
              <p className="text-muted-foreground">
                <strong>Surah Rahman Arabic</strong> کی موسیقیت تجوید سیکھنے
                والوں کے لیے بہترین مشق ہے۔ مخارج، مدود، غنہ اور وقف کے قواعد پر
                عمل کے لیے اس سورت کی آیات مثالی درجہ رکھتی ہیں۔
              </p>
              <h4 className="text-xl font-semibold">سیکھنے کے طریقے</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>استاد کے ساتھ مخارج اور احکامِ تجوید کی پریکٹس</li>
                <li>آیات کی تکرار اور آہنگ (melody) کی تربیت</li>
                <li>Uthmani script میں متن سے آنکھ و زبان کی ہم آہنگی</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Listen Online (MP3) — Qari & Sheikh Recitations
              </h3>
              <p className="text-muted-foreground">
                بلند پایہ قرّاء کی آواز میں <strong>Tilawat</strong> سماعت اور
                تلفظ سنوارتی ہے۔
                <Link href="/qari-abdul-basit" className="underline">
                  {" "}
                  قاری عبدالباسط
                </Link>{" "}
                اور شیخ مشاری راشد العفاسی کی
                <strong> Surah Rahman</strong> تلاوتیں دنیا بھر میں مقبول ہیں۔
              </p>
              <h4 className="text-xl font-semibold">مفید روابط</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>
                  <Link
                    href="/surah-rahman-listen-online"
                    className="underline"
                  >
                    Surah Rahman Listen Online / MP3
                  </Link>
                </li>
                <li>
                  <Link href="/qari-abdul-basit" className="underline">
                    Qari Abdul Basit — Biography & Recitations
                  </Link>
                </li>
                <li>
                  <Link href="/sheikh-mishari-al-afasi" className="underline">
                    Sheikh Mishari Rashid Al-Afasi — Recitations
                  </Link>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Daily Tilawat, Hifz & Reflection
              </h3>
              <p className="text-muted-foreground">
                روزانہ تلاوت اور حفظ (Hifz) کے لیے آیات کو حصوں میں تقسیم کریں۔
                ترجمہ (Urdu/English) کے ساتھ غور و فکر (Tadabbur) کریں تاکہ عملی
                زندگی میں احکام و اخلاقی پیغام نافذ ہو۔
              </p>
              <h4 className="text-xl font-semibold">عملی طریقہ</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>روزانہ 5–10 آیات: Arabic + Urdu tarjuma</li>
                <li>ہفتہ وار دہرائی: تلفظ، وقف، مہارت</li>
                <li>خاندانی نشست: مفاہیم، نعمتیں، شکر</li>
              </ul>

              {/* H2 #3 */}
              <h2 className="text-3xl font-bold mt-10">
                فوائد، برکات اور وسائل — Benefits, Virtues & Resources
              </h2>

              <h3 className="text-2xl font-semibold">
                Surah Rahman Benefits & Virtues (فضائل)
              </h3>
              <p className="text-muted-foreground">
                روایات کے مطابق یہ “<strong>Adornment of the Qur’an</strong>”
                کہی گئی؛ کثرتِ تلاوت ذہنی سکون، شکر، اور امیدِ رحمت بڑھاتی ہے۔
                بہت سے لوگ شفا (Shifa) اور مشکلات میں آسانی کی نیت سے پڑھتے ہیں۔
              </p>
              <h4 className="text-xl font-semibold">اہم پہلو</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Inner peace, gratitude, hope in Allah’s mercy</li>
                <li>Faith (Iman) کی تقویت، محاسبۂ نفس</li>
                <li>سماجی طور پر درسِ قرآن اور مطالعۂ خاندان</li>
              </ul>

              <h3 className="text-2xl font-semibold">
                Surah Rahman PDF, Arabic Text & Translations
              </h3>
              <p className="text-muted-foreground">
                آف لائن مطالعہ کے لیے{" "}
                <Link href="/assets/pdf/suraherahman.pdf" className="underline">
                  Surah Rahman PDF
                </Link>{" "}
                مفید ہے۔ ساتھ ہی{" "}
                <Link href="/surah-rahman-arabic" className="underline">
                  Arabic (Uthmani Script)
                </Link>
                ،
                <Link href="/surah-rahman-english" className="underline">
                  English
                </Link>{" "}
                اور یہی صفحہ <strong>Surah Rahman Urdu</strong> فراہم کرتا ہے۔
              </p>
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>
                  <Link
                    href="/assets/pdf/suraherahman.pdf"
                    className="underline"
                  >
                    PDF Download
                  </Link>
                </li>
                <li>
                  <Link href="/surah-rahman-arabic" className="underline">
                    Arabic Text (سورة الرحمن)
                  </Link>
                </li>
                <li>
                  <Link href="/surah-rahman-english" className="underline">
                    English Translation
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-12 text-center">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">مزید پڑھیں</h2>
                <p className="text-muted-foreground mb-6">
                  سورہ رحمان کے فوائد اور برکات کے بارے میں جانیں
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/surah-rahman-benefits">فوائد جانیں</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/qari-abdul-basit">قاری عبدالباسط</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/assets/pdf/suraherahman.pdf">
                      PDF ڈاؤن لوڈ
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const urduVerses = [
  { number: 1, arabic: "اَلرَّحۡمٰنُ", urdu: "(وہ) رحمان ہی ہےo" },
  {
    number: 2,
    arabic: "عَلَّمَ الۡقُرۡاٰنَ",
    urdu: "جس نے (خود رسولِ عربی ﷺ کو یا ان کے ذریعے اِنسان کو) قرآن سکھایاo",
  },
  {
    number: 3,
    arabic: "خَلَقَ الۡاِنۡسَانَ",
    urdu: "اُسی نے انسان کو پیدا فرمایاo",
  },
  {
    number: 4,
    arabic: "عَلَّمَہُ الۡبَیَانَ",
    urdu: "اُسی نے اِسے بیان سکھایاo",
  },
  {
    number: 5,
    arabic: "اَلشَّمۡسُ وَ الۡقَمَرُ بِحُسۡبَانٍ",
    urdu: "سورج اور چاند (اُسی کی ریاضیاتی منصوبہ بندی کے ساتھ) مقرّرہ حساب سے چل رہے ہیںo",
  },
  {
    number: 6,
    arabic: "وَّ النَّجۡمُ وَ الشَّجَرُ یَسۡجُدٰنِ",
    urdu: "اور زمین پر پھیلنے والی بوٹیاں اور سب درخت (اسی کو) سجدہ کر رہے ہیںo",
  },
  {
    number: 7,
    arabic: "وَ السَّمَآءَ رَفَعَہَا وَ وَضَعَ الۡمِیۡزَانَ",
    urdu: "اور اُسی نے آسمانی کائنات کو (ہر سمت پھیلاتے ہوئے) بلند کر رکھا ہے اور (اسی نے ریاضیاتی نظم کے ساتھ ان کی گردش اور بقا و دوام کے لیے) میزان قائم کر رکھا ہےo",
  },
  {
    number: 8,
    arabic: "اَلَّا تَطۡغَوۡا فِی الۡمِیۡزَانِ",
    urdu: "تاکہ تم تولنے میں بے اعتدالی نہ کروo",
  },
  {
    number: 9,
    arabic:
      "وَ اَقِیۡمُوا الۡوَزۡنَ بِالۡقِسۡطِ وَ لَا تُخۡسِرُوا الۡمِیۡزَانَ",
    urdu: "اور انصاف کے ساتھ وزن کو ٹھیک رکھو اور تول کو کم نہ کروo",
  },
  {
    number: 10,
    arabic: "وَ الۡاَرۡضَ وَضَعَہَا لِلۡاَنَامِ",
    urdu: "زمین کو اسی نے مخلوق کے لئے بچھا دیاo",
  },
  {
    number: 11,
    arabic: "فِیۡہَا فَاکِہَۃٌ وَّ النَّخۡلُ ذَاتُ الۡاَکۡمَامِ",
    urdu: "اس میں میوے ہیں اور خوشوں والی کھجوریں ہیںo",
  },
  {
    number: 12,
    arabic: "وَ الۡحَبُّ ذُو الۡعَصۡفِ وَ الرَّیۡحَانُ",
    urdu: "اور بھوسہ والا اناج ہے اور خوشبودار (پھل) پھول ہیںo",
  },
  {
    number: 13,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس (اے گروہِ جنّ و انسان!) تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 14,
    arabic: "خَلَقَ الۡاِنۡسَانَ مِنۡ صَلۡصَالٍ کَالۡفَخَّارِ",
    urdu: "اسی نے انسان کو ٹھیکری کی طرح بجتے ہوئے خشک گارے سے بنایاo",
  },
  {
    number: 15,
    arabic: "وَ خَلَقَ الۡجَآنَّ مِنۡ مَّارِجٍ مِّنۡ نَّارٍ",
    urdu: "اور جنّات کو آگ کے شعلے سے پیدا کیاo",
  },
  {
    number: 16,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 17,
    arabic: "رَبُّ الۡمَشۡرِقَیۡنِ وَ رَبُّ الۡمَغۡرِبَیۡنِ",
    urdu: "(وہی) دونوں مشرقوں کا مالک ہے اور (وہی) دونوں مغربوں کا مالک ہےo",
  },
  {
    number: 18,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 19,
    arabic: "مَرَجَ الۡبَحۡرَیۡنِ یَلۡتَقِیٰنِ",
    urdu: "اسی نے دو سمندر رواں کئے جو باہم مل جاتے ہیںo",
  },
  {
    number: 20,
    arabic: "بَیۡنَہُمَا بَرۡزَخٌ لَّا یَبۡغِیٰنِ",
    urdu: "اُن دونوں کے درمیان ایک آڑ ہے وہ (اپنی اپنی) حد سے تجاوز نہیں کرسکتےo",
  },
  {
    number: 21,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 22,
    arabic: "یَخۡرُجُ مِنۡہُمَا اللُّؤۡلُؤُ وَ الۡمَرۡجَانُ",
    urdu: "اُن دونوں (سمندروں) سے موتی (جس کی جھلک سبز ہوتی ہے) اور مَرجان (جِس کی رنگت سرخ ہوتی ہے) نکلتے ہیںo",
  },
  {
    number: 23,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 24,
    arabic: "وَ لَہُ الۡجَوَارِ الۡمُنۡشَئٰتُ فِی الۡبَحۡرِ کَالۡاَعۡلَامِ",
    urdu: "اوربلند بادبان والے بڑے بڑے جہاز (بھی) اسی کے (اختیار میں) ہیں جو پہاڑوں کی طرح سمندر میں (کھڑے ہوتے یا چلتے) ہیںo",
  },
  {
    number: 25,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 26,
    arabic: "کُلُّ مَنۡ عَلَیۡہَا فَانٍ",
    urdu: "ہر کوئی جو بھی زمین پر ہے فنا ہو جانے والا ہےo",
  },
  {
    number: 27,
    arabic: "وَّ یَبۡقٰی وَجۡہُ رَبِّکَ ذُو الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    urdu: "اور آپ کے رب ہی کی ذات باقی رہے گی جو صاحبِ عظمت و جلال اور صاحبِ انعام و اکرام ہےo",
  },
  {
    number: 28,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 29,
    arabic:
      "یَسۡـَٔلُہٗ مَنۡ فِی السَّمٰوٰتِ وَ الۡاَرۡضِ ؕ کُلَّ یَوۡمٍ ہُوَ فِیۡ شَاۡنٍ",
    urdu: "سب اسی سے مانگتے ہیں جو بھی آسمانوں اور زمین میں ہیں۔ وہ ہر آن نئی شان میں ہوتا ہےo",
  },
  {
    number: 30,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 31,
    arabic: "سَنَفۡرُغُ لَکُمۡ اَیُّہَ الثَّقَلٰنِ",
    urdu: "اے ہر دو گروہانِ (اِنس و جِن!) ہم عنقریب تمہارے حساب کی طرف متوجہ ہوتے ہیںo",
  },
  {
    number: 32,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 33,
    arabic:
      "یٰمَعۡشَرَ الۡجِنِّ وَ الۡاِنۡسِ اِنِ اسۡتَطَعۡتُمۡ اَنۡ تَنۡفُذُوۡا مِنۡ اَقۡطَارِ السَّمٰوٰتِ وَ الۡاَرۡضِ فَانۡفُذُوۡا ؕ لَا تَنۡفُذُوۡنَ اِلَّا بِسُلۡطٰنٍ",
    urdu: "اے گروہِ جن و اِنس! اگر تم اِس بات پر قدرت رکھتے ہو کہ آسمانوں اور زمین کے کناروں سے باہر نکل سکو (اور تسخیرِ کائنات کرو) تو تم نکل جاؤ، تم جس (کرّۂ سماوی کے) مقام پر بھی نکل کر جاؤ گے وہاں بھی اسی کی سلطنت ہوگیo",
  },
  {
    number: 34,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 35,
    arabic:
      "یُرۡسَلُ عَلَیۡکُمَا شُوَاظٌ مِّنۡ نَّارٍ ۬ۙ وَّ نُحَاسٌ فَلَا تَنۡتَصِرٰنِ",
    urdu: "تم دونوں پر آگ کے خالص شعلے بھیج دیئے جائیں گے اور (بغیر شعلوں کے) دھواں (بھی بھیجا جائے گا) اور تم دونوں اِن سے بچ نہ سکو گےo",
  },
  {
    number: 36,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 37,
    arabic: "فَاِذَا انۡشَقَّتِ السَّمَآءُ فَکَانَتۡ وَرۡدَۃً کَالدِّہَانِ",
    urdu: "پھر جب آسمان پھٹ جائے گا اور جلے ہوئے تیل (یا سرخ چمڑے) کی طرح گلابی ہوجائے گاo",
  },
  {
    number: 38,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 39,
    arabic: "فَیَوۡمَئِذٍ لَّا یُسۡـَٔلُ عَنۡ ذَنۡۢبِہٖۤ اِنۡسٌ وَّ لَا جَآنٌّ",
    urdu: "سو اُس دن نہ تو کسی انسان سے اُس کے گناہ کی بابت پوچھا جائے گا اور نہ ہی کسی جِن سےo",
  },
  {
    number: 40,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 41,
    arabic:
      "یُعۡرَفُ الۡمُجۡرِمُوۡنَ بِسِیۡمٰہُمۡ فَیُؤۡخَذُ بِالنَّوَاصِیۡ وَ الۡاَقۡدَامِ",
    urdu: "مجرِم لوگ اپنے چہروں کی سیاہی سے پہچان لئے جائیں گے پس انہیں پیشانی کے بالوں اور پاؤں سے پکڑ کر کھینچا جائے گاo",
  },
  {
    number: 42,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 43,
    arabic: "ہٰذِہٖ جَہَنَّمُ الَّتِیۡ یُکَذِّبُ بِہَا الۡمُجۡرِمُوۡنَ",
    urdu: "(اُن سے کہا جائے گا:) یہی ہے وہ دوزخ جسے مجرِم لوگ جھٹلایا کرتے تھےo",
  },
  {
    number: 44,
    arabic: "یَطُوۡفُوۡنَ بَیۡنَہَا وَ بَیۡنَ حَمِیۡمٍ اٰنٍ",
    urdu: "وہ اُس (دوزخ) میں اور کھولتے گرم پانی میں گھومتے پھریں گےo",
  },
  {
    number: 45,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 46,
    arabic: "وَ لِمَنۡ خَافَ مَقَامَ رَبِّہٖ جَنَّتٰنِ",
    urdu: "اور جو شخص اپنے رب کے حضور (پیشی کے لئے) کھڑا ہونے سے ڈرتا ہے اُس کے لئے دو جنتیں ہیںo",
  },
  {
    number: 47,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 48,
    arabic: "ذَوَاتَاۤ اَفۡنَانٍ",
    urdu: "جو دونوں (سرسبز و شاداب) گھنی شاخوں والی (جنتیں) ہیںo",
  },
  {
    number: 49,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 50,
    arabic: "فِیۡہِمَا عَیۡنٰنِ تَجۡرِیٰنِ",
    urdu: "ان دونوں میں دو چشمے بہہ رہے ہیںo",
  },
  {
    number: 51,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 52,
    arabic: "فِیۡہِمَا مِنۡ کُلِّ فَاکِہَۃٍ زَوۡجٰنِ",
    urdu: "ان دونوں میں ہر پھل (اور میوے) کی دو دو قِسمیں ہیںo",
  },
  {
    number: 53,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 54,
    arabic:
      "مُتَّکِـِٕیۡنَ عَلٰی فُرُشٍۭ بَطَآئِنُہَا مِنۡ اِسۡتَبۡرَقٍ ؕ وَ جَنَا الۡجَنَّتَیۡنِ دَانٍ",
    urdu: "اہلِ جنت ایسے بستروں پر تکیے لگائے بیٹھے ہوں گے جن کے استر نفِیس اور دبیز ریشم (یعنی اَطلس) کے ہوں گے، اور دونوں جنتوں کے پھل (اُن کے) قریب جھک رہے ہوں گےo",
  },
  {
    number: 55,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 56,
    arabic:
      "فِیۡہِنَّ قٰصِرٰتُ الطَّرۡفِ ۙ لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ",
    urdu: "اور اُن میں نیچی نگاہ رکھنے والی (حوریں) ہوں گی جنہیں پہلے نہ کسی انسان نے ہاتھ لگایا اور نہ کسی جِن نےo",
  },
  {
    number: 57,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 58,
    arabic: "کَاَنَّہُنَّ الۡیَاقُوۡتُ وَ الۡمَرۡجَانُ",
    urdu: "گویا وہ (حوریں) یا قوت اور مرجان ہیںo",
  },
  {
    number: 59,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 60,
    arabic: "ہَلۡ جَزَآءُ الۡاِحۡسَانِ اِلَّا الۡاِحۡسَانُ",
    urdu: "نیکی کا بدلہ نیکی کے سوا کچھ نہیں ہےo",
  },
  {
    number: 61,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 62,
    arabic: "وَ مِنۡ دُوۡنِہِمَا جَنَّتٰنِ",
    urdu: "اور (اُن کے لئے) اِن دو کے سوا دو اور بہشتیں بھی ہیںo",
  },
  {
    number: 63,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 64,
    arabic: "مُدۡہَآ مَّتٰنِ",
    urdu: "وہ دونوں گہری سبز رنگت میں سیاہی مائل لگتی ہیںo",
  },
  {
    number: 65,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 66,
    arabic: "فِیۡہِمَا عَیۡنٰنِ نَضَّاخَتٰنِ",
    urdu: "اُن دونوں میں (بھی) دو چشمے ہیں جو خوب چھلک رہے ہوں گےo",
  },
  {
    number: 67,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 68,
    arabic: "فِیۡہِمَا فَاکِہَۃٌ وَّ نَخۡلٌ وَّ رُمَّانٌ",
    urdu: "ان دونوں میں (بھی) پھل اور کھجوریں اور انار ہیںo",
  },
  {
    number: 69,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 70,
    arabic: "فِیۡہِنَّ خَیۡرٰتٌ حِسَانٌ",
    urdu: "ان میں (بھی) خوب سیرت و خوب صورت (حوریں) ہیںo",
  },
  {
    number: 71,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 72,
    arabic: "حُوۡرٌ مَّقۡصُوۡرٰتٌ فِی الۡخِیَامِ",
    urdu: "ایسی حوریں جو خیموں میں پردہ نشین ہیںo",
  },
  {
    number: 73,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 74,
    arabic: "لَمۡ یَطۡمِثۡہُنَّ اِنۡسٌ قَبۡلَہُمۡ وَ لَا جَآنٌّ",
    urdu: "انہیں پہلے نہ کسی انسان ہی نے ہاتھ سے چُھوا ہے اور نہ کسی جِن نےo",
  },
  {
    number: 75,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 76,
    arabic: "مُتَّکِـِٕیۡنَ عَلٰی رَفۡرَفٍ خُضۡرٍ وَّ عَبۡقَرِیٍّ حِسَانٍ",
    urdu: "(اہلِ جنت) سبز قالینوں پر اور نادر و نفیس بچھونوں پر تکیے لگائے (بیٹھے) ہوں گےo",
  },
  {
    number: 77,
    arabic: "فَبِاَیِّ اٰلَآءِ رَبِّکُمَا تُکَذِّبٰنِ",
    urdu: "پس تم دونوں اپنے رب کی کن کن نعمتوں کو جھٹلاؤ گےo",
  },
  {
    number: 78,
    arabic: "تَبٰرَکَ اسۡمُ رَبِّکَ ذِی الۡجَلٰلِ وَ الۡاِکۡرَامِ",
    urdu: "آپ کے رب کا نام بڑی برکت والا ہے، جو صاحبِ عظمت و جلال اور صاحبِ اِنعام و اِکرام ہےo",
  },
];
