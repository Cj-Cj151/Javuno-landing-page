import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'

const items = ['Projects', 'Milestones', 'Deliverables', 'Approvals', 'Documents', 'Messages', 'Reports']

export default function ClientPortal() {
  return (
    <section className="py-16">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            title="Give clients visibility without giving away your workspace."
            className="mb-6"
          />
          <p className="mb-7 text-base leading-relaxed text-inksoft">
            Your team sees everything. Your clients see what they need.
          </p>
          <Button href="#pricing" variant="ghost">
            Explore Client Portal →
          </Button>
        </div>
        <div className="rounded-[22px] border border-linelight bg-white p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between text-xs font-semibold text-inksoft">
            <span>Acme Corporation — Client View</span>
            <span className="rounded-full bg-[#EEF0FE] px-2.5 py-1 text-brand-deep">Read-only</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#EEF2F6] bg-[#F8FAFC] px-3 py-3.5 text-center text-[13px] font-semibold text-navy"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
