import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from './ui/Container.jsx'
import Button from './ui/Button.jsx'
import { navLinks } from '../data/siteData.js'

function BrandMark() {
  return (
    <span className="relative h-[26px] w-[26px] flex-none rounded-[7px] bg-gradient-to-br from-accent to-brand-deep">
      <span className="absolute inset-[6px] rounded-bl-[6px] border-b-2 border-l-2 border-white" />
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-navy/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
          scrolled
            ? 'border-b border-linedark shadow-[0_4px_20px_-10px_rgba(0,0,0,.4)]'
            : 'border-b border-transparent'
        }`}
      >
        <Container
          className={`flex items-center justify-between gap-6 transition-[padding] duration-300 ${
            scrolled ? 'py-2.5' : 'py-4'
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-lg font-bold text-white"
          >
            <BrandMark />
            JAVUNO
          </a>

          <div className="hidden items-center gap-7 text-[14.5px] font-medium text-graycool md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent-soft"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button href="#pricing" variant="primary">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-1.5 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="text-white" />
          </button>
        </Container>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-navy px-6 py-5 text-white">
          <div className="mb-9 flex items-center justify-between">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <BrandMark />
              JAVUNO
            </span>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-linedark py-3.5 font-display text-2xl font-semibold"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-7 flex flex-col gap-3">
            <Button
              href="#pricing"
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      )}
    </>
  )
}