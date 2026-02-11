import { cn, containerBorders, horizontalPadding, sectionWrapper } from '@/lib/utils'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { title: 'Om Zoey', href: '#om-zoey' },
  { title: 'Rekrytera', href: '#tjanster' },
  { title: 'Anlita konsult', href: '#tjanster' },
  { title: 'Bli konsult', href: '#tjanster' },
  { title: 'Lediga jobb', href: '#tjanster' },
  { title: 'Integritetspolicy', href: '#' },
]

export default function Footer() {
  return (
    <footer id="kontakt" className={sectionWrapper('bg-background')}>
      <div className={cn(containerBorders(), horizontalPadding, 'pt-16 pb-8')}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Logo and tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label="Zoey hem"
              className="text-2xl font-bold tracking-tight"
            >
              Zoey
            </Link>
            <p className="text-xl font-medium">
              När människor växer,
              <br />
              växer organisationer
            </p>
          </div>

          {/* Right - Two columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upptäck Zoey</h3>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kontakt</h3>
              <div className="flex flex-col space-y-3 text-muted-foreground">
                <a
                  href="mailto:info@zoey.se"
                  className="transition-colors duration-150 hover:text-foreground"
                >
                  info@zoey.se
                </a>
                <p>Stockholm, Sverige</p>
              </div>

              {/* Social */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/zoey.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zoey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zoey. Alla rättigheter
            förbehållna.
          </span>
        </div>
      </div>
    </footer>
  )
}
