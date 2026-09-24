import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import { customerStory } from '../data/siteData.js'

export default function CustomerStories() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Built around real work. Designed for real teams." />
        <div className="rounded-[22px] border border-linelight bg-white p-8 shadow-card sm:p-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="font-display text-xl font-bold text-navy">{customerStory.company}</div>
            <span className="rounded-full bg-[#F5F6FE] px-3 py-1 text-[11px] font-bold text-brand-deep">
              DEMO CONTENT
            </span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-1.5 text-sm font-bold text-inksoft">CHALLENGE</h4>
              <p className="text-[15px] leading-relaxed text-navy">{customerStory.challenge}</p>
              <h4 className="mb-1.5 mt-5 text-sm font-bold text-inksoft">WITH JAVUNO</h4>
              <p className="text-[15px] leading-relaxed text-navy">{customerStory.solution}</p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold text-inksoft">EXAMPLE RESULTS</h4>
              <div className="flex flex-col gap-3">
                {customerStory.results.map((r) => (
                  <div key={r} className="rounded-xl bg-[#F5F6FE] px-4 py-3 text-[15px] font-semibold text-brand-deep">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs italic text-inksoft">
            Fictional company and results shown for prototype purposes only.
          </p>
          <Button href="#pricing" variant="ghost" className="mt-5">
            Read Customer Story →
          </Button>
        </div>
      </Container>
    </section>
  )
}
