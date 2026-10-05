import { useState } from 'react'
import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { faqItems } from '../data/siteData.js'
import { Plus } from 'lucide-react'

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-linelight">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left font-display text-[16.5px] font-semibold text-navy"
      >
        {q}
        <Plus
          size={20}
          className={`ml-4 flex-none text-brand transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: isOpen ? '240px' : '0px' }}
      >
        <p className="max-w-[620px] pb-5 text-[15px] leading-relaxed text-inksoft">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16">
      <Container>

        {/* FAQ TITLE - CENTERED */}
        <div className="flex justify-center text-center">
          <SectionHeading title="Questions, answered." center />
        </div>

        {/* FAQ CONTENT - CENTERED BLOCK */}
        <div className="mx-auto max-w-[760px]">
          {faqItems.map((item, i) => (
            <FAQItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? -1 : i)
              }
            />
          ))}
        </div>

      </Container>
    </section>
  )
}