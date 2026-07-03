import { Eye, Mail } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-border bg-secondary sm:w-72 lg:w-80">
            <Image
              src="/avatar-placeholder.png"
              alt={`Portrait of ${siteConfig.name}`}
              fill
              sizes="(max-width: 1024px) 18rem, 20rem"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {siteConfig.about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants(), 'rounded-lg')}
            >
              <Eye className="h-4 w-4" />
              Resume
            </a>
            <a
              href={siteConfig.socials.email}
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'rounded-lg',
              )}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
