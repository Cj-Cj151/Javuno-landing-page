import Container from './ui/Container.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Button from './ui/Button.jsx'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 82% 12%, rgba(124,58,237,.28), transparent 55%), radial-gradient(circle at 10% 90%, rgba(79,70,229,.22), transparent 50%)',
        }}
      />
      <div className="bg-grid-lines pointer-events-none absolute inset-0 opacity-50" />

      <Container className="relative mx-auto max-w-[640px] text-center">
        <Eyebrow tone="dark" center>
          READY WHEN YOU ARE
        </Eyebrow>
        <h2 className="text-[30px] font-bold leading-[1.12] text-white sm:text-[46px]">
          Your work is already connected.
        </h2>
        <div className="mt-2.5 font-display text-xl font-semibold text-accent-soft sm:text-[28px]">
          JAVUNO makes the connection visible.
        </div>
        <p className="mt-5 text-[16.5px] leading-[1.7] text-graycool">
          Bring your goals, projects, people, tasks, knowledge, workflows, and insights together
          in one workspace.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button href="#pricing" variant="white">
            Start Free
          </Button>
          <Button href="#demo" variant="ghostDark">
            Watch Demo ▶
          </Button>
        </div>
        <div className="mt-5 text-[13.5px] text-graycool">Set up your workspace in minutes.</div>
      </Container>
    </section>
  )
}
