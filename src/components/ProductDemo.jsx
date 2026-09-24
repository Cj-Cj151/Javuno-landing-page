import { useState } from 'react'
import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'

const TABS = ['Dashboard', 'Board', 'List', 'Calendar', 'Timeline', 'Workload', 'Reports']

const boardColumns = [
  {
    name: 'BACKLOG',
    tasks: [
      { title: 'Design onboarding flow', tag: 'Design', tagClass: 'bg-[#EEF0FE] text-brand-deep', who: 'Emily Davis' },
      { title: 'Draft Q4 launch copy', tag: 'Content', tagClass: 'bg-[#FDEBD3] text-warning', who: 'Daniel Reyes' },
    ],
  },
  {
    name: 'IN PROGRESS',
    tasks: [{ title: 'Build client portal auth', tag: 'Dev', tagClass: 'bg-[#E4ECFC] text-info', who: 'Michael Chen' }],
  },
  {
    name: 'REVIEW',
    tasks: [{ title: 'Homepage visual QA', tag: 'Review', tagClass: 'bg-[#FCE7E5] text-danger', who: 'James Carter' }],
  },
  {
    name: 'COMPLETED',
    tasks: [
      { title: 'Set up staging environment', tag: 'Done', tagClass: 'bg-[#DCF2E7] text-success', who: 'Michael Chen', done: true },
    ],
  },
]

const listTasks = [
  { title: 'Homepage visual QA', project: 'Acme Website Redesign', owner: 'James Carter', due: 'Today', status: 'Review' },
  { title: 'Build client portal auth', project: 'Client Portal Development', owner: 'Michael Chen', due: 'Tomorrow', status: 'In Progress' },
  { title: 'Draft Q4 launch copy', project: 'Q4 Marketing Campaign', owner: 'Daniel Reyes', due: 'Fri', status: 'Backlog' },
  { title: 'Approve brand palette', project: 'Brand Identity Refresh', owner: 'Emily Davis', due: 'Overdue', status: 'Blocked' },
]

const timelineRows = [
  { name: 'Research', left: 0, width: 16, color: 'bg-info' },
  { name: 'Design', left: 14, width: 22, color: 'bg-brand' },
  { name: 'Development', left: 34, width: 34, color: 'bg-brand-deep' },
  { name: 'QA', left: 66, width: 16, color: 'bg-warning' },
  { name: 'Launch', left: 84, width: 12, color: 'bg-success' },
]

const workloadRows = [
  { name: 'Sarah Mitchell', initials: 'SM', pct: 88, color: 'bg-brand' },
  { name: 'Michael Chen', initials: 'MC', pct: 64, color: 'bg-info' },
  { name: 'Emily Davis', initials: 'ED', pct: 108, color: 'bg-danger' },
  { name: 'Daniel Reyes', initials: 'DR', pct: 41, color: 'bg-success' },
]

const reportCards = [
  { value: '92%', label: 'PROJECTS ON TRACK', color: 'text-success' },
  { value: '28% ↓', label: 'OVERDUE WORK', color: 'text-warning' },
  { value: '87%', label: 'TEAM CAPACITY USED', color: 'text-navy' },
  { value: '94%', label: 'TASK COMPLETION', color: 'text-navy' },
  { value: '31% ↑', label: 'GOAL PROGRESS', color: 'text-brand-deep' },
  { value: '6', label: 'CLIENT PROJECTS ACTIVE', color: 'text-navy' },
]

function DashboardView() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-5">
        <div className="rounded-xl border border-[#EEF2F6] p-4">
          <div className="font-display text-2xl font-bold text-navy">18</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">MY TASKS</div>
        </div>
        <div className="rounded-xl border border-[#EEF2F6] p-4">
          <div className="font-display text-2xl font-bold text-warning">4</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">DUE TODAY</div>
        </div>
        <div className="rounded-xl border border-[#EEF2F6] p-4">
          <div className="font-display text-2xl font-bold text-danger">3</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">OVERDUE</div>
        </div>
        <div className="rounded-xl border border-[#EEF2F6] p-4">
          <div className="font-display text-2xl font-bold text-navy">12</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">ACTIVE PROJECTS</div>
        </div>
        <div className="rounded-xl border border-[#EEF2F6] p-4">
          <div className="font-display text-2xl font-bold text-danger">2</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">PROJECTS AT RISK</div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-2xl border border-linelight p-3.5">
          <span className="h-8 w-2 flex-none rounded bg-success" />
          <div className="min-w-0 flex-1">
            <div className="text-[13.5px] font-semibold text-navy">Acme Website Redesign</div>
            <div className="mt-0.5 text-xs text-inksoft">On track · Sarah Mitchell</div>
          </div>
          <div className="h-1.5 w-14 flex-none overflow-hidden rounded bg-[#EEF2F6]">
            <div className="h-full rounded bg-success" style={{ width: '82%' }} />
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-linelight p-3.5">
          <span className="h-8 w-2 flex-none rounded bg-warning" />
          <div className="min-w-0 flex-1">
            <div className="text-[13.5px] font-semibold text-navy">Brand Identity Refresh</div>
            <div className="mt-0.5 text-xs text-inksoft">Needs attention · Emily Davis</div>
          </div>
          <div className="h-1.5 w-14 flex-none overflow-hidden rounded bg-[#EEF2F6]">
            <div className="h-full rounded bg-warning" style={{ width: '44%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function BoardView() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {boardColumns.map((col) => (
        <div key={col.name}>
          <h4 className="mb-3 text-xs font-bold text-inksoft">{col.name}</h4>
          {col.tasks.map((t) => (
            <div
              key={t.title}
              className={`mb-2.5 rounded-[10px] border border-[#EEF2F6] bg-[#F5F6FE] p-3 text-[13px] font-semibold ${
                t.done ? 'opacity-60' : ''
              }`}
            >
              <span className={`mb-1.5 inline-block rounded px-1.5 py-0.5 text-[10.5px] font-bold ${t.tagClass}`}>
                {t.tag}
              </span>
              <div>{t.title}</div>
              <div className="mt-2 text-[11.5px] font-medium text-inksoft">{t.who}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function ListView() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-linelight text-left text-xs font-bold text-inksoft">
            <th className="py-2.5 pr-4">Task</th>
            <th className="py-2.5 pr-4">Project</th>
            <th className="py-2.5 pr-4">Owner</th>
            <th className="py-2.5 pr-4">Due</th>
            <th className="py-2.5">Status</th>
          </tr>
        </thead>
        <tbody>
          {listTasks.map((t) => (
            <tr key={t.title} className="border-b border-[#EEF2F6]">
              <td className="py-3 pr-4 font-semibold text-navy">{t.title}</td>
              <td className="py-3 pr-4 text-inksoft">{t.project}</td>
              <td className="py-3 pr-4 text-inksoft">{t.owner}</td>
              <td className={`py-3 pr-4 ${t.due === 'Overdue' ? 'font-semibold text-danger' : 'text-inksoft'}`}>
                {t.due}
              </td>
              <td className="py-3 text-inksoft">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CalendarView() {
  const days = [12, 13, 14, 15, 16, 17, 18]
  const events = { 13: 'Standup', 14: 'QA due', 16: 'Client review', 17: 'Milestone' }
  return (
    <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
      {days.map((d) => (
        <div key={d} className="min-h-[74px] rounded-lg border border-[#EEF2F6] p-1.5 text-[10.5px] text-inksoft">
          <div className="text-xs font-bold text-navy">{d}</div>
          {events[d] && (
            <div className="mt-1 rounded bg-[#EEF0FE] px-1 py-0.5 font-semibold text-brand-deep">{events[d]}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function TimelineView() {
  return (
    <div className="flex flex-col gap-3.5">
      {timelineRows.map((row) => (
        <div key={row.name} className="grid grid-cols-[110px_1fr] items-center gap-3.5">
          <div className="text-[13.5px] font-semibold text-navy">{row.name}</div>
          <div className="relative h-3 rounded-md bg-[#EEF2F6]">
            <div
              className={`absolute inset-y-0 rounded-md ${row.color}`}
              style={{ left: `${row.left}%`, width: `${row.width}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function WorkloadView() {
  return (
    <div className="flex flex-col gap-4">
      {workloadRows.map((row) => (
        <div key={row.name} className="grid grid-cols-[1fr_50px] items-center gap-4 sm:grid-cols-[160px_1fr_50px]">
          <div className="flex items-center gap-2 text-[13.5px] font-semibold text-navy">
            <span className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-[10px] font-bold text-white ${row.color}`}>
              {row.initials}
            </span>
            <span className="hidden sm:inline">{row.name}</span>
          </div>
          <div className="hidden h-1.5 overflow-hidden rounded bg-[#EEF2F6] sm:block">
            <div className={`h-full rounded ${row.color}`} style={{ width: `${Math.min(row.pct, 100)}%` }} />
          </div>
          <div className="text-[12.5px] font-semibold text-inksoft">{row.pct}%</div>
        </div>
      ))}
    </div>
  )
}

function ReportsView() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {reportCards.map((r) => (
        <div key={r.label} className="rounded-xl border border-[#EEF2F6] p-[18px]">
          <div className={`font-display text-[26px] font-bold ${r.color}`}>{r.value}</div>
          <div className="mt-1 text-xs font-semibold text-inksoft">{r.label}</div>
        </div>
      ))}
    </div>
  )
}

const VIEWS = {
  Dashboard: DashboardView,
  Board: BoardView,
  List: ListView,
  Calendar: CalendarView,
  Timeline: TimelineView,
  Workload: WorkloadView,
  Reports: ReportsView,
}

export default function ProductDemo() {
  const [tab, setTab] = useState('Dashboard')
  const ActiveView = VIEWS[tab]

  return (
    <section id="demo" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="SEE IT WORKING"
          title="See JAVUNO in action."
          subtitle="One workspace, every angle on the work — switch views and the same tasks follow you."
        />

        <div className="mb-7 flex gap-6 overflow-x-auto border-b border-linelight">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-none whitespace-nowrap border-b-2 py-3 text-[14.5px] font-semibold transition-colors ${
                tab === t ? 'border-brand text-brand-deep' : 'border-transparent text-inksoft hover:text-navy'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="min-h-[380px] rounded-[22px] border border-linelight bg-white p-7 shadow-card">
          <ActiveView />
        </div>

        <div className="mt-7 text-center">
          <Button href="#pricing" variant="ghost">
            Explore the Interactive Demo →
          </Button>
        </div>
      </Container>
    </section>
  )
}
