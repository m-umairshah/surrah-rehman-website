import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16 bg-sidebar text-sidebar-foreground">
      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand + Social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                Surah Rahman
              </span>
            </Link>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Experience the beauty of Surah ar-Rahman with authentic
              recitations, translations, and a serene reading experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/"
              aria-label="Twitter / X"
              className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/"
              aria-label="YouTube"
              className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link
              href="/contact-us"
              aria-label="Email"
              className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* MOBILE accordion */}
        <div className="md:hidden space-y-4 mb-8">
          <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">Quick Links</span>
              <ArrowUpRight className="h-4 w-4 transition group-open:rotate-45" />
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/surah-rahman-arabic"
                  className="hover:text-primary transition"
                >
                  Arabic Text
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-urdu"
                  className="hover:text-primary transition"
                >
                  Urdu Translation
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-english"
                  className="hover:text-primary transition"
                >
                  English Translation
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-benefits"
                  className="hover:text-primary transition"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </details>

          <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">Reciters</span>
              <ArrowUpRight className="h-4 w-4 transition group-open:rotate-45" />
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/qari-abdul-basit"
                  className="hover:text-primary transition"
                >
                  Qari Abdul Basit
                </Link>
              </li>
              <li>
                <Link
                  href="/mishari-al-afasi"
                  className="hover:text-primary transition"
                >
                  Mishari al-Afasi
                </Link>
              </li>
            </ul>
          </details>

          <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">Resources</span>
              <ArrowUpRight className="h-4 w-4 transition group-open:rotate-45" />
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/surah-rahman-pdf"
                  className="hover:text-primary transition"
                >
                  View PDF Online
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/pdf/suraherahman.pdf"
                  className="hover:text-primary transition"
                >
                  Download PDF
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </details>
        </div>

        {/* DESKTOP grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/surah-rahman-arabic"
                  className="hover:text-primary transition"
                >
                  Arabic Text
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-urdu"
                  className="hover:text-primary transition"
                >
                  Urdu Translation
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-english"
                  className="hover:text-primary transition"
                >
                  English Translation
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-benefits"
                  className="hover:text-primary transition"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Reciters</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/qari-abdul-basit"
                  className="hover:text-primary transition"
                >
                  Qari Abdul Basit
                </Link>
              </li>
              <li>
                <Link
                  href="/mishari-al-afasi"
                  className="hover:text-primary transition"
                >
                  Mishari al-Afasi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/surah-rahman-pdf"
                  className="hover:text-primary transition"
                >
                  View PDF Online
                </Link>
              </li>
              <li>
                <Link
                  href="/assets/pdf/suraherahman.pdf"
                  className="hover:text-primary transition"
                >
                  Download PDF
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-primary transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Language</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" /> English
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-urdu"
                  className="hover:text-primary transition flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" /> اردو
                </Link>
              </li>
              <li>
                <Link
                  href="/surah-rahman-arabic"
                  className="hover:text-primary transition flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" /> العربية
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        {/* Bottom bar */}
        <div className="mt-8 border-t border-sidebar-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Surah Rahman. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm">
              Powered by{" "}
              <Link
                href="https://kumzsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                kumzsolutions.com
              </Link>
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition"
              >
                Privacy
              </Link>
              <span className="hidden sm:inline text-white/20">|</span>
              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition"
              >
                Terms
              </Link>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="#top"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition"
                aria-label="Back to top"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
