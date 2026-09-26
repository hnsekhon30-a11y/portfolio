import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [label, setLabel] = useState('')
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(touch)
    if (touch) return

    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const over = (e) => {
      const target = e.target.closest('[data-cursor]')
      setLabel(target ? target.getAttribute('data-cursor') : '')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-150 ease-out"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-coral/70 bg-coral/10 backdrop-blur-sm transition-all duration-150 ease-out ${
          label ? 'h-16 w-16' : 'h-3 w-3'
        }`}
      >
        {label && (
          <span className="font-body text-[10px] font-semibold tracking-wide text-paper">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
