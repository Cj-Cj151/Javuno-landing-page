import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { ShieldCheck, Users, UserCheck, History, FileClock, Settings } from 'lucide-react'
import { securityFeatures } from '../data/siteData.js'

const icons = [Users, ShieldCheck, UserCheck, History, FileClock, Settings]

export default function Security() {
  return (
    <section className="bg-[#F5F6FE] py-16">
      <Container>
        <SectionHeading eyebrow="SECURITY" title="Professional work deserves professional controls." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((f, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={f.title} className="rounded-2xl border border-linelight bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#EEF0FE] text-brand-deep">
                  <Icon size={18} />
                </div>
                <h4 className="mb-1.5 text-[15px] font-bold text-navy">{f.title}</h4>
                <p className="text-[13.5px] leading-relaxed text-inksoft">{f.desc}</p>
              </div>
            )
          })}
        </div>
        <p className="mt-5 text-xs italic text-inksoft">
          Security capabilities shown reflect planned platform controls, not certifications that
          have been independently verified.
        </p>
      </Container>
    </section>
  )
}
