import Container from './ui/Container.jsx'
import { footerLinks } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="border-t border-linedark bg-navy py-16 text-graycool">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="relative h-[26px] w-[26px] flex-none rounded-[7px] bg-gradient-to-br from-accent to-brand-deep">
                <span className="absolute inset-[6px] rounded-bl-[6px] border-b-2 border-l-2 border-white" />
              </span>
              JAVUNO
            </span>
            <p className="mt-3.5 max-w-[220px] text-[13.5px] text-graycool">
              Work. Organize. Collaborate. Deliver.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="mb-4 text-[13px] font-bold text-white">{heading}</h5>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block py-1.5 text-[13.5px] text-graycool transition-colors hover:text-accent-soft"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-linedark pt-6 text-[12.5px] text-graycool">
          <span>© 2026 JAVUNO. All rights reserved.</span>
          <div className="flex gap-4">
            {['LinkedIn', 'X', 'YouTube'].map((s) => (
              <a key={s} href="#" className="hover:text-accent-soft">
                {s}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
