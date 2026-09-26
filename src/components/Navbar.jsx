import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: floating pill nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="fixed left-1/2 top-6 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-ink2/70 px-2 py-2 backdrop-blur-md md:flex"
        aria-label="Primary"
      >
        {LINKS.map((l) => (
          <button
            key={l.id}
            data-cursor="GO"
            onClick={() => scrollTo(l.id)}
            className="rounded-full px-4 py-2 font-body text-xs font-semibold tracking-wide text-paper/70 transition-colors hover:bg-white/10 hover:text-paper"
          >
            {l.label}
          </button>
        ))}
      </motion.nav>

      {/* Mobile: top bar + slide menu */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:hidden">
        <span className="font-display text-lg font-semibold text-paper">Noor</span>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-full border border-white/15 bg-ink2/80 p-2 text-paper backdrop-blur-md"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => {
                    setOpen(false)
                    scrollTo(l.id)
                  }}
                  className="font-display text-3xl font-medium text-paper"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
