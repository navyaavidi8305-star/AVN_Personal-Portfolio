import { useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { site } from '../../data/site'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import Reveal from '../ui/Reveal'
import ResumeButton from '../ui/ResumeButton'
import SectionHeading from '../ui/SectionHeading'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validateForm(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Please add a subject (at least 3 characters).'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.'
  }

  return errors
}

const contactChannels = [
  {
    label: 'Email',
    value: site.links.email,
    href: `mailto:${site.links.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/avidi-venkata-narasamma-7a6166369',
    href: site.links.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/navyaavidi8305-star',
    href: site.links.github,
    icon: GithubIcon,
    external: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/[0.025] px-3.5 py-2.5 text-[13.5px] text-zinc-100 placeholder:text-zinc-400 transition-colors focus:border-accent/50 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/20 ${
      errors[field] ? 'border-rose-500/50' : 'border-white/10 hover:border-white/20'
    }`

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: '' }))
    }

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' })
    }
  }

  const handleBlur = (event) => {
    const fieldErrors = validateForm(form)
    const { name } = event.target
    setErrors((previous) => ({ ...previous, [name]: fieldErrors[name] ?? '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validateForm(form)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({
        type: 'error',
        message: 'Please review the highlighted fields and try again.',
      })
      const firstInvalidField = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstInvalidField}`)?.focus()
      return
    }

    const endpoint = site.contactEndpoint?.trim()

    if (!endpoint) {
      const subject = encodeURIComponent(form.subject.trim())
      const body = encodeURIComponent(
        `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
      )
      window.location.href = `mailto:${site.links.email}?subject=${subject}&body=${body}`
      setStatus({
        type: 'info',
        message: `Your email app is opening with the message prefilled. If it doesn't open, email me directly at ${site.links.email}.`,
      })
      return
    }

    setStatus({ type: 'submitting', message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setForm(initialForm)
      setErrors({})
      setStatus({
        type: 'success',
        message: 'Message sent successfully — thank you! I will get back to you soon.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: `Something went wrong while sending. Please email me directly at ${site.links.email}.`,
      })
    }
  }

  const statusStyles = {
    success: 'border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200',
    error: 'border-rose-400/25 bg-rose-400/[0.07] text-rose-200',
    info: 'border-accent/25 bg-accent/[0.07] text-accent-soft',
  }

  const StatusIcon =
    status.type === 'success' ? CheckCircle2 : status.type === 'error' ? AlertCircle : Info

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow="07 — Contact"
              title="Let's build something meaningful together."
              description="I'm open to software engineering internships, graduate trainee roles, and entry-level developer opportunities. Whether you have a role, a project, or a question, my inbox is open."
            />

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-3">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noreferrer noopener' : undefined}
                      className="surface surface-hover group flex items-center gap-4 rounded-2xl p-4"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <Icon className="size-[18px]" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                          {channel.label}
                        </span>
                        <span className="mt-1 block truncate text-[13px] text-zinc-200">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-zinc-400 transition-colors group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  )
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5">
                <p className="inline-flex items-center gap-2 text-[12px] text-zinc-400">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  {site.location}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-200/90">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Available for opportunities
                </span>
              </div>

              <ResumeButton className="btn-secondary mt-4">Download Resume</ResumeButton>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="surface relative overflow-hidden rounded-2xl p-5 sm:p-7">
              <div
                className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full bg-accent/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="font-display text-lg font-semibold text-zinc-100">
                  Send a message
                </h3>
                <p className="mt-1.5 text-[12.5px] text-zinc-400">
                  Share a few details and I&apos;ll reply as soon as I can.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-[12px] font-medium text-zinc-300"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={fieldClass('name')}
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-1.5 text-[11px] text-rose-300">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-[12px] font-medium text-zinc-300"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={fieldClass('email')}
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-1.5 text-[11px] text-rose-300">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-[12px] font-medium text-zinc-300"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Internship opportunity, project, or question"
                      required
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={fieldClass('subject')}
                    />
                    {errors.subject ? (
                      <p id="contact-subject-error" className="mt-1.5 text-[11px] text-rose-300">
                        {errors.subject}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-[12px] font-medium text-zinc-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me a little about the opportunity or project..."
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`${fieldClass('message')} resize-y`}
                    />
                    {errors.message ? (
                      <p id="contact-message-error" className="mt-1.5 text-[11px] text-rose-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] size-px opacity-0"
                  />

                  <button
                    type="submit"
                    disabled={status.type === 'submitting'}
                    className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status.type === 'submitting' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        Send message
                      </>
                    )}
                  </button>

                  {status.type !== 'idle' && status.type !== 'submitting' ? (
                    <div
                      role={status.type === 'error' ? 'alert' : 'status'}
                      aria-live="polite"
                      className={`mt-4 flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-[12px] leading-relaxed ${statusStyles[status.type]}`}
                    >
                      <StatusIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <p>{status.message}</p>
                    </div>
                  ) : null}

                  <p className="mt-3 text-center text-[10.5px] leading-relaxed text-zinc-400">
                    You can also email directly at{' '}
                    <a
                      href={`mailto:${site.links.email}`}
                      className="text-zinc-400 underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent"
                    >
                      {site.links.email}
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
