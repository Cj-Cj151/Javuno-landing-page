import Container from './ui/Container.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { comparisonRows, comparisonColumns, comparisonData } from '../data/siteData.js'

function Cell({ value, highlight }) {
  if (value === 'check') {
    return <td className={`py-3.5 px-[18px] text-center font-bold text-success ${highlight ? 'bg-[#F5F6FE]' : ''}`}>✓</td>
  }
  return (
    <td className={`py-3.5 px-[18px] text-center text-[12.5px] italic text-inksoft ${highlight ? 'bg-[#F5F6FE]' : ''}`}>
      Varies
    </td>
  )
}

export default function ComparisonSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="CATEGORY COMPARISON"
          title="Choose the workflow that fits your organization."
          subtitle="JAVUNO brings together capabilities that are often spread across different categories of work software."
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-linelight py-3.5 px-[18px] text-left font-display font-bold text-navy">
                  Capability
                </th>
                {comparisonColumns.map((col, i) => (
                  <th
                    key={col}
                    className={`border-b border-linelight py-3.5 px-[18px] text-center font-display font-bold ${
                      i === 0 ? 'text-brand-deep' : 'text-navy'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row}>
                  <td className="border-b border-linelight py-3.5 px-[18px] font-semibold text-inksoft">{row}</td>
                  {comparisonData[row].map((val, i) => (
                    <Cell key={i} value={val} highlight={i === 0} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
