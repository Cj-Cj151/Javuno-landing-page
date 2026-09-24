import { useState } from 'react'
import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Button from './ui/Button.jsx'
import { aiPrompts, aiResponses } from '../data/siteData.js'

const sources = ['Projects', 'Tasks', 'Documents', 'Comments', 'Goals', 'Reports']

export default function AISection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="ai" className="bg-navy py-24 text-white">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow tone="dark">JAVUNO AI</Eyebrow>
          <h2 className="mb-4 text-[26px] font-bold leading-[1.16] text-white sm:text-[38px]">
            Your workspace, with intelligence built in.
          </h2>
          <p className="mb-6 text-base leading-[1.65] text-graycool">
            JAVUNO AI helps your team find information, understand progress, create work, and
            organize knowledge using context from your connected workspace.
          </p>

          <div className="flex flex-col gap-2.5">
            {aiPrompts.map((p) => (
              <button
                key={p}
                onClick={() => setSelected(p)}
                className={`flex items-center gap-2.5 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                  selected === p
                    ? 'border-accent bg-accent/10 text-white'
                    : 'border-linedark bg-midnight text-graycool hover:border-accent'
                }`}
              >
                <span className="text-accent">✦</span> {p}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-4 animate-[fadeIn_.3s_ease] rounded-xl border border-linedark bg-midnight p-4 text-sm leading-relaxed text-white">
              <span className="mb-1 block text-xs font-semibold text-accent-soft">JAVUNO AI</span>
              {aiResponses[selected]}
            </div>
          )}

          <Button href="#pricing" variant="ghostDark" className="mt-6">
            Explore JAVUNO AI →
          </Button>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#7C3AED,#4338CA_70%)] text-[34px] text-white shadow-[0_20px_50px_-14px_rgba(124,58,237,.45)]">
            ✦
          </div>
          <div className="flex max-w-[340px] flex-wrap justify-center gap-2">
            {sources.map((s) => (
              <span key={s} className="rounded-full bg-accent/15 px-3 py-1.5 text-[12.5px] font-semibold text-accent-soft">
                {s}
              </span>
            ))}
          </div>
          <div className="text-center font-display text-xl font-semibold text-white">
            Search. Understand. Create. Organize. Act.
          </div>
        </div>
      </Container>
    </section>
  )
}
