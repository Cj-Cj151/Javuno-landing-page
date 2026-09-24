import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { featureGroups } from '../data/siteData.js'

export default function FeatureSection() {
  return (
    <section id="features" className="py-24">
      <Container>
        <SectionHeading eyebrow="EVERYTHING YOUR TEAM NEEDS" title="Everything your team needs to execute." />
      </Container>

      <div className="flex flex-col">
        {featureGroups.map((group, i) => (
          <div
            key={group.label}
            className={`border-t border-linelight py-10 ${i === featureGroups.length - 1 ? 'border-b' : ''} ${
              i % 2 === 1 ? 'bg-[#F5F6FE]' : ''
            }`}
          >
            <Container>
              <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                <div className="font-display text-lg font-bold text-brand-deep">{group.label}</div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <h5 className="mb-1.5 text-[15px] font-bold text-navy">{item.name}</h5>
                      <p className="text-[13.5px] leading-[1.55] text-inksoft">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  )
}
