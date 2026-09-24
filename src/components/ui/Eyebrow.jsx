export default function Eyebrow({ children, tone = 'light', center = false }) {
  const textColor = tone === 'dark' ? 'text-accent-soft' : 'text-brand'
  const barColor = tone === 'dark' ? 'bg-accent-soft' : 'bg-brand'

  return (
    <div
      className={`mb-4 flex items-center gap-2 text-[13.5px] font-semibold tracking-wide ${textColor} ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className={`inline-block h-[2px] w-4 rounded-full ${barColor}`} />
      {children}
    </div>
  )
}
