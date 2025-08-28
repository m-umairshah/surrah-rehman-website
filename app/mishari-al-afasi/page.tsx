import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AudioPlayer } from "@/components/audio-player"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mishari al-Afasi - Surah Rahman Recitation | Contemporary Quranic Voice",
  description:
    "Listen to Surah Rahman recited by Sheikh Mishari Rashid al-Afasi. Experience his beautiful and contemporary recitation style of Chapter 55 of the Holy Quran.",
  keywords:
    "mishari al-afasi, mishari rashid alafasy, surah rahman recitation, contemporary qari, islamic audio, quran recitation, modern quranic voice",
}

export default function MishariAlAfasiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portrait-of-sheikh-mishari-al-afasi--middle-aged-i-9uEbukyCldmhQ8PmQGm4iHiffarNBI.jpeg"
                  alt="Sheikh Mishari Rashid al-Afasi"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Sheikh Mishari Rashid al-Afasi</h1>
              <p className="text-xl text-muted-foreground mb-2">الشيخ مشاري راشد العفاسي</p>
              <p className="text-lg text-muted-foreground">Born 1976 | Kuwait</p>
            </div>

            {/* Audio Player Section */}
            <div className="mb-8">
              <AudioPlayer
                src="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
                title="Surah Rahman"
                reciter="Sheikh Mishari Rashid al-Afasi"
                reciterImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portrait-of-sheikh-mishari-al-afasi--middle-aged-i-9uEbukyCldmhQ8PmQGm4iHiffarNBI.jpeg"
                downloadUrl="/assets/mp3/Surah-Ar-Rahman-Mishari-Al-afasi.mp3"
              />
            </div>

            {/* Biography Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Biography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Sheikh Mishari Rashid al-Afasi is one of the most popular contemporary Quranic reciters in the
                    Islamic world. Born in Kuwait in 1976, he has become renowned for his beautiful voice and modern
                    approach to Quranic recitation.
                  </p>
                  <p>
                    He serves as an Imam at Masjid al-Kabir in Kuwait City and has gained international recognition
                    through his recitations broadcast on television and radio stations across the Muslim world.
                  </p>
                  <p>
                    Sheikh Mishari's recitations are particularly popular among younger generations, combining
                    traditional Tajweed rules with a contemporary melodic style that resonates with modern audiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Imam at Masjid al-Kabir, Kuwait City</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Regular reciter during Ramadan at various mosques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Millions of followers on social media platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Featured reciter on major Islamic television networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recorded complete Quran with exceptional quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recitation Style */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recitation Style & Characteristics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Vocal Qualities</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Clear, melodious voice with modern appeal</li>
                      <li>• Excellent control of pitch and rhythm</li>
                      <li>• Emotionally engaging delivery</li>
                      <li>• Perfect articulation of Arabic phonetics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Contemporary Appeal</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Bridges traditional and modern recitation styles</li>
                      <li>• Popular among youth and adults alike</li>
                      <li>• Consistent application of Tajweed principles</li>
                      <li>• Accessible and inspiring delivery</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Global Impact & Influence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Sheikh Mishari al-Afasi has played a significant role in making Quranic recitation accessible to
                  modern audiences worldwide. His recitations have been instrumental in:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm">
                    <li>• Inspiring millions to memorize the Quran</li>
                    <li>• Bridging generational gaps in Islamic education</li>
                    <li>• Promoting proper Tajweed pronunciation</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• Encouraging regular Quran recitation</li>
                    <li>• Spreading Islamic values through beautiful recitation</li>
                    <li>• Connecting global Muslim communities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Related Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Explore More</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-arabic" className="flex flex-col items-center gap-2">
                    <span className="text-lg">📖</span>
                    <span>Read Arabic Text</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/qari-abdul-basit" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎙️</span>
                    <span>Qari Abdul Basit</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-benefits" className="flex flex-col items-center gap-2">
                    <span className="text-lg">✨</span>
                    <span>Surah Benefits</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto p-4 bg-transparent">
                  <Link href="/surah-rahman-listen-online" className="flex flex-col items-center gap-2">
                    <span className="text-lg">🎧</span>
                    <span>Listen Online</span>
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
