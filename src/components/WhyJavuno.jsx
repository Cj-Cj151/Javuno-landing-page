import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { whyJavuno } from '../data/siteData.js'

export default function WhyJavuno() {
  return (
    <section className="bg-[#F5F6FE] py-24">
      <Container>
        <SectionHeading eyebrow="WHY JAVUNO" title="Built around the entire work lifecycle." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyJavuno.map((item) => (
            <div key={item.title} className="rounded-2xl border border-linelight bg-white p-6">
              <h4 className="mb-2 text-base font-bold text-navy">{item.title}</h4>
              <p className="text-sm leading-relaxed text-inksoft">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
