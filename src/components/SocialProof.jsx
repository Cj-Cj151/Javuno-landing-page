import Container from './ui/Container.jsx'
import { socialProofMetrics } from '../data/siteData.js'

const demoLogos = ['Vertex', 'Northfield', 'Brightline', 'Halyard', 'Cordant']

export default function SocialProof() {
  return (
    <section className="border-y border-linelight bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-10 py-9">
          <div className="max-w-[180px] text-[13px] font-semibold leading-tight text-inksoft">
            BUILT FOR TEAMS THAT WANT TO MOVE WITH CLARITY
          </div>
          <div className="flex flex-wrap items-center gap-8 font-display text-base font-bold text-inksoft opacity-55">
            {demoLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-linelight">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {socialProofMetrics.map((m, i) => (
              <div
                key={m.label}
                className={`border-b border-linelight py-7 px-6 sm:border-b-0 ${
                  i < socialProofMetrics.length - 1 ? 'sm:border-r sm:border-linelight' : ''
                }`}
              >
                <div className="font-display text-[32px] font-bold text-brand-deep">{m.value}</div>
                <div className="mt-1.5 text-xs font-semibold text-inksoft">{m.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <p className="px-5 py-3 text-center text-xs italic text-inksoft">
        Example workspace metrics — company names and figures are illustrative prototype data, not
        verified JAVUNO statistics.
      </p>
    </section>
  )
}
