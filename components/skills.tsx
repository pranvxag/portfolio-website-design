import { skillCategories } from '@/lib/site-config'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Skills
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The languages, frameworks, and tools I reach for when turning ideas
            into shipped products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground transition-colors group-hover:border-accent/30"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
