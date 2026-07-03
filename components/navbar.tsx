'use client'

import { Eye, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { navLinks, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-transparent px-4 py-2.5 transition-all duration-300 sm:px-6',
          scrolled &&
            'border-border bg-background/70 shadow-sm backdrop-blur-xl',
        )}
      >
        <Link
          href="#home"
          className="font-logo text-2xl leading-none text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.logo}
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: 'sm' }),
              'hidden rounded-full sm:inline-flex',
            )}
          >
            <Eye className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute top-20 left-1/2 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants(), 'w-full rounded-lg')}
              >
                <Eye className="h-4 w-4" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
