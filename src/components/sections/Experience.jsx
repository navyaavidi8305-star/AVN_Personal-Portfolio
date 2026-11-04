import { BriefcaseBusiness, Building2, Check, MapPin } from 'lucide-react'
import { experience } from '../../data/experience'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="experience-heading"
              eyebrow="04 — Experience"
              title="Learning by building, shipping, and iterating."
              description="A short internship and a steady stream of self-directed full-stack projects have shaped how I approach software development."
            />

            <Reveal delay={0.08}>
              <div className="surface relative mt-8 overflow-hidden rounded-2xl p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-accent/15 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-2">
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-emerald-400" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200/90">
                    Open to new opportunities
                  </span>
                </div>
                <p className="relative mt-3 text-[13px] leading-relaxed text-zinc-400">
                  I&apos;m currently looking for software engineering internships, graduate trainee
                  roles, and entry-level developer positions where I can contribute to a real product
                  team.
                </p>
                <a href="#contact" className="btn-secondary relative mt-5 px-4 py-2 text-[12px]">
                  Start a conversation
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-5">
              <span
                className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent"
                aria-hidden="true"
              />

              {experience.map((entry, index) => (
                <li key={`${entry.role}-${entry.company}`} className="relative pl-9 sm:pl-11">
                  <span
                    className="absolute left-0 top-1.5 flex size-[23px] items-center justify-center rounded-full border border-accent/30 bg-void"
                    aria-hidden="true"
                  >
                    <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                  </span>

                  <Reveal delay={0.05 * index}>
                    <article className="surface surface-hover rounded-2xl p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                          <BriefcaseBusiness className="size-3" aria-hidden="true" />
                          {entry.type}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.06em] text-zinc-400">
                          {entry.period}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-zinc-100">
                        {entry.role}
                      </h3>
                      <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-zinc-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="size-3.5 text-zinc-400" aria-hidden="true" />
                          {entry.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-zinc-400" aria-hidden="true" />
                          {entry.mode}
                        </span>
                      </p>

                      <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">
                        {entry.summary}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {entry.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-[12.5px] leading-relaxed text-zinc-300"
                          >
                            <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                        {entry.tech.map((tech) => (
                          <li key={tech} className="tag">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
