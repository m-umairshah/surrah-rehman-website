import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Surah Rahman
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/surah-rahman-benefits" className="hover:text-accent transition-colors">
              Benefits
            </Link>
            <Link href="/surah-rahman-listen-online" className="hover:text-accent transition-colors">
              Listen Online
            </Link>
            <Link href="/surah-rahman-read-online" className="hover:text-accent transition-colors">
              Read Online
            </Link>
            <Link href="/surah-rahman-pdf" className="hover:text-accent transition-colors">
              PDF
            </Link>
            <Link href="/contact-us" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="secondary" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}
