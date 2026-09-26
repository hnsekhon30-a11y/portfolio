import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { skillCategories } from '../data/skills.js'

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <Section id="skills" label="Skills">
      <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
        A small universe of tools.
      </h2>
      <p className="mt-3 max-w-md font-body text-paper/60">
        Hover a skill — Gil has thoughts.
      </p>

      <div className="mt-12 space-y-10">
        {skillCategories.map((cat) => (
          <div key={cat.name}>
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wide text-paper/40">
              {cat.name}
            </p>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => {
                const isActive = active === skill.name
                return (
                  <motion.button
                    key={skill.name}
                    data-cursor="VIEW"
                    onMouseEnter={() => setActive(skill.name)}
                    onMouseLeave={() => setActive((a) => (a === skill.name ? null : a))}
                    onFocus={() => setActive(skill.name)}
                    onBlur={() => setActive((a) => (a === skill.name ? null : a))}
                    layout
                    className={`rounded-2xl border px-5 py-3 text-left transition-colors ${
                      isActive
                        ? 'border-coral bg-coral/10'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                    }`}
                  >
                    <span className="font-body text-sm font-semibold text-paper">
                      {skill.name}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 6 : 0,
                      }}
                      className="block overflow-hidden font-body text-xs text-paper/50"
                    >
                      {skill.blurb}
                    </motion.span>
                  </motion.button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
