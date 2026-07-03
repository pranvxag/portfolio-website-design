import { Mail } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'

const socialItems = [
  { label: 'GitHub', href: siteConfig.socials.github, icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: siteConfig.socials.email, icon: Mail },
]

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border py-16 sm:py-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Have an idea, an opportunity, or just want to say hi? My inbox is
            always open.
          </p>
        </div>

        <a
          href={siteConfig.socials.email}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>

        <div className="flex items-center gap-3">
          {socialItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-logo text-lg text-foreground">
            {siteConfig.logo}
          </span>{' '}
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

