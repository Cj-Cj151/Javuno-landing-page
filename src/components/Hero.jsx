import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Button from './ui/Button.jsx'

const flowNodes = [
  { icon: '◎', label: 'Goal' },
  { icon: '▣', label: 'Project' },
  { icon: '✓', label: 'Task' },
  { icon: '◐', label: 'Person' },
  { icon: '⚡', label: 'Auto' },
]

const miniCards = [
  { color: 'bg-info', title: 'Client Portal Development', meta: 'Due Fri · 3 tasks in review', progress: 68 },
  { color: 'bg-warning', title: 'Q4 Marketing Campaign', meta: 'At risk · owner Maria Santos', avatars: true },
  { color: 'bg-success', title: 'Acme Website Redesign', meta: 'On track · 12 of 18 tasks done', progress: 82 },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pb-10 pt-20">
      <div className="pointer-events-none absolute -right-[10%] -top-36 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,.22),transparent_68%)]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
        <div>
          <Eyebrow tone="dark">THE CONNECTED WORK PLATFORM</Eyebrow>
          <h1 className="max-w-xl text-[38px] font-bold leading-[1.05] text-white sm:text-[48px] lg:text-[60px]">
            Turn scattered work into one connected flow.
          </h1>
          <p className="mt-6 max-w-[490px] text-lg leading-[1.7] text-graycool">
            Plan projects, organize tasks, collaborate with your team, automate repetitive work,
            and understand what's happening across your organization — all from one connected
            workspace.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button href="#pricing" variant="primary">
              Start Free
            </Button>
            <Button href="#demo" variant="ghostDark">
              Watch Demo ▶
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-[13.5px] text-graycool">
            {['No credit card required', 'Set up in minutes', 'Built for modern teams'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <span className="font-bold text-success">✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[22px] border border-linelight bg-white p-5 shadow-pop">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,#EEF0FE_0%,transparent_70%)]" />

            <div className="mb-4 hidden items-center gap-2 rounded-xl border border-linelight bg-white px-3 py-2 text-xs font-semibold text-brand-deep shadow-card sm:absolute sm:-top-4 sm:right-2 sm:flex">
              ✦ Ask JAVUNO AI
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1 rounded-[9px] bg-[#F5F6FE] p-1">
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-brand-deep shadow-sm">
                  Dashboard
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold text-inksoft">Board</span>
                <span className="px-2.5 py-1 text-xs font-semibold text-inksoft">Timeline</span>
              </div>
              <div className="text-xs font-semibold text-inksoft">JAVUNO Digital Studio</div>
            </div>

            <div className="mb-5 flex items-center justify-between text-[11px] font-semibold text-inksoft">
              {flowNodes.map((node, i) => (
                <div key={node.label} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-[#EEF0FE] text-sm text-brand-deep">
                    {node.icon}
                  </span>
                  {node.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              {miniCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-3 rounded-[14px] border border-[#EEF2F6] bg-white p-3.5 transition-transform hover:translate-x-0.5"
                >
                  <span className={`h-8 w-2 flex-none rounded ${card.color}`} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13.5px] font-semibold text-navy">{card.title}</div>
                    <div className="mt-0.5 text-xs text-inksoft">{card.meta}</div>
                  </div>
                  {card.progress && (
                    <div className="h-1.5 w-14 flex-none overflow-hidden rounded bg-[#EEF2F6]">
                      <div
                        className={`h-full rounded ${card.color}`}
                        style={{ width: `${card.progress}%` }}
                      />
                    </div>
                  )}
                  {card.avatars && (
                    <div className="flex flex-none">
                      <span className="-ml-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-white bg-brand text-[9px] font-bold text-white">
                        MS
                      </span>
                      <span className="-ml-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-white bg-info text-[9px] font-bold text-white">
                        JC
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
