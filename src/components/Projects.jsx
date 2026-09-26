import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import ProjectModal from './ProjectModal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="work" label="Work">
      <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
        Things I've built.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            data-cursor="OPEN"
            onClick={() => setSelected(p)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-left"
          >
            <div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
              style={{ backgroundColor: p.accent }}
            />
            <div className="flex items-start justify-between">
              <p className="font-display text-xl font-medium text-paper sm:text-2xl">
                {p.title}
              </p>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-paper/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-paper"
              />
            </div>
            <p className="mt-2 font-body text-sm text-paper/60">{p.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-1 font-body text-[11px] text-paper/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
