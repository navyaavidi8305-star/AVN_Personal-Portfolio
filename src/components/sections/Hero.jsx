import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'
import { projects } from '../../data/projects'
import { site } from '../../data/site'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import ResumeButton from '../ui/ResumeButton'

const stats = [
  { value: site.education.cgpa, label: 'CGPA / 10' },
  { value: site.education.year.replace(' Year', ''), label: 'Year · B.Tech CSE' },
  {
    value: String(projects.length).padStart(2, '0'),
    label: projects.length === 1 ? 'Featured project' : 'Featured projects',
  },
]

const codeLines = [
  {
    content: (
      <>
        <span className="text-violet-300">const</span>{' '}
        <span className="text-sky-300">developer</span>{' '}
        <span className="text-zinc-400">= {'{'}</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">name</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-emerald-300">&quot;Avidi Venkata Narasamma&quot;</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">role</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">education</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-emerald-300">&quot;B.Tech CSE · 2027&quot;</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">location</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-emerald-300">&quot;Hyderabad, IN&quot;</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">stack</span>
        <span className="text-zinc-400">: [</span>
        <span className="text-amber-200">&quot;React&quot;</span>
        <span className="text-zinc-400">, </span>
        <span className="text-amber-200">&quot;Node&quot;</span>
        <span className="text-zinc-400">, </span>
        <span className="text-amber-200">&quot;MongoDB&quot;</span>
        <span className="text-zinc-400">],</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">focus</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-emerald-300">&quot;Real-world applications&quot;</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {'  '}
        <span className="text-zinc-400">openToWork</span>
        <span className="text-zinc-400">:</span>{' '}
        <span className="text-orange-300">true</span>
        <span className="text-zinc-400">,</span>
      </>
    ),
  },
  {
    content: <span className="text-zinc-400">{'};'}</span>,
  },
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center overflow-hidden pb-20 pt-32 sm:pb-24 lg:pt-36"
    >
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 xl:gap-20">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.div variants={item}>
            <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5">
              <span className="relative flex size-1.5 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-emerald-400" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[9px] font-medium uppercase leading-relaxed tracking-[0.16em] text-emerald-200/90 sm:text-[10px] sm:tracking-[0.2em]">
                {site.availability}
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:text-[11px]"
          >
            {site.name}
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-heading"
            className="mt-3 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.03em] text-zinc-100 sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4.35rem]"
          >
            Building digital experiences with{' '}
            <span className="text-gradient">code &amp; creativity.</span>
          </motion.h1>

          <motion.ul
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-3.5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-[11px]"
            aria-label="Professional roles"
          >
            {site.roles.map((role, index) => (
              <li key={role} className="flex items-center gap-3.5">
                {index > 0 ? (
                  <span className="size-1 rounded-full bg-accent/60" aria-hidden="true" />
                ) : null}
                {role}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-400 sm:text-[17px]"
          >
            {site.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Project
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <ResumeButton className="btn-secondary" />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-button"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubIcon className="size-[18px]" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-button"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon className="size-[18px]" />
            </a>
            <a
              href={`mailto:${site.links.email}`}
              className="icon-button"
              aria-label="Send an email"
            >
              <Mail className="size-[18px]" aria-hidden="true" />
            </a>
            <span className="mx-1 hidden h-5 w-px bg-white/10 sm:block" aria-hidden="true" />
            <a
              href="#contact"
              className="hidden text-[13px] text-zinc-400 transition-colors hover:text-zinc-100 sm:block"
            >
              Let&apos;s connect
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.07] pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-zinc-400 sm:text-xs">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[34rem] lg:mx-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute -inset-10 rounded-full bg-accent/15 blur-[80px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-8 -top-6 bottom-8 rounded-[2rem] border border-white/[0.04]"
            aria-hidden="true"
          />

          <div className="relative animate-float-slow">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0813]/90 shadow-[0_40px_120px_-40px_rgba(76,29,149,0.7)] backdrop-blur-xl">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
                <span className="size-2.5 rounded-full bg-rose-400/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-amber-300/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" aria-hidden="true" />
                <div className="ml-3 flex flex-1 items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
                  <span className="font-mono text-[10px] text-zinc-400">developer.js</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                    avn
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto px-4 py-5 sm:px-5">
                <pre className="min-w-max font-mono text-[11px] leading-6 sm:text-xs md:text-[13px]">
                  <code>
                    {codeLines.map((line, index) => (
                      <span key={index} className="flex">
                        <span
                          className="mr-4 inline-block w-4 shrink-0 select-none text-right text-zinc-700"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                        <span>{line.content}</span>
                      </span>
                    ))}
                  </code>
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3.5 sm:px-5">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" aria-hidden="true" />
                  Open to opportunities
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                  Full-stack · Supabase
                </span>
              </div>
            </div>

            <div className="absolute -left-3 -bottom-5 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#0b0916]/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:flex">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent/15 font-mono text-[10px] font-semibold text-accent">
                {'</>'}
              </span>
              <span className="text-[11px] leading-tight text-zinc-300">
                React · Node · MongoDB
                <span className="block text-[10px] text-zinc-400">Building practical apps</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
