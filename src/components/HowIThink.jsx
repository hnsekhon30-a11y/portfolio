import { motion } from 'framer-motion'
import Section from './Section.jsx'

const STEPS = ['Messy data', 'SQL / Python', 'Analysis', 'Visualization', 'Business decision']

export default function HowIThink() {
  return (
    <Section label="How I think">
      <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
        Data → insight → action.
      </h2>
      <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <span className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 font-body text-sm text-paper/80">
              {step}
            </span>
            {i < STEPS.length - 1 && (
              <span className="hidden text-paper/25 sm:inline" aria-hidden="true">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
