import {
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../../data/skills'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = {
  code: Code2,
  frontend: MonitorSmartphone,
  backend: Server,
  database: Database,
  tools: Wrench,
  ai: Sparkles,
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="skills-heading"
            eyebrow="02 — Technical skills"
            title="The tools I use to turn ideas into working software."
            description="A practical toolkit built through coursework and hands-on project work — from interface development to APIs, databases, and deployment."
          />
          <Reveal delay={0.1} className="shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              Continuously learning
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Code2
            return (
              <Reveal key={group.title} delay={0.04 * index}>
                <div className="surface surface-hover group h-full rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.18em] text-zinc-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-base font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                    {group.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${group.title} skills`}>
                    {group.items.map((item) => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-zinc-400">
              <span className="font-medium text-zinc-200">Academic foundation:</span> Data
              Structures, DBMS, Operating Systems, Computer Networks, and Object-Oriented Programming.
            </p>
            <a
              href="#projects"
              className="shrink-0 text-[12px] font-medium text-accent transition-colors hover:text-white"
            >
              See these skills in practice →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
