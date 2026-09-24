import { useState } from 'react'
import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { teamSolutions } from '../data/siteData.js'
import { ArrowRight } from 'lucide-react'

export default function TeamSolutions() {
  const [active, setActive] = useState(teamSolutions[0].key)
  const team = teamSolutions.find((t) => t.key === active)

  return (
    <section id="solutions" className="py-24">
      <Container>
        <SectionHeading eyebrow="SOLUTIONS" title="One platform. Different ways of working." />

        <div className="mb-8 flex flex-wrap gap-2">
          {teamSolutions.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-[9px] border px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
                active === t.key
                  ? 'border-accent-soft bg-[#EEF0FE] text-brand-deep'
                  : 'border-linelight bg-white text-inksoft hover:border-brand'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-0 rounded-[22px] border border-linelight bg-white p-6 shadow-card sm:p-9">
          {team.flow.map((node, i) => (
            <div key={node} className="flex items-center">
              <div className="rounded-[10px] bg-[#F5F6FE] px-[18px] py-3 text-[13px] font-semibold text-navy sm:text-sm">
                {node}
              </div>
              {i < team.flow.length - 1 && <ArrowRight size={16} className="mx-2.5 flex-none text-inksoft" />}
            </div>
          ))}
        </div>
        <div className="mt-4 text-[14.5px] text-inksoft">{team.caption}</div>
      </Container>
    </section>
  )
}
