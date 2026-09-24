import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import { integrationCategories } from '../data/siteData.js'

export default function Integrations() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="Your work shouldn't have to start from scratch."
          subtitle="Presented here as visual/demo integrations — functional connections are rolled out separately."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrationCategories.map((cat) => (
            <div key={cat.category} className="rounded-2xl border border-linelight p-5">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-inksoft">{cat.category}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-linelight bg-[#F8FAFC] px-3 py-1.5 text-[13px] font-semibold text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <Button href="#pricing" variant="ghost">
            Explore Integrations →
          </Button>
        </div>
      </Container>
    </section>
  )
}
