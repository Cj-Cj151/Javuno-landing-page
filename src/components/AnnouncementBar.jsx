import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="relative z-[60] bg-gradient-to-r from-brand to-accent px-5 py-2.5 text-center text-sm text-white">
      <span>
        Meet JAVUNO — a connected workspace built to help teams move work from idea to outcome.
      </span>
      <a href="#difference" className="ml-2 font-semibold underline underline-offset-2">
        Explore JAVUNO →
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  )
}
