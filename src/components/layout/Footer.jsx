import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { navItems, site } from '../../data/site'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

const connectLinks = [
  { label: 'Email', value: site.links.email, href: `mailto:${site.links.email}`, icon: Mail },
  {
    label: 'GitHub',
    value: 'navyaavidi8305-star',
    href: site.links.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Avidi Venkata Narasamma',
    href: site.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="container-shell py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl border border-accent/25 bg-gradient-to-br from-accent/25 via-white/[0.05] to-transparent font-display text-[11px] font-bold tracking-[0.1em] text-white">
                AVN
              </span>
              <span className="font-display text-sm font-semibold tracking-[0.04em] text-zinc-100">
                Avidi Venkata Narasamma
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-zinc-400">
              Final-year Computer Science Engineering student building practical, full-stack web
              applications. Open to internships, graduate trainee roles, and entry-level developer
              opportunities.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-button"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-button"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${site.links.email}`}
                className="icon-button"
                aria-label="Send an email"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Navigate
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Connect
            </h2>
            <ul className="mt-4 space-y-2.5">
              {connectLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer noopener' : undefined}
                      className="group inline-flex max-w-full items-center gap-2.5 text-[13px] text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      <Icon className="size-3.5 shrink-0 text-zinc-400 transition-colors group-hover:text-accent" aria-hidden="true" />
                      <span className="truncate">{link.value}</span>
                      <ArrowUpRight className="size-3 shrink-0 text-zinc-700 transition-colors group-hover:text-accent" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
            <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/80">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to opportunities
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Avidi Venkata Narasamma. All rights reserved.</p>
          <p className="order-3 sm:order-2">
            Designed &amp; built with React, Tailwind CSS, and Framer Motion.
          </p>
          <a
            href="#home"
            className="order-2 inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-accent sm:order-3"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
