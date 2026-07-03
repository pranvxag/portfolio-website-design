'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-secondary transition-colors hover:border-accent/60"
    >
      <span
        className={cn(
          'flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300',
          isDark ? 'translate-x-7' : 'translate-x-1',
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-accent" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-accent" />
        )}
      </span>
    </button>
  )
}
