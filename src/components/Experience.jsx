import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="experience" label="Experience">
      <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
        Where the work happened.
      </h2>

      <div className="relative mt-14 border-l border-white/10 pl-8">
        {experience.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.role} className="relative mb-10 last:mb-0">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                  isOpen ? 'bg-coral' : 'bg-white/30'
                }`}
                aria-hidden="true"
              />
              <button
                data-cursor="OPEN"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="text-left"
                aria-expanded={isOpen}
              >
                <p className="font-body text-xs font-semibold tracking-wide text-coral">
                  {item.year}
                </p>
                <p className="mt-1 font-display text-xl font-medium text-paper sm:text-2xl">
                  {item.role}
                </p>
                <p className="font-body text-sm text-paper/50">{item.org}</p>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-paper/60">
                  {item.summary}
                </p>
                <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-paper/40">
                  {item.details}
                </p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
