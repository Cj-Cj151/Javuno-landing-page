const VARIANTS = {
  primary:
    'bg-brand text-white shadow-[0_1px_2px_rgba(11,16,32,.06),0_10px_20px_-8px_rgba(79,70,229,.5)] hover:bg-brand-hover hover:-translate-y-px',
  white: 'bg-white text-brand-deep hover:-translate-y-px',
  ghost:
    'bg-transparent text-navy border border-linelight hover:border-brand hover:text-brand',
  ghostDark:
    'bg-transparent text-white border border-linedark hover:border-brand hover:text-accent-soft',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[15px] font-semibold whitespace-nowrap transition-all duration-150 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
