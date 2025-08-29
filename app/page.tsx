import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HomeSeoArticle } from "@/components/home-seo-article"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import dynamic from "next/dynamic"

// Defer loading the (heavier) gallery JS until after hydration
const SurahImageGallery = dynamic(
  () => import("@/components/surah-image-gallery").then(m => m.SurahImageGallery),
  { ssr: true, loading: () => (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="h-40 w-full animate-pulse rounded-xl bg-muted" />
        </div>
      </section>
    )
  }
)

export default function HomePage() {
  const galleryImages = [
    {
      src: "https://suraherahman.com/suraherahman-1.jpg",
      alt: "Surah Rahman – Arabic Page 1",
      page: 1,
    },
    {
      src: "https://suraherahman.com/suraherahman-2.jpg",
      alt: "Surah Rahman – Arabic Page 2",
      page: 2,
    },
    {
      src: "https://suraherahman.com/suraherahman-3.jpg",
      alt: "Surah Rahman – Arabic Page 3",
      page: 3,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Surah Rahman</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
              Experience the beauty and blessings of Surah Rahman with authentic Arabic text, translations in multiple
              languages, and beautiful recitations by renowned Qaris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/surah-rahman-listen-online">Listen Online</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/surah-rahman-read-online">Read Online</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Surah Rahman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Arabic Text</CardTitle>
                  <CardDescription>Read the original Arabic text with proper Tajweed</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-arabic">Read Arabic</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Urdu Translation</CardTitle>
                  <CardDescription>Understand the meaning in beautiful Urdu</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-urdu">Read Urdu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>English Translation</CardTitle>
                  <CardDescription>Comprehend the verses in clear English</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-english">Read English</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Qari Abdul Basit</CardTitle>
                  <CardDescription>Listen to the melodious recitation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/qari-abdul-basit">Listen Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mishari al-Afasi</CardTitle>
                  <CardDescription>Experience the beautiful recitation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/mishari-al-afasi">Listen Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PDF Download</CardTitle>
                  <CardDescription>View and download high-quality PDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/surah-rahman-pdf">View PDF</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery Section (below the fold for better LCP) */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold">Arabic Pages Gallery</h2>
                <p className="text-muted-foreground">
                  Browse high-quality scans of Surah Rahman (original Arabic script)
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/surah-rahman-arabic">View All Pages</Link>
              </Button>
            </div>

            {/* The gallery component should be responsive internally */}
            <SurahImageGallery images={galleryImages} title="Surah Rahman - Arabic Pages" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Surah Rahman</h2>
              <p className="text-lg text-muted-foreground text-balance mb-8">
                Surah Rahman, known as "The Most Merciful," is the 55th chapter of the Holy Quran. It beautifully
                describes Allah's countless blessings and mercy upon His creation. This website provides you with
                authentic recitations, translations, and the spiritual benefits of this blessed chapter.
              </p>
              <Button asChild size="lg">
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
        <HomeSeoArticle />
      </main>

      <Footer />
    </div>
  )
}
