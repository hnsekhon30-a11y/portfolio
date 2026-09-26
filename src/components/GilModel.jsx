import { useEffect, useRef } from 'react'

/**
 * Renders Gil, the 3D mascot (public/gil.glb), using the <model-viewer>
 * web component (loaded via CDN script in index.html). This keeps Gil
 * exactly as provided — no redesigning, just staging, lighting and motion.
 */
export default function GilModel({
  className = '',
  autoRotate = true,
  cameraControls = false,
  exposure = 1.05,
  poster,
  ariaLabel = 'Gil, the 3D mascot',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Nudge the camera to a flattering default framing once the model loads.
    const onLoad = () => {
      try {
        el.cameraOrbit = '0deg 78deg 105%'
      } catch (e) {
        /* model-viewer not ready yet, ignore */
      }
    }
    el.addEventListener('load', onLoad)
    return () => el.removeEventListener('load', onLoad)
  }, [])

  return (
    <model-viewer
      ref={ref}
      className={className}
      src="/gil.glb"
      alt={ariaLabel}
      camera-controls={cameraControls ? '' : undefined}
      disable-zoom
      auto-rotate={autoRotate ? '' : undefined}
      rotation-per-second="18deg"
      interaction-prompt="none"
      shadow-intensity="0.9"
      exposure={exposure}
      environment-image="neutral"
      loading="eager"
      reveal="auto"
      style={{ backgroundColor: 'transparent' }}
    />
  )
}
