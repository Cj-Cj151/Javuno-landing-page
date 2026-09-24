import { useState } from 'react'
import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Button from './ui/Button.jsx'

const thenActions = ['Assign reviewer', 'Notify team', 'Set deadline', 'Add label', 'Update project']

export default function AutomationSection() {
  const [runStep, setRunStep] = useState(-1)

  const run = () => {
    setRunStep(0)
    setTimeout(() => setRunStep(1), 500)
    setTimeout(() => setRunStep(2), 1000)
    setTimeout(() => setRunStep(-1), 2600)
  }

  const stepClass = (i) =>
    runStep === i
      ? 'border-brand bg-brand/10 ring-1 ring-brand/40'
      : 'border-linedark bg-white/5'

  return (
    <section className="bg-navy py-24 text-white">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow tone="dark">AUTOMATION</Eyebrow>
          <h2 className="text-[26px] font-bold leading-[1.16] text-white sm:text-[38px]">
            Stop spending time on work your workspace can handle.
          </h2>
          <p className="mt-6 mb-7 text-base leading-[1.75] text-graycool">
            Build workflows that automatically respond to changes in your workspace — no scripts,
            no engineering ticket required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#pricing" variant="white">
              Explore Automation →
            </Button>
            <Button as="button" variant="ghostDark" onClick={run}>
              Run example ▶
            </Button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className={`rounded-[14px] border p-5 transition-colors duration-300 ${stepClass(0)}`}>
            <div className="mb-1.5 text-[11px] font-bold tracking-wide text-accent-soft">WHEN</div>
            <div className="text-[15px] font-semibold text-white">Task moves to Review</div>
          </div>
          <div className="mx-auto h-6 w-0.5 bg-gradient-to-b from-accent-soft to-transparent" />
          <div className={`rounded-[14px] border p-5 transition-colors duration-300 ${stepClass(1)}`}>
            <div className="mb-1.5 text-[11px] font-bold tracking-wide text-accent-soft">IF</div>
            <div className="text-[15px] font-semibold text-white">Priority = High</div>
          </div>
          <div className="mx-auto h-6 w-0.5 bg-gradient-to-b from-accent-soft to-transparent" />
          <div className={`rounded-[14px] border p-5 transition-colors duration-300 ${stepClass(2)}`}>
            <div className="mb-1.5 text-[11px] font-bold tracking-wide text-accent-soft">THEN</div>
            <div className="flex flex-wrap gap-2">
              {thenActions.map((a) => (
                <span key={a} className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs text-graycool">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
