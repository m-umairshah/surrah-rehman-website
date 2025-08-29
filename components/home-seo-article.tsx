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
        {/* Header + TOC */}
        <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Surah Rahman — Arabic, Translations, Audio & PDF</h2>
            <p className="mt-2 text-muted-foreground text-base sm:text-lg">
              Read the <strong>original Arabic text</strong> of <strong>Surah ar-Rahman (Quran Chapter 55)</strong> with proper
              <strong> Tajweed</strong>, explore <strong>Urdu</strong> and <strong>English translations</strong>, listen to
              <strong> melodious recitations</strong>, and download a <strong>high-quality PDF</strong>.
            </p>
          </div>
          <nav aria-label="On this page" className="lg:text-right">
            <ul className="text-sm sm:text-base grid grid-cols-2 lg:grid-cols-1 gap-2">
              <li><a href="#what-is" className="hover:underline">What is Surah ar-Rahman?</a></li>
              <li><a href="#read-online" className="hover:underline">Read Online (Arabic/Urdu/English)</a></li>
              <li><a href="#listen" className="hover:underline">Listen to Recitations</a></li>
              <li><a href="#benefits" className="hover:underline">Benefits & Virtues</a></li>
              <li><a href="#pdf" className="hover:underline">Download PDF</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </nav>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-2 space-y-8">
            <section id="what-is" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">What is Surah ar-Rahman (Quran 55)?</h3>
              <p className="mt-2 text-muted-foreground">
                <strong>Surah Rahman</strong> (also written as <em>Surah Rehman</em>) is a profound chapter emphasizing
                Allah’s mercy and the blessings bestowed upon humanity and jinn. Its recurring ayah
                — <em>“فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ”</em> — invites us to reflect on gratitude, balance, and
                stewardship.
              </p>
              <blockquote className="mt-4 rounded-xl border bg-card/50 p-4 text-center">
                <p className="text-lg">“Which of your Lord’s favors will you both deny?”</p>
              </blockquote>
            </section>

            <section id="read-online" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">Read Surah Rahman Online</h3>
              <p className="mt-2 text-muted-foreground">
                Access the <strong>original Arabic text</strong> with <strong>Tajweed</strong> and clear
                <strong> translations</strong> for deeper understanding:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
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

            <section id="listen" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">Listen to Surah Rahman Recitations</h3>
              <p className="mt-2 text-muted-foreground">
                Enjoy renowned recitations with precise <strong>Tajweed</strong> and emotive delivery:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="rounded-lg border p-3">
                  <Link href="/qari-abdul-basit" className="font-medium hover:underline">Qari Abdul Basit</Link>
                  <p className="text-muted-foreground">Timeless and powerful tilawah.</p>
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

            <section id="benefits" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">Benefits & Virtues of Surah Rahman</h3>
              <p className="mt-2 text-muted-foreground">
                Many reflect on this Surah for <strong>gratitude</strong>, <strong>mercy</strong>, and <strong>remembrance</strong>.
                Explore insights, reflections, and etiquettes of recitation:
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <Link href="/surah-rahman-benefits" className="rounded-full border px-3 py-1 hover:bg-accent hover:text-accent-foreground transition">
                  Learn Benefits
                </Link>
                <Link href="/about-us" className="rounded-full border px-3 py-1 hover:bg-accent hover:text-accent-foreground transition">
                  About This Project
                </Link>
              </div>
            </section>

            <section id="pdf" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">Download Surah Rahman PDF</h3>
              <p className="mt-2 text-muted-foreground">
                Prefer reading offline? Get a <strong>high-quality PDF</strong> with Arabic text (and options for translations).
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <Link href="/surah-rahman-pdf" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition">
                  View PDF Online
                </Link>
                <Link href="/assets/pdf/suraherahman.pdf" className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition">
                  Download PDF
                </Link>
              </div>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-semibold">Frequently Asked Questions</h3>
              <div className="mt-3 space-y-4">
                <details className="rounded-lg border p-4">
                  <summary className="font-medium cursor-pointer">Is Surah Rahman Meccan or Medinan?</summary>
                  <p className="mt-2 text-muted-foreground">It is a Meccan Surah with 78 verses.</p>
                </details>
                <details className="rounded-lg border p-4">
                  <summary className="font-medium cursor-pointer">What are the best times to recite Surah ar-Rahman?</summary>
                  <p className="mt-2 text-muted-foreground">Any time is good for reflection; many prefer after Fajr or at night.</p>
                </details>
                <details className="rounded-lg border p-4">
                  <summary className="font-medium cursor-pointer">Can I memorize Surah Rahman using this site?</summary>
                  <p className="mt-2 text-muted-foreground">Yes — use the Arabic text, translations, audio recitations, and PDF to assist memorization.</p>
                </details>
              </div>
            </section>
          </article>

          {/* Side Panel / Quick links */}
          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl border bg-card p-5">
              <h4 className="text-lg font-semibold">Quick Access</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/surah-rahman-arabic" className="hover:underline">Arabic Text (Tajweed)</Link></li>
                <li><Link href="/surah-rahman-urdu" className="hover:underline">Urdu Translation</Link></li>
                <li><Link href="/surah-rahman-english" className="hover:underline">English Translation</Link></li>
                <li><Link href="/surah-rahman-listen-online" className="hover:underline">Listen Online (Audio)</Link></li>
                <li><Link href="/surah-rahman-pdf" className="hover:underline">PDF Download</Link></li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-card p-5">
              <h4 className="text-lg font-semibold">Key Facts</h4>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-muted-foreground">Chapter</dt><dd className="font-medium">55</dd></div>
                <div><dt className="text-muted-foreground">Verses</dt><dd className="font-medium">78</dd></div>
                <div><dt className="text-muted-foreground">Type</dt><dd className="font-medium">Meccan</dd></div>
                <div><dt className="text-muted-foreground">Focus</dt><dd className="font-medium">Mercy & Blessings</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      {/* FAQ schema */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  )
}
