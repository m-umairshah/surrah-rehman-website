import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Surah Rahman Benefits - Spiritual Rewards and Blessings",
  description:
    "Discover the incredible benefits and spiritual rewards of reciting Surah Rahman. Learn about the blessings, virtues, and positive effects of Chapter 55 of the Holy Quran.",
  keywords:
    "surah rahman benefits, quran benefits, islamic blessings, spiritual rewards, surah rahman virtues, quranic healing, islamic spirituality",
}

export default function SurahRahmanBenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Benefits of Surah Rahman</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Discover the spiritual rewards and blessings of reciting the Chapter of the Most Merciful
              </p>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">The Chapter of Mercy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center text-muted-foreground mb-6">
                  Surah Rahman, known as "The Most Merciful," is a chapter that beautifully describes Allah's countless
                  blessings and mercy. Reciting this blessed chapter brings numerous spiritual and worldly benefits.
                </p>
                <div className="text-center">
                  <div className="inline-block bg-primary/10 rounded-lg p-4">
                    <p className="text-2xl font-arabic" dir="rtl">
                      فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      "So which of the favors of your Lord would you deny?"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spiritual Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🤲</span>
                    Spiritual Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Increased Faith (Iman):</strong>
                        <p className="text-sm text-muted-foreground">
                          Regular recitation strengthens belief and connection with Allah
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Heart Purification:</strong>
                        <p className="text-sm text-muted-foreground">
                          Cleanses the heart from negative thoughts and emotions
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Divine Protection:</strong>
                        <p className="text-sm text-muted-foreground">
                          Provides spiritual protection from evil and harm
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Gratitude Enhancement:</strong>
                        <p className="text-sm text-muted-foreground">
                          Increases awareness and appreciation of Allah's blessings
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌟</span>
                    Worldly Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Peace of Mind:</strong>
                        <p className="text-sm text-muted-foreground">
                          Brings tranquility and reduces anxiety and stress
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Healing Properties:</strong>
                        <p className="text-sm text-muted-foreground">
                          Believed to have therapeutic effects on physical and mental health
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Barakah in Life:</strong>
                        <p className="text-sm text-muted-foreground">
                          Brings blessings and positive changes in daily life
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <div>
                        <strong>Better Sleep:</strong>
                        <p className="text-sm text-muted-foreground">Reciting before sleep promotes peaceful rest</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Hadith and Scholarly Opinions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Prophetic Traditions & Scholarly Views</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-lg mb-4 italic">
                    "Everything has an adornment, and the adornment of the Quran is Surah Rahman."
                  </p>
                  <p className="text-sm text-muted-foreground">- Attributed to Prophet Muhammad (PBUH)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Scholarly Insights:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Islamic scholars emphasize that Surah Rahman is particularly effective when recited with
                      contemplation and understanding
                    </li>
                    <li>
                      • The repetitive verse "Which of the favors of your Lord would you deny?" serves as a powerful
                      reminder of gratitude
                    </li>
                    <li>
                      • Many scholars recommend reciting it during times of difficulty for comfort and divine mercy
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Best Times to Recite */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recommended Times for Recitation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Daily Recitation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• After Fajr prayer for morning blessings</li>
                      <li>• Before Maghrib for evening protection</li>
                      <li>• Before sleeping for peaceful rest</li>
                      <li>• During times of stress or anxiety</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Special Occasions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• During Ramadan for increased rewards</li>
                      <li>• On Fridays for weekly blessings</li>
                      <li>• When seeking Allah's mercy and forgiveness</li>
                      <li>• During illness for healing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Maximize Benefits */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Maximize the Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🧘</div>
                    <h4 className="font-semibold mb-2">With Concentration</h4>
                    <p className="text-sm text-muted-foreground">Recite with full attention and presence of mind</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">💭</div>
                    <h4 className="font-semibold mb-2">With Understanding</h4>
                    <p className="text-sm text-muted-foreground">Reflect on the meanings and contemplate the verses</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🔄</div>
                    <h4 className="font-semibold mb-2">With Consistency</h4>
                    <p className="text-sm text-muted-foreground">Make it a regular part of your daily routine</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Begin experiencing the countless blessings of Surah Rahman
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/surah-rahman-listen-online">Listen Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/surah-rahman-read-online">Read Online</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
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
