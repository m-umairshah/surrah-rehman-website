import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Include CardContent
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PDFViewer } from "@/components/pdf-viewer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surah Rahman PDF – Read & Download",
  description:
    "Download and read Surah Rahman PDF with Arabic text, Urdu & English translations. Complete Chapter 55 of the Holy Quran in high-quality pdf format.",
  keywords:
    "surah rahman pdf, quran pdf download, surah rahman translation, islamic pdf, quran chapter 55 pdf",

  openGraph: {
    title: "Surah Rahman PDF - Download & Read Online",
    description:
      "Read and download Surah Rahman PDF with Arabic text and translations.",
    url: "https://suraherahman.com/surah-rahman-pdf",
    type: "article",
    images: [
      {
        url: "https://suraherahman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surah Rahman PDF - Download & Read Online",
      },
    ],
  },
};

export default function SurahRahmanPDFPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
                Surah Rahman PDF
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground text-balance">
                Read and download the complete Surah Rahman in PDF format with
                authentic Arabic text and translations.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/surah-rahman-listen-online">Listen Online</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/surah-rahman-read-online">Read Online</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/surah-rahman-arabic">Arabic Text</Link>
              </Button>
            </div>

            {/* PDF Viewer (responsive wrapper) */}
            <div className="mb-8 sm:mb-10">
              <div className="rounded-lg border bg-background p-2 sm:p-3 md:p-4">
                <div className="w-full overflow-hidden rounded-md">
                  <PDFViewer
                    src="/assets/pdf/suraherahman.pdf"
                    title="Surah Rahman - Complete Chapter 55"
                    downloadUrl="/assets/pdf/suraherahman.pdf"
                  />
                </div>
              </div>
            </div>

            {/* PDF Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 lg:mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📄</div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    High Quality PDF
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Crystal clear Arabic text with proper formatting and
                    typography
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Mobile Friendly
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Optimized for reading on phones, tablets, and desktop
                    devices
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center lg:col-span-1 sm:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💾</div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2">
                    Offline Access
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Download for offline reading and sharing with others
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Usage Guide */}
            <Card className="mb-8 sm:mb-10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  How to Use the PDF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <h4 className="font-semibold mb-2.5 sm:mb-3">
                      Online Reading
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      <li>
                        • Use the viewer above to read directly in your browser
                      </li>
                      <li>
                        • Click “Fullscreen” for better reading experience
                      </li>
                      <li>• Use zoom controls to adjust text size</li>
                      <li>• Navigate pages using the PDF controls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2.5 sm:mb-3">
                      Download & Share
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      <li>• Click “Download” to save to your device</li>
                      <li>• Share with family and friends</li>
                      <li>• Print for physical reading</li>
                      <li>• Use for study and memorization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About the PDF */}
            <Card className="mb-8 sm:mb-10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  About This PDF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base leading-7">
                    This PDF contains the complete text of Surah Rahman (Chapter
                    55) from the Holy Quran. It features authentic Arabic text
                    with proper Tajweed markings and beautiful formatting that
                    makes it easy to read and study.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                    <div>
                      <strong>Chapter:</strong> 55 (Ar-Rahman)
                    </div>
                    <div>
                      <strong>Verses:</strong> 78
                    </div>
                    <div>
                      <strong>Type:</strong> Meccan
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* --- Surah Rahman PDF Section --- */}
            <section className="mx-auto mt-12 mb-12 space-y-10">
              {/* Main Intro */}
              <article>
                <h2 className="text-3xl font-bold mb-4">
                  📖 Surah Rahman PDF – Read and Download Complete Chapter 55
                </h2>
                <p className="text-muted-foreground mb-4">
                  Surah Rahman, the 55th chapter of the Holy Quran, is among the
                  most beloved and frequently recited surahs in the Muslim
                  world. Known as <em>The Most Merciful</em>, this surah
                  beautifully highlights the countless blessings of Allah and
                  repeatedly reminds mankind and jinn of divine mercy through
                  the verse:
                  <strong>
                    {" "}
                    “Which of the favors of your Lord will you deny?”
                  </strong>
                  . Having Surah Rahman in PDF format with authentic Arabic text
                  and reliable translations is a valuable resource for
                  reflection and study.
                </p>
              </article>

              {/* H2 Section 1 */}
              <article>
                <h2 className="text-2xl font-semibold mb-3">
                  Why Download Surah Rahman PDF?
                </h2>
                <p className="text-muted-foreground mb-4">
                  A Surah Rahman PDF makes it easier to read, study, and
                  memorize this important chapter of the Quran. Unlike
                  online-only formats, a PDF version allows offline access on
                  any device.
                </p>

                <h3 className="text-xl font-medium mb-2">Practical Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                  <li>
                    Students can access a clean and properly formatted text.
                  </li>
                  <li>Memorizers can zoom, highlight verses, and add notes.</li>
                  <li>
                    Daily recitation during prayers or study circles is easier.
                  </li>
                  <li>
                    Sharing with family, friends, or Islamic groups is simple.
                  </li>
                </ul>

                <h3 className="text-xl font-medium mb-2">Spiritual Benefits</h3>
                <p className="text-muted-foreground mb-4">
                  Regular recitation strengthens gratitude, brings peace, and
                  connects believers to Allah’s mercy. Many also believe it
                  provides healing and protection.
                </p>

                <h3 className="text-xl font-medium mb-2">
                  Technical Advantages
                </h3>
                <p className="text-muted-foreground">
                  PDF files are lightweight, portable, and work offline. They
                  ensure consistency in layout and can be opened across devices
                  without formatting issues.
                </p>
              </article>

              {/* H2 Section 2 */}
              <article>
                <h2 className="text-2xl font-semibold mb-3">
                  Surah Rahman in Arabic, Urdu, and English
                </h2>
                <p className="text-muted-foreground mb-4">
                  To ensure accessibility, the Surah Rahman PDF includes the
                  original Arabic text along with Urdu and English translations.
                  This allows readers worldwide to connect with its message.
                </p>

                <h3 className="text-xl font-medium mb-2">Arabic Text</h3>
                <p className="text-muted-foreground mb-4">
                  The Arabic version preserves the Quran’s eloquence with clear
                  script and formatting for ease of recitation. It is ideal for
                  fluent readers and learners alike.
                </p>
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                  <li>Authentic Uthmani script.</li>
                  <li>Proper verse separation.</li>
                  <li>Readable on all devices.</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">Urdu Translation</h3>
                <p className="text-muted-foreground mb-4">
                  Millions of Urdu-speaking Muslims benefit from understanding
                  Surah Rahman in their native language. The translation helps
                  reflect more deeply on gratitude and divine mercy.
                </p>
                <h4 className="text-lg font-semibold mb-2">Benefits</h4>
                <ul className="list-disc list-inside text-muted-foreground mb-4">
                  <li>Improves comprehension of verses.</li>
                  <li>Supports teaching in Urdu-speaking families.</li>
                  <li>Encourages reflection in study groups.</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">
                  English Translation
                </h3>
                <p className="text-muted-foreground mb-4">
                  The English version ensures that non-Urdu speakers can access
                  and understand Chapter 55 of the Quran. It helps new Muslims
                  and learners grasp its universal message.
                </p>
                <h4 className="text-lg font-semibold mb-2">Who Benefits?</h4>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>English-speaking Muslims seeking reflection.</li>
                  <li>New Muslims learning the Quran.</li>
                  <li>Global readers engaging with Islam’s message.</li>
                </ul>
              </article>
            </section>

            {/* Related Links */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Continue Your Journey
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="h-auto p-4 bg-transparent"
                >
                  <Link
                    href="/surah-rahman-benefits"
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-lg sm:text-xl">✨</span>
                    <span className="text-sm sm:text-base">Learn Benefits</span>
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
                    <span className="text-lg sm:text-xl">🎙️</span>
                    <span className="text-sm sm:text-base">
                      Qari Abdul Basit
                    </span>
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
                    <span className="text-lg sm:text-xl">🎵</span>
                    <span className="text-sm sm:text-base">
                      Mishari al-Afasi
                    </span>
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
                    <span className="text-lg sm:text-xl">ℹ️</span>
                    <span className="text-sm sm:text-base">About Us</span>
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
