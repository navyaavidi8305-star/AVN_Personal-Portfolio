import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, FileWarning, X } from 'lucide-react'
import { site } from '../../data/site'
import { useResumeStatus } from '../../hooks/useResumeStatus'

function ResumeDialog({ onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close resume dialog"
        tabIndex={-1}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-dialog-title"
        className="surface relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <FileWarning className="size-5" aria-hidden="true" />
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="icon-button"
            aria-label="Close dialog"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <h2 id="resume-dialog-title" className="mt-5 text-lg font-semibold">
          Resume isn&apos;t available yet
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          The download file hasn&apos;t been added to this build. Place your PDF at{' '}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-accent">
            public/resume.pdf
          </code>{' '}
          and rebuild or redeploy the site.
        </p>
        <button type="button" onClick={onClose} className="btn-secondary mt-6 w-full">
          Close
        </button>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

export default function ResumeButton({ className = 'btn-secondary', children, onClick }) {
  const status = useResumeStatus(site.resumePath)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  if (status === 'missing') {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className={className}
          aria-haspopup="dialog"
        >
          {children ?? (
            <>
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </>
          )}
        </button>
        <AnimatePresence>
          {isDialogOpen ? <ResumeDialog onClose={() => setIsDialogOpen(false)} /> : null}
        </AnimatePresence>
      </>
    )
  }

  return (
    <a
      href={site.resumePath}
      download="AVN-Resume.pdf"
      className={className}
      onClick={onClick}
    >
      {children ?? (
        <>
          <Download className="size-4" aria-hidden="true" />
          Download Resume
        </>
      )}
    </a>
  )
}
