import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-ink/95 p-4 backdrop-blur-md sm:items-center sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-3xl rounded-3xl border border-white/10 bg-ink2 p-8 sm:p-10"
          >
            <button
              data-cursor="CLOSE"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-6 top-6 rounded-full border border-white/15 p-2 text-paper/70 hover:text-paper"
            >
              <X size={18} />
            </button>

            <div
              className="mb-6 h-2 w-16 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-paper/40">
              Project
            </p>
            <h3 className="mt-2 font-display text-3xl font-medium text-paper sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 font-body text-paper/60">{project.tagline}</p>

            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-paper/70">
              {project.description}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field title="Problem" value={project.problem} />
              <Field title="Solution" value={project.solution} />
              <Field title="Technology" value={project.technology} />
              <Field title="My role" value={project.role} />
              <Field title="Result" value={project.result} />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 font-body text-xs text-paper/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-coral px-6 py-3 font-body text-sm font-semibold text-ink"
              >
                View live <ArrowUpRight size={15} />
              </a>
            ) : (
              <p className="mt-8 font-body text-xs text-paper/30">
                Add a live link in src/data/projects.js
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ title, value }) {
  return (
    <div>
      <p className="font-body text-xs font-semibold uppercase tracking-wide text-paper/40">
        {title}
      </p>
      <p className="mt-1 font-body text-sm text-paper/70">{value}</p>
    </div>
  )
}
