import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import useReveal from '../hooks/useReveal.js'

const tiles = [
  { label: 'Chat', sub: 'Slack threads', style: 'top-[6%] left-[2%]' },
  { label: 'Spreadsheets', sub: 'Status trackers', style: 'top-0 right-[4%]' },
  { label: 'Cloud storage', sub: 'Buried folders', style: 'top-[40%] left-[16%]' },
  { label: 'Calendar', sub: 'Disconnected dates', style: 'top-[36%] right-0' },
  { label: 'Project tool', sub: 'Half the picture', style: 'bottom-[4%] left-[4%]' },
  { label: 'Documents', sub: 'Outdated copies', style: 'bottom-0 right-[10%]' },
]

const chain = ['Scattered information', 'Repeated updates', 'Unclear ownership', 'Manual coordination', 'Missed deadlines']

export default function ProblemSection() {
  const ref = useReveal()

  return (
    <section ref={ref} className="reveal overflow-hidden py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative h-[260px] sm:h-[340px]" aria-hidden="true">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className={`absolute rounded-[14px] border border-linelight bg-white px-4 py-3.5 text-[13px] font-semibold text-inksoft shadow-card ${tile.style}`}
              >
                {tile.label}
                <span className="mt-0.5 block text-[11px] font-medium text-inksoft/70">{tile.sub}</span>
              </div>
            ))}
          </div>

          <div>
            <Eyebrow>THE PROBLEM</Eyebrow>
            <h2 className="text-[26px] font-bold leading-[1.16] text-navy sm:text-[38px]">
              Your work shouldn't live everywhere.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-inksoft">
              Projects live in one tool. Conversations happen somewhere else. Files are buried in
              folders. Deadlines live in calendars. Updates disappear in chat.
            </p>
            <div className="mt-7 flex flex-col">
              {chain.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3.5 py-2.5 text-[15px] text-inksoft ${
                    i < chain.length - 1 ? 'border-b border-linelight' : ''
                  }`}
                >
                  <span className="h-[7px] w-[7px] flex-none rounded-full bg-danger" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 font-display text-2xl font-semibold leading-tight text-navy">
              JAVUNO connects the <em className="not-italic text-brand">entire</em> workflow.
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
