import { motion } from 'framer-motion'
import Section from './Section.jsx'
import GilModel from './GilModel.jsx'
import { profile } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
            Biotech instincts, pointed at data.
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-paper/70">
            {profile.about}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl font-medium text-coral">{s.value}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-wide text-paper/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            {profile.education.map((e) => (
              <div key={e.degree} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/10 pt-3">
                <p className="font-body text-sm font-semibold text-paper">{e.degree}</p>
                <p className="font-body text-sm text-paper/50">{e.school}</p>
                {e.period && <p className="font-body text-xs text-paper/30">{e.period}</p>}
              </div>
            ))}
          </div>

          {profile.certifications?.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-wide text-paper/40">
                Certifications
              </p>
              <div className="space-y-2">
                {profile.certifications.map((c) => (
                  <p key={c.name} className="font-body text-sm text-paper/60">
                    {c.name} <span className="text-paper/30">— {c.issuer}{c.period ? `, ${c.period}` : ''}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative md:col-span-2"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink2/60 p-6">
            <p className="font-body text-xs uppercase tracking-wide text-paper/40">Profile</p>
            <div className="relative mx-auto mt-4 h-52 w-52">
              <GilModel className="h-full w-full" autoRotate />
            </div>
            <p className="mt-4 text-center font-display text-lg text-paper">Gil says hi.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
