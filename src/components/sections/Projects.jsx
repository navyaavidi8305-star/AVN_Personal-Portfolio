import { ArrowUpRight, Check, ExternalLink, Server } from 'lucide-react'
import { projectAccents, projects } from '../../data/projects'
import { site } from '../../data/site'
import { GithubIcon } from '../ui/BrandIcons'
import ProjectPreview from '../ui/ProjectPreview'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function ProjectActions({ project }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary px-4 py-2 text-[12px]"
            aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
          >
            <GithubIcon className="size-3.5" />
            Source code
          </a>
        ) : null}

        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary px-4 py-2 text-[12px]"
            aria-label={`${project.name} live demo (opens in a new tab)`}
          >
            <ExternalLink className="size-3.5" aria-hidden="true" />
            Live demo
          </a>
        ) : (
          <span
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white/15 bg-white/[0.02] px-4 py-2 text-[12px] text-zinc-400"
            aria-disabled="true"
            title="No live deployment is linked for this project yet."
          >
            <ExternalLink className="size-3.5" aria-hidden="true" />
            Demo not available
          </span>
        )}

        {project.links.backend ? (
          <a
            href={project.links.backend}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary px-4 py-2 text-[12px]"
            aria-label={`${project.name} backend API (opens in a new tab)`}
          >
            <Server className="size-3.5" aria-hidden="true" />
            Backend API
          </a>
        ) : null}
      </div>
    </div>
  )
}

function TechList({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technology stack">
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  )
}

function FeaturedProject({ project }) {
  const accent = projectAccents[project.accent]

  return (
    <Reveal>
      <article className="surface surface-hover group overflow-hidden rounded-3xl">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative p-4 sm:p-5 lg:p-6">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: accent.glow }}
              aria-hidden="true"
            />
            <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.015]">
              <ProjectPreview project={project} />
            </div>
          </div>

          <div className="flex flex-col border-t border-white/[0.06] p-6 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                Featured project
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] text-zinc-400">
                {project.index}
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.7rem]">
              {project.name}
            </h3>
            <p className={`mt-1 text-[13px] font-medium ${accent.text}`}>{project.subtitle}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-zinc-400">{project.description}</p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-[12.5px] text-zinc-300">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <TechList items={project.tech} />
            </div>

            <div className="mt-6 border-t border-white/[0.06] pt-5">
              <ProjectActions project={project} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ project }) {
  const accent = projectAccents[project.accent]

  return (
    <Reveal>
      <article className="surface surface-hover group flex h-full flex-col overflow-hidden rounded-3xl p-5 sm:p-6">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ backgroundColor: accent.glow }}
            aria-hidden="true"
          />
          <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <ProjectPreview project={project} />
          </div>
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
              Project
            </span>
            <span className="font-mono text-[11px] tracking-[0.18em] text-zinc-400">
              {project.index}
            </span>
          </div>

          <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
            {project.name}
          </h3>
          <p className={`mt-1 text-[13px] font-medium ${accent.text}`}>{project.subtitle}</p>
          <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400">{project.description}</p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[12.5px] text-zinc-300">
                <Check className="mt-0.5 size-3.5 shrink-0 text-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <TechList items={project.tech} />
          </div>

          <div className="mt-auto border-t border-white/[0.06] pt-5">
            <ProjectActions project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-heading"
            eyebrow="03 — Projects"
            title="Selected work, built from frontend to backend."
            description="Full-stack applications I designed and developed to practice real-world engineering — from AI-powered platforms to everyday utility tools, with a focus on usable interfaces."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <GithubIcon className="size-4" />
              More on GitHub
              <ArrowUpRight className="size-3.5 text-accent" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 lg:mt-12">
          <FeaturedProject project={featuredProject} />
        </div>

        {otherProjects.length > 0 ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
