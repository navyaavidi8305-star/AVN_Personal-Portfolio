import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { site } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const highlights = [
  {
    icon: Layers,
    title: 'What I build',
    text: 'Responsive frontends, REST APIs, and full-stack applications with a focus on practical, usable features.',
  },
  {
    icon: Sparkles,
    title: 'How I work',
    text: 'I like breaking problems into small pieces, learning the underlying concepts, and iterating until the result feels clean.',
  },
  {
    icon: GraduationCap,
    title: 'Academic foundation',
    text: 'B.Tech in Computer Science and Engineering at MRECW, with coursework in data structures, DBMS, OS, and networks.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'What I am seeking',
    text: 'Software engineering internships, graduate trainee positions, and entry-level developer roles where I can contribute and grow.',
  },
]

const snapshot = [
  { label: 'Education', value: 'B.Tech CSE' },
  { label: 'College', value: `${site.education.shortCollege}, Hyderabad` },
  {
    label: 'Academic year',
    value: `${site.education.year} · ${site.education.graduation.replace('Expected ', '')}`,
  },
  { label: 'CGPA', value: `${site.education.cgpa} / 10` },
  { label: 'Location', value: site.location },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              id="about-heading"
              eyebrow="01 — About me"
              title="A developer focused on building useful things for the web."
            />

            <Reveal delay={0.05}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                <p>
                  I&apos;m a final-year Computer Science Engineering student at Malla Reddy Engineering
                  College for Women, currently maintaining a CGPA of 8.81. My work sits at the
                  intersection of frontend craft and full-stack functionality.
                </p>
                <p>
                  I enjoy turning ideas into working applications. My featured project, DriveMate AI,
                  is a centralized vehicle management platform, while my internship and practice
                  projects have covered task management, e-commerce, and blogging. Along the way,
                  I&apos;ve built hands-on experience with React, Node.js, Express, MongoDB, and Supabase,
                  along with the details that make software reliable: clean components, thoughtful
                  APIs, and interfaces that feel effortless.
                </p>
                <p>
                  I&apos;m actively looking for opportunities to contribute to a software development
                  team while continuing to learn modern technologies and solve meaningful technical
                  problems.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {['Full-stack development', 'Frontend engineering', 'REST APIs', 'Supabase & databases'].map(
                  (item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ),
                )}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
              >
                Get in touch
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="surface relative overflow-hidden rounded-2xl">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-accent/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Snapshot
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/90">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Available
                </span>
              </div>

              <dl className="relative divide-y divide-white/[0.06] px-5">
                {snapshot.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-[12px] text-zinc-400">{row.label}</dt>
                    <dd className="text-right text-[12.5px] font-medium text-zinc-200">
                      {row.label === 'Location' ? (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                          {row.value}
                        </span>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="relative border-t border-white/[0.07] px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  Open to
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-300">
                  Internships · Graduate trainee · Entry-level developer roles
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Reveal key={highlight.title} delay={0.05 * index}>
                <div className="surface surface-hover h-full rounded-2xl p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-semibold text-zinc-100">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{highlight.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
