import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import { education } from '../../data/education'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const [featured, ...otherEducation] = education

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <SectionHeading
          id="education-heading"
          eyebrow="05 — Education"
          title="A strong academic foundation in computer science."
          description="Coursework and projects that built my understanding of programming, data, systems, and software design."
        />

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="surface relative h-full overflow-hidden rounded-2xl p-6 sm:p-7">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/90">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  In progress
                </span>
              </div>

              <h3 className="relative mt-5 font-display text-xl font-semibold tracking-tight text-zinc-100 sm:text-[1.35rem]">
                {featured.degree}
              </h3>
              <p className="relative mt-1.5 text-[14px] text-zinc-300">{featured.institution}</p>
              <p className="relative mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {featured.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {featured.period}
                </span>
              </p>

              <dl className="relative mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    CGPA
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-zinc-100">
                    {featured.cgpa}
                  </dd>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    Status
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-zinc-100">
                    {featured.year}
                  </dd>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400">
                    Graduating
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-zinc-100">
                    {featured.graduationYear}
                  </dd>
                </div>
              </dl>

              <div className="relative mt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-400">
                  Relevant coursework
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Relevant coursework">
                  {featured.coursework.map((course) => (
                    <li key={course} className="tag">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {otherEducation.map((item, index) => (
              <Reveal key={item.degree} delay={0.06 * (index + 1)}>
                <article className="surface surface-hover flex h-full flex-col rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-zinc-300">
                      <GraduationCap className="size-4" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400">
                      {item.score}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-zinc-100">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-[13px] text-zinc-400">{item.institution}</p>
                  <p className="mt-auto pt-3 font-mono text-[10px] tracking-[0.06em] text-zinc-400">
                    {item.period} · {item.location}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
