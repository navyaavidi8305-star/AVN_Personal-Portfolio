import { Award, BrainCircuit, Cloud, Code2, Languages, Workflow } from 'lucide-react'
import { certifications } from '../../data/certifications'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const icons = {
  code: Code2,
  brain: BrainCircuit,
  language: Languages,
  cloud: Cloud,
  workflow: Workflow,
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <SectionHeading
          id="certifications-heading"
          eyebrow="06 — Certifications"
          title="Continuous learning, backed by certifications."
          description="Courses and programs that have strengthened my foundations in programming, AI, cloud, and professional communication."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5">
          {certifications.map((certification, index) => {
            const Icon = icons[certification.icon] ?? Award
            return (
              <Reveal key={certification.name} delay={0.04 * index}>
                <article className="surface surface-hover group flex h-full flex-col rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:border-accent/40">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.16em] text-zinc-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[13.5px] font-semibold leading-snug text-zinc-100">
                    {certification.name}
                  </h3>
                  <p className="mt-auto flex items-center gap-1.5 pt-4 text-[11px] text-zinc-400">
                    <Award className="size-3" aria-hidden="true" />
                    {certification.issuer}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
