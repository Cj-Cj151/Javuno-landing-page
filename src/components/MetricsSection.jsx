import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import { metrics } from '../data/siteData.js'

const toneClass = {
  success: 'text-success',
  warning: 'text-warning',
  brand: 'text-brand-deep',
  default: 'text-navy',
}

export default function MetricsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading eyebrow="OUTCOMES" title="Measure the work. Improve the outcome." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-linelight p-5">
              <div className={`font-display text-2xl font-bold sm:text-[28px] ${toneClass[m.tone]}`}>{m.value}</div>
              <div className="mt-1.5 text-xs font-semibold text-inksoft">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs italic text-inksoft">
          Example workspace metrics — to be replaced with verified product and customer data.
        </p>
        <div className="mt-6">
          <Button href="#pricing" variant="ghost">
            Explore Reports →
          </Button>
        </div>
      </Container>
    </section>
  )
}
