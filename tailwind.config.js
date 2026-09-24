/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // JAVUNO brand system
        navy: '#0B1020',        // deep navy — dark section backgrounds
        midnight: '#11182D',    // dark card / panel surface
        brand: {
          DEFAULT: '#4F46E5',   // JAVUNO Indigo — primary brand color
          deep: '#4338CA',      // high-contrast label text on light bg
          hover: '#6366F1',     // primary button hover (lighter, not darker)
        },
        accent: {
          DEFAULT: '#7C3AED',   // Electric Violet — sparing accent (AI / automation)
          soft: '#818CF8',      // Soft Indigo — secondary accent / hover on dark
        },
        graycool: '#94A3B8',    // secondary text on dark sections
        inksoft: '#64748B',     // secondary text on light sections
        canvas: '#F8FAFC',      // light section background
        linelight: '#E2E8F0',
        linedark: '#27304A',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,16,32,.04), 0 12px 28px -16px rgba(11,16,32,.14)',
        pop: '0 8px 16px -6px rgba(11,16,32,.12), 0 24px 48px -20px rgba(79,70,229,.22)',
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
}
