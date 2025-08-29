import Link from "next/link";

export function HomeSeoArticle() {
  // FAQ Schema for rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Surah ar-Rahman (Quran Chapter 55)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surah ar-Rahman is the 55th chapter of the Holy Quran. It emphasizes Allah’s mercy and blessings, repeating the verse 'Which of your Lord’s favors will you both deny?' throughout.",
        },
      },
      {
        "@type": "Question",
        name: "Is Surah Rahman Meccan or Medinan and how many verses does it have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Surah Rahman is a Meccan Surah consisting of 78 verses.",
        },
      },
      {
        "@type": "Question",
        name: "How many times is the verse 'Which of your Lord’s favors will you both deny?' repeated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The refrain appears 31 times in Surah ar-Rahman.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I read Surah Rahman online in Arabic, Urdu and English?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can read the original Arabic text with Tajweed and translations in Urdu and English on this site: /surah-rahman-arabic, /surah-rahman-urdu and /surah-rahman-english.",
        },
      },
      {
        "@type": "Question",
        name: "How can I listen to Surah Rahman recitation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Listen online to renowned Qaris including Qari Abdul Basit and Mishari al-Afasi at /surah-rahman-listen-online.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download a Surah Rahman PDF for offline reading?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. View the PDF at /surah-rahman-pdf or download directly from /assets/pdf/suraherahman.pdf.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of reciting Surah Rahman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many Muslims recite Surah Rahman for reflection on Allah’s mercy, gratitude, and remembrance. Explore reflections on /surah-rahman-benefits.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to recite Surah Rahman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically around 8–12 minutes, depending on pace and reciter.",
        },
      },
      {
        "@type": "Question",
        name: "Does this site provide Tajweed-friendly Arabic text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Arabic pages present clear script with verse markers to support Tajweed practice.",
        },
      },
      {
        "@type": "Question",
        name: "Is transliteration available for Surah Rahman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can read the Arabic text and use the Urdu and English translations for meaning. If you prefer transliteration, check the Read Online page at /surah-rahman-read-online.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the best time to recite Surah ar-Rahman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any time is suitable for reflection. Many prefer reciting after Fajr or in the evening; choose a time you can be consistent with.",
        },
      },
      {
        "@type": "Question",
        name: "Which reciters are available on this website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can listen to Qari Abdul Basit and Mishari al-Afasi. Visit /qari-abdul-basit and /mishari-al-afasi.",
        },
      },
      {
        "@type": "Question",
        name: "Can I share Surah Rahman pages with family and friends?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Share direct links to Arabic, Urdu, English, audio, and PDF pages on this site.",
        },
      },
      {
        "@type": "Question",
        name: "Does reading Surah Rahman require Tajweed expertise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can begin by reading slowly and listening to reliable recitations. Learning Tajweed with a teacher is recommended for accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the PDF for study and memorization?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The PDF is designed for clear reading and printing to support study, memorization, and sharing.",
        },
      },
    ],
  };

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
            Read the <strong>original Arabic</strong> of{" "}
            <strong>Surah ar-Rahman (Quran Chapter 55)</strong> with
            <strong> Tajweed</strong>, explore <strong>Urdu</strong> and{" "}
            <strong>English translations</strong>, listen to
            <strong> recitations</strong>, and get a{" "}
            <strong>high-quality PDF download</strong>.
          </p>

          {/* inline TOC chips */}
          <nav
            aria-label="On this page"
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            <a
              href="#what-is"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              What is
            </a>
            <a
              href="#read-online"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              Read Online
            </a>
            <a
              href="#listen"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              Listen
            </a>
            <a
              href="#benefits"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              Benefits
            </a>
            <a
              href="#pdf"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              PDF
            </a>
            <a
              href="#faq"
              className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
            >
              FAQ
            </a>
          </nav>
        </header>

        {/* Main Article (no aside) */}
        <article className="prose prose-invert max-w-none mx-auto prose-p:leading-7 prose-headings:scroll-mt-24">
          <section id="what-is" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              What is Surah ar-Rahman (Quran 55)?
            </h3>
            <p className="text-muted-foreground mt-2">
              <strong>Surah Rahman</strong> (also spelled <em>Surah Rehman</em>)
              emphasizes Allah’s mercy and the blessings upon humanity and jinn.
              Its recurring verse —{" "}
              <em>“فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ”</em> — invites deep
              reflection on gratitude, balance, and stewardship.
            </p>
            <blockquote className="mt-4 rounded-xl border bg-card/50 p-4 text-center">
              <p className="text-lg">
                “Which of your Lord’s favors will you both deny?”
              </p>
            </blockquote>
          </section>

          <section id="read-online" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Read Surah Rahman Online
            </h3>
            <p className="text-muted-foreground mt-2">
              Access the <strong>Arabic text with Tajweed</strong> and clear{" "}
              <strong>Urdu/English translations</strong>:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm not-prose">
              <li className="rounded-lg border p-3">
                <Link
                  href="/surah-rahman-arabic"
                  className="font-medium hover:underline"
                >
                  Arabic Text
                </Link>
                <p className="text-muted-foreground">
                  Authentic script with verse numbers.
                </p>
              </li>
              <li className="rounded-lg border p-3">
                <Link
                  href="/surah-rahman-urdu"
                  className="font-medium hover:underline"
                >
                  Urdu Translation
                </Link>
                <p className="text-muted-foreground">
                  Beautiful and accurate Urdu meaning.
                </p>
              </li>
              <li className="rounded-lg border p-3">
                <Link
                  href="/surah-rahman-english"
                  className="font-medium hover:underline"
                >
                  English Translation
                </Link>
                <p className="text-muted-foreground">
                  Clear English explanation of each ayah.
                </p>
              </li>
              <li className="rounded-lg border p-3">
                <Link
                  href="/surah-rahman-read-online"
                  className="font-medium hover:underline"
                >
                  Read Online
                </Link>
                <p className="text-muted-foreground">
                  All formats in one place for convenience.
                </p>
              </li>
            </ul>
          </section>

          <section id="listen" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Listen to Surah Rahman Recitations
            </h3>
            <p className="text-muted-foreground mt-2">
              Enjoy renowned recitations with precise <strong>Tajweed</strong>:
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm not-prose">
              <li className="rounded-lg border p-3">
                <Link
                  href="/qari-abdul-basit"
                  className="font-medium hover:underline"
                >
                  Qari Abdul Basit
                </Link>
                <p className="text-muted-foreground">
                  Timeless, powerful tilawah.
                </p>
              </li>
              <li className="rounded-lg border p-3">
                <Link
                  href="/mishari-al-afasi"
                  className="font-medium hover:underline"
                >
                  Mishari al-Afasi
                </Link>
                <p className="text-muted-foreground">
                  Beautiful, soothing recitation.
                </p>
              </li>
              <li className="rounded-lg border p-3 sm:col-span-2">
                <Link
                  href="/surah-rahman-listen-online"
                  className="font-medium hover:underline"
                >
                  Listen Online (Audio)
                </Link>
                <p className="text-muted-foreground">
                  Stream Surah Rahman on any device.
                </p>
              </li>
            </ul>
          </section>

          <section id="benefits" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Benefits & Virtues of Surah Rahman
            </h3>
            <p className="text-muted-foreground mt-2">
              Many reflect on this Surah for <strong>gratitude</strong>,{" "}
              <strong>mercy</strong>, and <strong>remembrance</strong>. Explore
              reflections and etiquettes of recitation:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 not-prose">
              <Link
                href="/surah-rahman-benefits"
                className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
              >
                Learn Benefits
              </Link>
              <Link
                href="/about-us"
                className="rounded-full border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition"
              >
                About This Project
              </Link>
            </div>
          </section>

          <section id="pdf" className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Download Surah Rahman PDF
            </h3>
            <p className="text-muted-foreground mt-2">
              Prefer offline reading? Get a <strong>high-quality PDF</strong>{" "}
              with Arabic text (and translations).
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3 not-prose">
              <Link
                href="/surah-rahman-pdf"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
              >
                View PDF Online
              </Link>
              <Link
                href="/assets/pdf/suraherahman.pdf"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
              >
                Download PDF
              </Link>
            </div>
          </section>

          <section id="faq" className="mb-2">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Frequently Asked Questions
            </h3>
            <div className="mt-3 space-y-4 not-prose">
              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  What is Surah ar-Rahman (Quran 55)?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Surah ar-Rahman emphasizes Allah’s mercy and blessings,
                  inviting gratitude and reflection.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Is it Meccan and how many verses?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  It is a Meccan Surah with 78 verses.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  How many times is the refrain repeated?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  “Which of your Lord’s favors will you both deny?” appears 31
                  times in Surah ar-Rahman.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Where can I read Surah Rahman online?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  See{" "}
                  <Link href="/surah-rahman-arabic" className="underline">
                    Arabic
                  </Link>
                  ,{" "}
                  <Link href="/surah-rahman-urdu" className="underline">
                    Urdu
                  </Link>
                  , and{" "}
                  <Link href="/surah-rahman-english" className="underline">
                    English
                  </Link>{" "}
                  pages.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  How can I listen to recitations?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Visit{" "}
                  <Link
                    href="/surah-rahman-listen-online"
                    className="underline"
                  >
                    Listen Online
                  </Link>{" "}
                  for Qari Abdul Basit and Mishari al-Afasi.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Can I download a PDF?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Yes —{" "}
                  <Link href="/surah-rahman-pdf" className="underline">
                    View PDF
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/assets/pdf/suraherahman.pdf"
                    className="underline"
                  >
                    Download directly
                  </Link>
                  .
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  What are the benefits of reciting Surah Rahman?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Many recite it for reflection on mercy and gratitude. Learn
                  more on{" "}
                  <Link href="/surah-rahman-benefits" className="underline">
                    Benefits
                  </Link>
                  .
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  How long does a full recitation take?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Usually around 8–12 minutes, depending on pace and reciter.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Do you provide Tajweed-friendly Arabic text?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Yes, the Arabic pages show clear script and verse markers to
                  support Tajweed practice.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Is transliteration available?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Use Arabic with Urdu/English translations for meaning; for
                  transliteration, see{" "}
                  <Link href="/surah-rahman-read-online" className="underline">
                    Read Online
                  </Link>
                  .
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  When is the best time to recite Surah ar-Rahman?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Any time you can be focused and consistent; many prefer after
                  Fajr or evenings.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Which reciters are featured here?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  <Link href="/qari-abdul-basit" className="underline">
                    Qari Abdul Basit
                  </Link>{" "}
                  and{" "}
                  <Link href="/mishari-al-afasi" className="underline">
                    Mishari al-Afasi
                  </Link>
                  .
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Can I share these pages?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Yes — share direct links to the Arabic, translations, audio,
                  and PDF pages.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Do I need Tajweed expertise to start?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Start slow, listen to reliable recitations, and consider
                  learning Tajweed with a teacher for accuracy.
                </p>
              </details>

              <details className="rounded-lg border p-4">
                <summary className="font-medium cursor-pointer">
                  Can the PDF help with study and memorization?
                </summary>
                <p className="mt-2 text-muted-foreground">
                  Yes — it’s formatted for clear reading and printing to support
                  study and memorization.
                </p>
              </details>
            </div>
          </section>
        </article>
      </div>

      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
