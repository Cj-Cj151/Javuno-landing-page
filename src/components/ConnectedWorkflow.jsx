import { useState } from 'react'
import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { lifecycleStages } from '../data/siteData.js'

export default function ConnectedWorkflow() {
  const [active, setActive] = useState(0)
  const stage = lifecycleStages[active]

  return (
    <section id="lifecycle" className="bg-navy py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="FROM IDEA TO OUTCOME"
          title="From the first idea to the final result."
          subtitle="Your work already moves through these stages. JAVUNO makes the path visible, end to end."
        />

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {lifecycleStages.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              className={`flex-none rounded-full border px-[18px] py-2.5 text-sm font-semibold transition-all ${
                i === active
                  ? 'border-brand bg-brand text-white shadow-[0_6px_16px_-6px_rgba(79,70,229,.5)]'
                  : 'border-linedark bg-midnight text-graycool hover:border-brand'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-12 rounded-[22px] border border-linedark bg-midnight p-8 sm:p-11 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-2 font-display text-[13px] font-bold text-accent-soft">
              STAGE {active + 1} OF {lifecycleStages.length}
            </div>
            <h3 className="mb-3.5 text-2xl font-bold text-white sm:text-[26px]">{stage.label}</h3>
            <p className="text-base leading-[1.7] text-graycool">{stage.body}</p>
          </div>
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl bg-brand/10 p-6">
            <div className="text-[52px]">{stage.icon}</div>
          </div>
        </div>

        <div className="mt-9 text-center font-display text-xl font-semibold text-white sm:text-[22px]">
          Your work has a flow. JAVUNO makes it visible.
        </div>
      </Container>
    </section>
  )
}
