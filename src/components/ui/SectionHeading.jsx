import Eyebrow from './Eyebrow.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light', // 'light' | 'dark'
  center = false,
  className = '',
}) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-navy'
  const subColor = tone === 'dark' ? 'text-graycool' : 'text-inksoft'

  return (
    <div
      className={`mb-12 max-w-xl ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={tone} center={center}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`text-[28px] leading-[1.14] font-bold sm:text-[36px] lg:text-[42px] ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[17px] leading-[1.65] ${subColor}`}>{subtitle}</p>
      )}
    </div>
  )
}
