import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import Section from './Section.jsx'
import GilModel from './GilModel.jsx'
import { social } from '../data/content.js'

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
            Let's build something intelligent.
          </h2>
          <p className="mt-5 max-w-sm font-body text-paper/60">
            Open to opportunities in AI, data and analytics. Say hello.
          </p>

          <a
            href={`mailto:${social.email}`}
            data-cursor="SAY HI"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Say hello <Mail size={16} />
          </a>

          {social.phone && (
            <p className="mt-4 font-body text-sm text-paper/40">{social.phone}</p>
          )}

          <div className="mt-8 flex gap-4">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 p-3 text-paper/70 hover:text-paper"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="OPEN"
              aria-label="GitHub"
              className="rounded-full border border-white/15 p-3 text-paper/70 hover:text-paper"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto h-64 w-64"
        >
          <GilModel className="h-full w-full" />
        </motion.div>
      </div>
    </Section>
  )
}
