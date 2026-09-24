import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { LayoutGrid, List, Calendar, GitBranch, Users, BarChart3 } from 'lucide-react'

const views = [
  { icon: LayoutGrid, title: 'Board', desc: 'Visualize workflows the way your team already thinks about them.' },
  { icon: List, title: 'List', desc: 'Manage detailed work with fields, filters, and fast bulk edits.' },
  { icon: Calendar, title: 'Calendar', desc: 'Plan deadlines and schedules alongside meetings and milestones.' },
  { icon: GitBranch, title: 'Timeline', desc: 'Understand phases, dependencies, and delivery schedules at a glance.' },
  { icon: Users, title: 'Workload', desc: 'Understand team capacity before it becomes a bottleneck.' },
  { icon: BarChart3, title: 'Dashboard', desc: 'Understand performance across projects, teams, and goals.' },
]

export default function WorkViews() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="One piece of work. Every view you need."
          subtitle="Different views. Same work. One source of truth."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {views.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-linelight bg-white p-[22px] transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#EEF0FE] text-brand-deep">
                <Icon size={18} />
              </div>
              <h4 className="mb-1.5 text-base font-bold text-navy">{title}</h4>
              <p className="text-sm text-inksoft">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
