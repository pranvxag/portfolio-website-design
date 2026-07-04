import { Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { SocialLinks } from '@/components/social-links'

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

        <SocialLinks />

        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-logo text-lg text-foreground">
            {siteConfig.logo}
          </span>{' '}
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}