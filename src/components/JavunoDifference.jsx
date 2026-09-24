import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import useReveal from '../hooks/useReveal.js'
import { Eye, ArrowRight, TrendingUp } from 'lucide-react'

const panels = [
  {
    icon: Eye,
    tag: 'SEE THE WHOLE PICTURE',
    title: 'Every layer of work, connected',
    desc: 'Connect goals, projects, tasks, people, documents, and results — so nothing lives in isolation.',
  },
  {
    icon: ArrowRight,
    tag: 'KNOW WHAT HAPPENS NEXT',
    title: "Ownership that's never in doubt",
    desc: 'Clear ownership, deadlines, dependencies, workflows, and automation keep every next step visible.',
  },
  {
    icon: TrendingUp,
    tag: 'TURN ACTIVITY INTO INSIGHT',
    title: 'Understand, not just track',
    desc: 'Understand project health, team workload, progress, and outcomes as work happens — not after.',
  },
]

function Panel({ icon: Icon, tag, title, desc }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-[22px] border border-linedark bg-midnight p-8">
      <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-brand/15 text-accent-soft">
        <Icon size={22} />
      </div>
      <div className="mb-4 font-display text-[13px] font-bold text-brand-deep">{tag}</div>
      <h3 className="mb-2.5 text-xl font-bold text-white">{title}</h3>
      <p className="text-[15px] leading-[1.6] text-graycool">{desc}</p>
    </div>
  )
}

export default function JavunoDifference() {
  return (
    <section id="difference" className="bg-navy py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="THE JAVUNO DIFFERENCE"
          title="Meet the workspace built around how work actually moves."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {panels.map((p) => (
            <Panel key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
