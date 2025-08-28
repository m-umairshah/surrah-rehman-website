import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Surah Rahman Website | Our Mission and Vision",
  description:
    "Learn about our mission to share the beauty of Surah Rahman with the world. Discover our commitment to providing authentic Quranic content and recitations.",
  keywords: "about surah rahman website, islamic website mission, quran sharing platform, islamic education online",
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Dedicated to sharing the beauty and blessings of Surah Rahman with the world
              </p>
            </div>

            {/* Mission Section */}
            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-muted-foreground mb-6">
                  To provide easy access to authentic recitations, translations, and teachings of Surah Rahman, helping
                  Muslims worldwide connect with this blessed chapter of the Holy Quran.
                </p>
                <div className="text-center">
                  <div className="inline-block bg-primary/10 rounded-lg p-6">
                    <p className="text-xl font-arabic mb-2" dir="rtl">
                      ٱلرَّحۡمَٰنُ عَلَّمَ ٱلۡقُرۡءَانَ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      "The Most Merciful taught the Quran" - Surah Rahman, Verse 1-2
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Authentic Recitations:</strong>
                        <p className="text-sm text-muted-foreground">
                          High-quality audio by renowned Qaris like Abdul Basit and Mishari al-Afasi
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Multiple Languages:</strong>
                        <p className="text-sm text-muted-foreground">Arabic text with Urdu and English translations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Educational Content:</strong>
                        <p className="text-sm text-muted-foreground">
                          Benefits, virtues, and proper recitation guidance
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Free Access:</strong>
                        <p className="text-sm text-muted-foreground">
                          All content is freely available for the benefit of the Ummah
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Authenticity:</strong>
                        <p className="text-sm text-muted-foreground">
                          We ensure all content is verified and authentic according to Islamic teachings
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Accessibility:</strong>
                        <p className="text-sm text-muted-foreground">
                          Making Quranic content accessible to people of all backgrounds and abilities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Respect:</strong>
                        <p className="text-sm text-muted-foreground">
                          Treating the Holy Quran and Islamic content with utmost reverence
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Community:</strong>
                        <p className="text-sm text-muted-foreground">
                          Building bridges within the global Muslim community
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Why Surah Rahman */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Surah Rahman?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Surah Rahman holds a special place in the hearts of Muslims worldwide. Known as "The Most Merciful,"
                  this chapter beautifully describes Allah's countless blessings and serves as a powerful reminder of
                  divine mercy and grace.
                </p>
                <p>
                  The chapter's repeated refrain, "Which of the favors of your Lord would you deny?" appears 31 times,
                  making it one of the most memorable and impactful chapters of the Quran. It serves as a constant
                  reminder to be grateful for Allah's blessings.
                </p>
                <p>
                  Our website is dedicated to this magnificent chapter because we believe in its power to transform
                  hearts, bring peace to minds, and strengthen the connection between believers and their Creator.
                </p>
              </CardContent>
            </Card>

            {/* Team Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg mb-6">
                  We are committed to maintaining the highest standards of Islamic authenticity while leveraging modern
                  technology to make Quranic content accessible to everyone, everywhere.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <h4 className="font-semibold mb-2">Scholarly Review</h4>
                    <p className="text-sm text-muted-foreground">All content reviewed by qualified Islamic scholars</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="font-semibold mb-2">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">Serving Muslims worldwide in multiple languages</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">💝</div>
                    <h4 className="font-semibold mb-2">Free Service</h4>
                    <p className="text-sm text-muted-foreground">Completely free as a service to the Ummah</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Help us spread the beauty of Surah Rahman by sharing our content with others
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/surah-rahman-listen-online">Start Listening</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact-us">Contact Us</Link>
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
