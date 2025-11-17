import { useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'

export default function Filters({ onClose }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="sticky top-[56px] sm:top-[64px] z-30 bg-white/70 dark:bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 h-11">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-white/80 dark:bg-neutral-800/80 border border-white/40 dark:border-white/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition" aria-label="Open filters">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <button className="h-8 px-3 rounded-md bg-white/80 dark:bg-neutral-800/80 border border-white/40 dark:border-white/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition">
              Category: Phones
            </button>
            <button className="h-8 px-3 rounded-md bg-white/80 dark:bg-neutral-800/80 border border-white/40 dark:border-white/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition">
              Price <span className="sr-only">range</span>
            </button>
          </div>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-white/60 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
            <X className="w-4 h-4" />
            <span className="sr-only">Close filters</span>
          </button>
        </div>
      </div>
    </div>
  )
}
