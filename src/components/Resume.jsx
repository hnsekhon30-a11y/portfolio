import { Download, Eye } from 'lucide-react'
import Section from './Section.jsx'

export default function Resume() {
  return (
    <Section label="Resume">
      <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-medium text-paper sm:text-3xl">
            Want the serious version?
          </h2>
          <p className="mt-2 max-w-sm font-body text-sm text-paper/60">
            Everything above, minus Gil, plus dates.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-cursor="VIEW"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-body text-sm font-semibold text-paper hover:bg-white/10"
          >
            <Eye size={16} /> View resume
          </a>
          <a
            href="/resume.pdf"
            download
            data-cursor="GET"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-body text-sm font-semibold text-ink"
          >
            <Download size={16} /> Download resume
          </a>
        </div>
      </div>
    </Section>
  )
}
