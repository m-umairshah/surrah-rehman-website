import Link from "next/link"

export function HomeSeoArticle() {
  // FAQ Schema for rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Surah ar-Rahman (Quran Chapter 55)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surah ar-Rahman is the 55th chapter of the Holy Quran. It celebrates Allah’s mercy and countless blessings, repeating the verse 'Which of your Lord’s favors will you both deny?' throughout."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I read Surah Rahman online in Arabic, Urdu and English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can read the original Arabic text with Tajweed and translations in Urdu and English on this site: /surah-rahman-arabic, /surah-rahman-urdu and /surah-rahman-english."
        }
      },
      {
        "@type": "Question",
        "name": "How can I listen to Surah Rahman recitation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Listen online to renowned Qaris including Qari Abdul Basit and Mishari al-Afasi at /surah-rahman-listen-online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download Surah Rahman PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Get a high-quality Surah Rahman PDF for offline reading at /surah-rahman-pdf or download directly from /assets/pdf/suraherahman.pdf."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of reciting Surah Rahman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Muslims recite Surah Rahman for reflection, gratitude, and remembrance of Allah’s favors. Explore virtues and benefits on /surah-rahman-benefits."
        }
      }
    ]
  }

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-background to-muted/40">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(120,120,255,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header + tiny TOC (no sidebar) */}
        <header className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Surah Rahman — Arabic Text, Translations, Audio & PDF
          </h2>
          <p className="mt-2 text-muted-foreground text-base sm:text-lg">
            Read the <strong>original Arabic</strong> of <strong>Surah ar-Rahman (Quran Chapter 55)</strong> with
            <strong> Tajweed</strong>, explore <strong>Urdu</strong> and <strong>English translations</strong>, listen to
            <strong> recitations</strong>, and get a <strong>high-quality PDF download</strong>.
          </p>

          {/* inline TOC chips */}
          <nav aria-label="On this page" className="mt-5 flex flex-wrap justify-center gap-2">
            <a href="#what-is" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">What is</a>
            <a href="#read-online" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">Read Online</a>
            <a href="#listen" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">Listen</a>
            <a href="#benefits" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">Benefits</a>
            <a href="#pdf" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">PDF</a>
            <a href="#faq" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">FAQ</a>
          </nav>
        </header>

        {/* Main Article (no aside) */}
        <article className="prose prose-invert max-w-none mx-auto prose-p:leading-7 prose-headings:scroll-mt-24">
          <section id="what-is" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">What is Surah ar-Rahman (Quran 55)?</h3>
            <p className="text-muted-foreground mt-2">
              <strong>Surah Rahman</strong> (also spelled <em>Surah Rehman</em>) emphasizes Allah’s mercy and the blessings
              upon humanity and jinn. Its recurring verse — <em>“فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ”</em> — invites deep
              reflection on gratitude, balance, and stewardship.
            </p>
            <blockquote className="mt-4 rounded-xl border bg-card/50 p-4 text-center">
              <p className="text-lg">“Which of your Lord’s favors will you both deny?”</p>
            </blockquote>
          </section>

          <section id="read-online" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">Read Surah Rahman Online</h3>
            <p className="text-muted-foreground mt-2">
              Access the <strong>Arabic text with Tajweed</strong> and clear <strong>Urdu/English translations</strong>:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm not-prose">
              <li className="rounded-lg border p-3">
                <Link href="/surah-rahman-arabic" className="font-medium hover:underline">Arabic Text</Link>
                <p className="text-muted-foreground">Authentic script with verse numbers.</p>
              </li>
              <li className="rounded-lg border p-3">
                <Link href="/surah-rahman-urdu" className="font-medium hover:underline">Urdu Translation</Link>
                <p className="text-muted-foreground">Beautiful and accurate Urdu meaning.</p>
              </li>
              <li className="rounded-lg border p-3">
                <Link href="/surah-rahman-english" className="font-medium hover:underline">English Translation</Link>
                <p className="text-muted-foreground">Clear English explanation of each ayah.</p>
              </li>
              <li className="rounded-lg border p-3">
                <Link href="/surah-rahman-read-online" className="font-medium hover:underline">Read Online</Link>
                <p className="text-muted-foreground">All formats in one place for convenience.</p>
              </li>
            </ul>
          </section>

          <section id="listen" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">Listen to Surah Rahman Recitations</h3>
            <p className="text-muted-foreground mt-2">
              Enjoy renowned recitations with precise <strong>Tajweed</strong>:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm not-prose">
              <li className="rounded-lg border p-3">
                <Link href="/qari-abdul-basit" className="font-medium hover:underline">Qari Abdul Basit</Link>
                <p className="text-muted-foreground">Timeless, powerful tilawah.</p>
              </li>
              <li className="rounded-lg border p-3">
                <Link href="/mishari-al-afasi" className="font-medium hover:underline">Mishari al-Afasi</Link>
                <p className="text-muted-foreground">Beautiful, soothing recitation.</p>
              </li>
              <li className="rounded-lg border p-3 sm:col-span-2">
                <Link href="/surah-rahman-listen-online" className="font-medium hover:underline">Listen Online (Audio)</Link>
                <p className="text-muted-foreground">Stream Surah Rahman on any device.</p>
              </li>
            </ul>
          </section>

          <section id="benefits" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">Benefits & Virtues of Surah Rahman</h3>
            <p className="text-muted-foreground mt-2">
              Many reflect on this Surah for <strong>gratitude</strong>, <strong>mercy</strong>, and <strong>remembrance</strong>.
              Explore reflections and etiquettes of recitation:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 not-prose">
              <Link href="/surah-rahman-benefits" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">
                Learn Benefits
              </Link>
              <Link href="/about-us" className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition">
                About This Project
              </Link>
            </div>
          </section>

          <section id="pdf" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">Download Surah Rahman PDF</h3>
            <p className="text-muted-foreground mt-2">
              Prefer offline reading? Get a <strong>high-quality PDF</strong> with Arabic text (and translations).
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 not-prose">
              <Link href="/surah-rahman-pdf" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition">
                View PDF Online
              </Link>
              <Link href="/assets/pdf/suraherahman.pdf" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition">
                Download PDF
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-2">
            <h3 className="text-2xl sm:text-3xl font-semibold">Frequently Asked Questions</h3>
            <div className="mt-3 space-y-4 not-prose">
              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">Is Surah Rahman Meccan or Medinan?</summary>
                <p className="mt-2 text-muted-foreground">It is a Meccan Surah with 78 verses.</p>
              </details>
              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">Best times to recite Surah ar-Rahman?</summary>
                <p className="mt-2 text-muted-foreground">Any time for reflection; many prefer after Fajr or at night.</p>
              </details>
              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">Can I memorize Surah Rahman using this site?</summary>
                <p className="mt-2 text-muted-foreground">Yes — use Arabic text, translations, audio, and PDF to assist memorization.</p>
              </details>
            </div>
          </section>
        </article>
      </div>

      {/* FAQ schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  )
}
