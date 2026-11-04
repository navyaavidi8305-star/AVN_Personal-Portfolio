import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, id, className = '' }) {
  return (
    <Reveal className={className}>
      <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
        <span className="h-px w-7 bg-accent/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
