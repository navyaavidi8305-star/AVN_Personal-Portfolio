import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import ResumeButton from '../ui/ResumeButton'

function BrandMark({ onNavigate }) {
  return (
    <a
      href="#home"
      onClick={onNavigate}
      className="group flex items-center gap-2.5 rounded-full"
    >
      <span className="flex size-9 items-center justify-center rounded-xl border border-accent/25 bg-gradient-to-br from-accent/25 via-white/[0.05] to-transparent font-display text-[11px] font-bold tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors group-hover:border-accent/50">
        AVN
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="whitespace-nowrap font-display text-[11.5px] font-semibold tracking-[0.04em] text-zinc-100 xl:text-[12.5px]">
          Avidi Venkata Narasamma
        </span>
        <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 xl:text-[9px]">
          Software Developer
        </span>
      </span>
    </a>
  )
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
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
    </div>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const activeSection = useActiveSection()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setIsMenuOpen((open) => {
        if (open) menuButtonRef.current?.focus()
        return false
      })
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-white/[0.06] bg-void/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-shell flex h-[4.5rem] items-center justify-between gap-4">
        <BrandMark onNavigate={closeMenu} />

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {isActive && !shouldReduceMotion ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-accent/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    {isActive && shouldReduceMotion ? (
                      <span className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-accent/10" />
                    ) : null}
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ResumeButton className="btn-secondary hidden px-4 py-2 text-[13px] sm:inline-flex" />
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="max-h-[calc(100svh-4.5rem)] overflow-y-auto lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav
              aria-label="Mobile navigation"
              className="container-shell pb-5 pt-1"
            >
              <div className="surface overflow-hidden rounded-2xl p-3">
                <ul className="flex flex-col">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={closeMenu}
                          aria-current={isActive ? 'page' : undefined}
                          className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] transition-colors ${
                            isActive
                              ? 'bg-accent/10 text-white'
                              : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-[10px] text-zinc-400">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            {item.label}
                          </span>
                          <span
                            className={`size-1.5 rounded-full ${
                              isActive ? 'bg-accent' : 'bg-transparent'
                            }`}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-3 flex items-center gap-2 border-t border-white/[0.07] px-1 pt-3">
                  <ResumeButton
                    className="btn-primary flex-1 py-2.5 text-[13px]"
                    onClick={closeMenu}
                  />
                  <SocialLinks />
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
