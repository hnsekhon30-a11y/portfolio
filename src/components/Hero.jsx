import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GilModel from './GilModel.jsx'
import FloatingSticker from './FloatingSticker.jsx'
import { profile, floatingLabels } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-6 pt-24 md:pt-0"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-mint/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 font-body text-sm font-semibold tracking-wide text-coral"
          >
            {profile.positioning}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
          >
            {profile.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 max-w-md font-body text-lg text-paper/70"
          >
            {profile.heroLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-cursor="GO"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-coral px-7 py-3.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              {profile.cta}
            </button>
            <button
              data-cursor="VIEW"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-paper transition-colors hover:bg-white/10"
            >
              {profile.secondaryCta}
            </button>
          </motion.div>
        </div>

        {/* Gil stage */}
        <div className="relative mx-auto h-[360px] w-[360px] sm:h-[440px] sm:w-[440px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-0"
            data-cursor="MEET GIL"
          >
            <GilModel className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]" />
          </motion.div>

          {floatingLabels.map((label, i) => (
            <FloatingSticker
              key={label}
              label={label}
              delay={i * 0.4}
              rotate={i % 2 === 0 ? -6 : 5}
              className={POSITIONS[i % POSITIONS.length]}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  )
}

const POSITIONS = [
  '-top-2 left-0',
  'top-6 right-0',
  'top-1/2 -left-4',
  'bottom-10 -right-6',
  'bottom-0 left-4',
  'top-1/3 right-1/4',
]
