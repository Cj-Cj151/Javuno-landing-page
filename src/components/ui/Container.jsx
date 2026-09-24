export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto max-w-page px-5 sm:px-8 ${className}`}>{children}</div>
  )
}
