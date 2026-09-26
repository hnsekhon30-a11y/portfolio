import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = ['Initializing Gil.exe', "Loading Noor's digital world"]

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [line] = useState(() => LINES[Math.floor(Math.random() * LINES.length)])

  useEffect(() => {
    const start = performance.now()
    const duration = 1400
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setProgress(p)
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 200)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 h-16 w-16 rounded-full border-2 border-coral"
            style={{
              borderTopColor: 'transparent',
              animation: 'spin 0.9s linear infinite',
            }}
          />
          <p className="font-body text-sm tracking-[0.2em] text-paper/70">
            {line}
            <span className="inline-block w-8 text-left">
              {'.'.repeat(1 + Math.floor(progress * 3))}
            </span>
          </p>
          <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-coral"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
