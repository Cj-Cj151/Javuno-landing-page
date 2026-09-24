import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { testimonials } from '../data/siteData.js'

export default function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Teams should spend less time managing work and more time doing it." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name + t.role} className="rounded-2xl border border-linelight bg-white p-6 shadow-card">
              <p className="text-[15.5px] leading-relaxed text-navy">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-[18px] text-[13.5px] font-bold text-navy">{t.name}</div>
              <div className="text-xs text-inksoft">{t.role}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs italic text-inksoft">
          Sample testimonials for prototype presentation — to be replaced with verified customer
          testimonials before launch.
        </p>
      </Container>
    </section>
  )
}
