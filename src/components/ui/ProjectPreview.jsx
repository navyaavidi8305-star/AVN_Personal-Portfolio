import { projectAccents } from '../../data/projects'

const chartBars = [38, 58, 46, 72, 54, 84, 64]

export default function ProjectPreview({ project }) {
  const accent = projectAccents[project.accent]

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#08060f]"
      aria-hidden="true"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.from} ${accent.via} to-transparent opacity-80`} />
      <div
        className="absolute -right-14 -top-20 size-56 rounded-full blur-3xl"
        style={{ backgroundColor: accent.glow }}
      />
      <div className="grid-line absolute inset-0 opacity-[0.18]" />

      <div className="absolute inset-x-5 inset-y-5 sm:inset-x-7 sm:inset-y-6">
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0a0813]/95 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.95)] backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
            <span className="size-2 rounded-full bg-rose-400/70" />
            <span className="size-2 rounded-full bg-amber-300/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
            <div className="ml-2 flex-1 rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1">
              <span className="font-mono text-[8px] tracking-wide text-white/35">
                {project.id}.app
              </span>
            </div>
          </div>

          <div className="flex min-h-0 flex-1">
            <div className="hidden w-[22%] flex-col gap-2.5 border-r border-white/[0.05] p-3 sm:flex">
              <div className="flex items-center gap-1.5">
                <span className={`size-4 rounded-md bg-gradient-to-br ${accent.from} to-white/10 ring-1 ring-white/10`} />
                <span className="h-1.5 w-8 rounded-full bg-white/25" />
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/15" />
              <div className="h-1 w-3/4 rounded-full bg-white/10" />
              <div className="h-1 w-5/6 rounded-full bg-white/10" />
              <div className="h-1 w-2/3 rounded-full bg-white/10" />
              <div className="mt-auto h-1.5 w-10 rounded-full bg-white/10" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 p-3.5 sm:p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className={`truncate font-mono text-[7px] uppercase tracking-[0.22em] ${accent.text} sm:text-[8px]`}>
                    {project.category}
                  </p>
                  <p className="mt-1 truncate font-display text-xs font-semibold text-white/90 sm:text-sm">
                    {project.name}
                  </p>
                </div>
                <div className="flex gap-1">
                  <span className="h-5 w-10 rounded-md border border-white/[0.08] bg-white/[0.04]" />
                  <span className={`h-5 w-10 rounded-md bg-gradient-to-br ${accent.from} to-white/5 ring-1 ring-white/10`} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {[0, 1, 2].map((card) => (
                  <div
                    key={card}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-2"
                  >
                    <div className="h-1 w-8 rounded-full bg-white/15" />
                    <div className="mt-1.5 h-2 w-10 rounded-full bg-white/30" />
                    <div className="mt-1 h-1 w-6 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-end justify-between gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                <div className="flex h-12 flex-1 items-end gap-1">
                  {chartBars.map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className={`flex-1 rounded-sm bg-gradient-to-t ${accent.from} to-white/10`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="hidden shrink-0 sm:block">
                  <div className="ml-auto h-1 w-10 rounded-full bg-white/15" />
                  <div className="mt-1.5 ml-auto h-3 w-14 rounded-full bg-white/25" />
                  <div className="mt-1.5 ml-auto h-1 w-8 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-1.5 right-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
        Interface preview
      </span>
    </div>
  )
}
