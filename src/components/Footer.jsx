import { social } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-body text-xs text-paper/40">
          Built with curiosity + caffeine + AI.
        </p>
        <p className="font-body text-xs text-paper/40">
          © 2026 Noor · <a href={`mailto:${social.email}`} className="hover:text-paper/70">{social.email}</a>
        </p>
      </div>
    </footer>
  )
}
