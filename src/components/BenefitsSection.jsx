import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { benefits } from '../data/siteData.js'

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="What changes when your work is connected?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="border-t-2 border-brand px-1 py-6">
              <h4 className="mb-2 text-[17px] font-bold text-navy">{b.title}</h4>
              <p className="text-[14.5px] text-inksoft">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
