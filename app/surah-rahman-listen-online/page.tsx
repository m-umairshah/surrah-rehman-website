import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AudioPlayer } from "@/components/audio-player"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Listen to Surah Rahman Online - Beautiful Quranic Recitations",
  description:
    "Listen to Surah Rahman online with beautiful recitations by Qari Abdul Basit and Mishari al-Afasi. High-quality audio streaming of Chapter 55 of the Holy Quran.",
  keywords:
    "listen surah rahman online, quran audio, islamic audio streaming, surah rahman recitation, quranic audio, online quran listening",
}

export default function SurahRahmanListenOnlinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Listen to Surah Rahman Online</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Experience the beauty of Surah Rahman with authentic recitations by renowned Qaris
              </p>
            </div>

            {/* Featured Reciters */}
            <div className="space-y-8 mb-12">
              <AudioPlayer
                src="/assets/mp3/suraherahman-qari-basit.mp3"
                title="Surah Rahman"
                reciter="Qari Abdul Basit"
                reciterImage="/assets/images/portrait-of-qari-abdul-basit--elderly-islamic-scho.webp"
                downloadUrl="/assets/mp3/suraherahman-qari-basit.mp3"
              />

              <AudioPlayer
                src="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
                title="Surah Rahman"
                reciter="Sheikh Mishari al-Afasi"
                reciterImage="/assets/images/portrait-of-sheikh-mishari-al-afasi--middle-aged-i.jpeg"
                downloadUrl="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
              />

              <AudioPlayer
                src="/assets/mp3/ar-Rahman(the-Most-Merciful)-with-urdu-translations.mp3"
                title="Surah Rahman with Urdu Translation"
                reciter="With Urdu Translation"
                downloadUrl="/assets/mp3/ar-Rahman(the-Most-Merciful)-with-urdu-translations.mp3"
              />
            </div>

            <Card className="mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Video Recitation</CardTitle>
                <p className="text-muted-foreground">Watch and listen to Surah Rahman with Arabic text</p>
              </CardHeader>
              <CardContent>
                <YouTubeEmbed
                  videoId="QRT5J7zpasI"
                  title="Surah Rahman - Beautiful Recitation with Arabic Text"
                  className="mb-6"
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience Surah Rahman with synchronized Arabic text and beautiful recitation
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://youtube.com/watch?v=QRT5J7zpasI" target="_blank" rel="noopener noreferrer">
                        Watch on YouTube
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href="https://youtube.com/watch?v=QRT5J7zpasI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More Videos
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Audio Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🎧</div>
                  <h3 className="font-semibold mb-2">High Quality Audio</h3>
                  <p className="text-sm text-muted-foreground">Crystal clear audio recordings in multiple formats</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="font-semibold mb-2">Mobile Friendly</h3>
                  <p className="text-sm text-muted-foreground">Listen on any device, anywhere, anytime</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">💾</div>
                  <h3 className="font-semibold mb-2">Download Option</h3>
                  <p className="text-sm text-muted-foreground">Download for offline listening and sharing</p>
                </CardContent>
              </Card>
            </div>

            {/* Listening Guide */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Listen Effectively</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Preparation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Find a quiet, clean place</li>
                      <li>• Perform ablution (Wudu) if possible</li>
                      <li>• Face the Qibla direction</li>
                      <li>• Use headphones for better experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">During Listening</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Listen with full attention and reverence</li>
                      <li>• Follow along with the Arabic text</li>
                      <li>• Reflect on the meanings</li>
                      <li>• Make du'a after listening</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Links */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Continue Your Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-read-online" className="flex flex-col items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Read Online</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-benefits" className="flex flex-col items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Learn Benefits</span>
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
