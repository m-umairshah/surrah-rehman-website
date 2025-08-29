"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu as MenuIcon, X, Home, Info, Headphones, BookOpen, FileText, MessageCircle } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden")
    else document.body.classList.remove("overflow-hidden")
    return () => document.body.classList.remove("overflow-hidden")
  }, [open])

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Info },
    { href: "/surah-rahman-benefits", label: "Benefits", icon: FileText },
    { href: "/surah-rahman-listen-online", label: "Listen Online", icon: Headphones },
    { href: "/surah-rahman-read-online", label: "Read Online", icon: BookOpen },
    { href: "/surah-rahman-pdf", label: "PDF", icon: FileText },
    { href: "/contact-us", label: "Contact", icon: MessageCircle },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Surah Rahman
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-accent transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="secondary"
            size="sm"
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm md:hidden 
        transform transition-transform duration-300
        bg-gradient-to-b from-primary to-primary/95 text-primary-foreground shadow-2xl
        ${open ? "translate-x-0" : "translate-x-full"}`}
        onTransitionEnd={() => {
          if (open) firstLinkRef.current?.focus()
        }}
      >
        {/* Drawer Header */}
        <div className="relative">
          <div className="h-32 w-full bg-[radial-gradient(80%_80%_at_100%_0%,rgba(255,255,255,0.22),transparent)]" />
          <button
            className="absolute right-3 top-3 rounded-full p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              Surah Rahman
            </Link>
            <p className="mt-1 text-sm/5 text-primary-foreground/80">
              بسم الله الرحمن الرحيم
            </p>
          </div>
        </div>

        {/* Search (optional – remove if not needed) */}
        {/* <div className="px-4 pt-4">
          <input
            type="search"
            placeholder="Search…"
            className="w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder:text-white/70 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/40"
          />
        </div> */}

        {/* Links */}
        <nav className="mt-2 px-2 pb-6">
          <ul className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }, idx) => (
              <li key={href}>
                <Link
                  ref={idx === 0 ? firstLinkRef : null}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center gap-3 rounded-xl px-4 py-3 outline-none 
                  ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/5
                  focus-visible:ring-2 focus-visible:ring-white/50 transition`}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg bg-white/10 group-hover:bg-white/20 transition`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-base font-medium">{label}</span>
                  <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA / Badge */}
        <div className="mt-auto px-4 pb-6">
          <div className="rounded-xl border border-white/15 bg-white/5 p-4">
            <p className="text-sm/6 text-primary-foreground/90">
              “فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ”
            </p>
            <p className="mt-1 text-xs/5 text-primary-foreground/70">
              Explore: Benefits • Listen • Read • PDF
            </p>
          </div>
        </div>
      </aside>
    </header>
  )
}
