'use client'

import { Button } from '@/components/ui/button'
import { cn, horizontalPadding } from '@/lib/utils'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

const menuItems = [
  { name: 'Om Zoey', href: '#om-zoey' },
  { name: 'Tjänster', href: '#tjanster' },
  { name: 'Zoey Hub', href: '#zoey-hub' },
  { name: 'Lediga jobb', href: '#lediga-jobb' },
]

export function Header() {
  const [menuState, setMenuState] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!menuState) return

      if (e.key === 'Escape') {
        setMenuState(false)
        menuButtonRef.current?.focus()
        return
      }

      if (e.key !== 'Tab') return

      const focusableElements =
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      if (!focusableElements || focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    },
    [menuState]
  )

  useEffect(() => {
    if (menuState) {
      document.addEventListener('keydown', handleKeyDown)
      const firstLink =
        menuRef.current?.querySelector<HTMLElement>('a[href]')
      firstLink?.focus()
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuState, handleKeyDown])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn(
          'fixed z-20 w-full border-b border-transparent',
          'transition-all duration-300',
          scrolled && 'border-border/30 bg-background/50 backdrop-blur-md'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl transition-all duration-300',
            scrolled ? horizontalPadding : 'pl-16 pr-0 md:pl-32 md:pr-0'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Zoey hem"
                className={cn(
                  'text-2xl font-bold tracking-tight transition-colors duration-300',
                  !scrolled && 'text-white'
                )}
              >
                Zoey
              </Link>

              <button
                ref={menuButtonRef}
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Stäng meny' : 'Öppna meny'}
                aria-expanded={menuState}
                aria-controls="mobile-menu"
                className={cn(
                  'flex size-10 items-center justify-center rounded-md lg:hidden transition-colors duration-300',
                  !scrolled && 'text-white'
                )}
              >
                {menuState ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
            </div>

            {/* Desktop nav */}
            <div className={cn('hidden lg:block', !scrolled && '-mr-32 md:-mr-48')}>
              <ul className="flex items-center gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'transition-colors duration-300',
                        scrolled
                          ? 'text-muted-foreground hover:text-foreground'
                          : 'text-white/70 hover:text-white'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button
                    asChild
                    size="sm"
                    variant={scrolled ? 'default' : 'outline'}
                    className={cn(
                      !scrolled &&
                        'border-white/30 bg-transparent text-white hover:bg-white/10'
                    )}
                  >
                    <Link href="#kontakt">Kontakta oss</Link>
                  </Button>
                </li>
                {mounted && (
                  <li>
                    <button
                      onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                      }
                      aria-label={
                        theme === 'dark'
                          ? 'Byt till ljust läge'
                          : 'Byt till mörkt läge'
                      }
                      className={cn(
                        'flex size-9 items-center justify-center rounded-md transition-colors duration-300',
                        scrolled
                          ? 'text-muted-foreground hover:text-foreground'
                          : 'text-white/70 hover:text-white'
                      )}
                    >
                      {theme === 'dark' ? (
                        <Sun className="size-[18px]" />
                      ) : (
                        <Moon className="size-[18px]" />
                      )}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Mobile menu */}
            <div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal={menuState ? 'true' : undefined}
              aria-label="Navigeringsmeny"
              className={cn(
                'mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border bg-background p-6 shadow-2xl',
                'in-data-[state=active]:block',
                'lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex'
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-5 text-base">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-muted-foreground block transition-colors duration-150 hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {mounted && (
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <span className="text-sm text-muted-foreground">
                      {theme === 'dark' ? 'Mörkt läge' : 'Ljust läge'}
                    </span>
                    <button
                      onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                      }
                      aria-label={
                        theme === 'dark'
                          ? 'Byt till ljust läge'
                          : 'Byt till mörkt läge'
                      }
                      className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {theme === 'dark' ? (
                        <Sun className="size-5" />
                      ) : (
                        <Moon className="size-5" />
                      )}
                    </button>
                  </div>
                )}
                <div className="mt-4">
                  <Button asChild className="w-full">
                    <Link
                      href="#kontakt"
                      onClick={() => setMenuState(false)}
                    >
                      Kontakta oss
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
