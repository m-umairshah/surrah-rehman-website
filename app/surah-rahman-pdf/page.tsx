import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PDFViewer } from "@/components/pdf-viewer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Surah Rahman PDF - Download & Read Online | Complete Chapter 55",
  description:
    "Read and download Surah Rahman PDF with Arabic text, translations, and proper formatting. Complete Chapter 55 of the Holy Quran in high-quality PDF format.",
  keywords:
    "surah rahman pdf, quran pdf download, surah rahman download, islamic pdf, quran chapter 55 pdf, arabic text pdf",
  alternates: {
    canonical: "https://suraherahman.com/surah-rahman-pdf",
  },
  openGraph: {
    title: "Surah Rahman PDF - Download & Read Online",
    description: "Read and download Surah Rahman PDF with Arabic text and translations.",
    url: "https://suraherahman.com/surah-rahman-pdf",
    type: "article",
  },
}

export default function SurahRahmanPDFPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Surah Rahman PDF</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Read and download the complete Surah Rahman in PDF format
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild>
                <Link href="/surah-rahman-listen-online">Listen Online</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-read-online">Read Online</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-arabic">Arabic Text</Link>
              </Button>
            </div>

            <div className="mb-8">
              <PDFViewer
                src="/assets/pdf/suraherahman.pdf"
                title="Surah Rahman - Complete Chapter 55"
                downloadUrl="/assets/pdf/suraherahman.pdf"
              />
            </div>

            {/* PDF Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="font-semibold mb-2">High Quality PDF</h3>
                  <p className="text-sm text-muted-foreground">
                    Crystal clear Arabic text with proper formatting and typography
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="font-semibold mb-2">Mobile Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for reading on phones, tablets, and desktop devices
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💾</div>
                  <h3 className="font-semibold mb-2">Offline Access</h3>
                  <p className="text-sm text-muted-foreground">Download for offline reading and sharing with others</p>
                </CardContent>
              </Card>
            </div>

            {/* Usage Guide */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Use the PDF</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Online Reading</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use the viewer above to read directly in your browser</li>
                      <li>• Click "Fullscreen" for better reading experience</li>
                      <li>• Use zoom controls to adjust text size</li>
                      <li>• Navigate pages using the PDF controls</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Download & Share</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Click "Download" to save to your device</li>
                      <li>• Share with family and friends</li>
                      <li>• Print for physical reading</li>
                      <li>• Use for study and memorization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About the PDF */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>About This PDF</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    This PDF contains the complete text of Surah Rahman (Chapter 55) from the Holy Quran. It features
                    authentic Arabic text with proper Tajweed markings and beautiful formatting that makes it easy to
                    read and study.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
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

            {/* Related Links */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Continue Your Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-benefits" className="flex flex-col items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Learn Benefits</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/qari-abdul-basit" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎙️</span>
                    <span>Qari Abdul Basit</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/mishari-al-afasi" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎵</span>
                    <span>Mishari al-Afasi</span>
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
