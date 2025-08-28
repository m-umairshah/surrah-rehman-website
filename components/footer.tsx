import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Surah Rahman</h3>
            <p className="text-sm text-muted-foreground">
              Experience the beauty of Surah Rahman with authentic recitations and translations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/surah-rahman-arabic" className="hover:text-primary transition-colors">
                  Arabic Text
                </Link>
              </li>
              <li>
                <Link href="/surah-rahman-urdu" className="hover:text-primary transition-colors">
                  Urdu Translation
                </Link>
              </li>
              <li>
                <Link href="/surah-rahman-english" className="hover:text-primary transition-colors">
                  English Translation
                </Link>
              </li>
              <li>
                <Link href="/surah-rahman-benefits" className="hover:text-primary transition-colors">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Reciters</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/qari-abdul-basit" className="hover:text-primary transition-colors">
                  Qari Abdul Basit
                </Link>
              </li>
              <li>
                <Link href="/mishari-al-afasi" className="hover:text-primary transition-colors">
                  Mishari al-Afasi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/surah-rahman-pdf" className="hover:text-primary transition-colors">
                  View PDF Online
                </Link>
              </li>
              <li>
                <Link href="/assets/pdf/suraherahman.pdf" className="hover:text-primary transition-colors">
                  Download PDF
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Surah Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
