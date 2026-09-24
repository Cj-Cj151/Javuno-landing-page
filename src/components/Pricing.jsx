import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import { pricingPlans } from '../data/siteData.js'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container>
        <SectionHeading eyebrow="PRICING" title="Start with the plan that fits your team." center />

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[22px] border bg-white p-7 ${
                plan.highlight ? 'border-brand shadow-pop' : 'border-linelight'
              }`}
            >
              {plan.flag && (
                <span className="absolute -top-3.5 left-6 rounded-full bg-brand px-2.5 py-1 text-[11.5px] font-bold text-white">
                  {plan.flag}
                </span>
              )}
              <h4 className="text-lg font-bold text-navy">{plan.name}</h4>
              <div className="mt-3.5 font-display text-[28px] font-bold text-navy">
                {plan.price}
                {plan.priceNote && <small className="text-sm font-medium text-inksoft"> {plan.priceNote}</small>}
              </div>
              <div className="mb-[18px] mt-1 text-[13.5px] text-inksoft">{plan.desc}</div>
              <ul className="mb-6 flex flex-1 flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13.5px] text-inksoft">
                    <Check size={15} className="mt-0.5 flex-none text-success" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="#" variant={plan.highlight ? 'primary' : 'ghost'}>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[13px] text-inksoft">
          Team and Business pricing to be confirmed before launch.
        </p>
      </Container>
    </section>
  )
}
