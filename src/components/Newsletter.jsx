import { useState } from 'react'
import Container from './ui/Container.jsx'
import Button from './ui/Button.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section className="bg-[#F5F6FE] py-16">
      <Container className="flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-[440px]">
          <h3 className="text-xl font-bold text-navy sm:text-[22px]">
            Get smarter about how your team works.
          </h3>
          <p className="mt-2 text-[14.5px] text-inksoft">
            Practical ideas about work management, team collaboration, productivity, automation,
            AI, and modern work — delivered occasionally.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') setStatus('idle')
              }}
              placeholder="Enter your work email"
              className="w-full min-w-0 flex-1 rounded-[10px] border border-linelight bg-white px-4 py-3 text-[14.5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand sm:w-[250px]"
            />
            <Button as="button" type="submit" variant="primary">
              Subscribe
            </Button>
          </form>
          {status === 'error' && (
            <div className="mt-2 text-xs font-semibold text-danger">Enter a valid email address.</div>
          )}
          {status === 'success' && (
            <div className="mt-2 text-xs font-semibold text-success">
              Subscribed ✓ — thanks for joining.
            </div>
          )}
          <div className="mt-2.5 text-xs text-inksoft">No constant sales emails. Unsubscribe anytime.</div>
        </div>
      </Container>
    </section>
  )
}
