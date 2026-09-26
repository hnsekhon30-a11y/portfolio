import { motion } from 'framer-motion'

/**
 * Shared scene wrapper: gives every section a consistent one-time reveal
 * as it scrolls into view, without stacking multiple competing animations.
 */
export default function Section({ id, className = '', children, label }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-body text-sm font-semibold tracking-wide text-coral"
        >
          {label}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
