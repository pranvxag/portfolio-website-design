import { Code2, Eye, Mail, Rocket } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const statusIcons = [Rocket, Code2]

export function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col">
          <p className="text-lg font-medium text-accent sm:text-xl">
            {siteConfig.hero.greeting}
          </p>

          <h1 className="mt-2 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <span className="font-semibold text-foreground">
              {siteConfig.hero.tagline},
            </span>{' '}
            {siteConfig.hero.description}
          </p>

          <ul className="mt-8 flex flex-col gap-2">
            {siteConfig.hero.status.map((item, i) => {
              const Icon = statusIcons[i] ?? Code2
              return (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground sm:text-base"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              )
            })}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.socials.email}
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-lg')}
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'secondary' }),
                'rounded-lg',
              )}
            >
              <Eye className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="animate-float-slow">
            <Image
              src="/hero-illustration.png"
              alt="Illustration of an AI robot head representing full-stack and AI development"
              width={520}
              height={520}
              priority
              className="h-auto w-full select-none object-contain dark:opacity-90 dark:invert"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
