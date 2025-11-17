import { useState } from 'react'
import { Search, Bell, User, Menu, Sparkles } from 'lucide-react'

export default function Header({ onOpenFilters, onOpenOnboarding, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/70 dark:bg-neutral-900/70 border-b border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="h-14 sm:h-16 flex items-center justify-between gap-2">
          {/* Left */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button aria-label="Open menu" className="inline-flex sm:hidden p-2 rounded-md hover:bg-white/60 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 focus-visible:ring-offset-white/0" onClick={() => setMenuOpen(v => !v)}>
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="flex items-center gap-2 text-sky-500 font-semibold tracking-tight">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm sm:text-base">Dream60</span>
            </a>
          </div>
          {/* Center search (compact on mobile) */}
          <div className="flex-1 max-w-xl hidden sm:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input aria-label="Search auctions" placeholder="Search gadgets, brands, lots.." className="w-full pl-9 pr-3 h-10 rounded-lg bg-white/80 dark:bg-neutral-800/80 text-sm placeholder:text-neutral-400 border border-white/40 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" />
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button aria-label="Notifications" className="p-2 rounded-md hover:bg-white/60 dark:hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              <Bell className="w-5 h-5" />
            </button>
            <button aria-label="Account" className="p-2 rounded-md hover:bg-white/60 dark:hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => setTheme(theme === 'premium' ? 'minimal' : 'premium')} className="ml-1 px-2.5 py-1.5 text-xs font-medium rounded-md bg-gradient-to-br from-sky-500 to-blue-600 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
              Theme
            </button>
          </div>
        </div>
        {/* Mobile search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input aria-label="Search auctions" placeholder="Search gadgets, brands, lots.." className="w-full pl-9 pr-3 h-10 rounded-lg bg-white/80 dark:bg-neutral-800/80 text-sm placeholder:text-neutral-400 border border-white/40 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" />
          </div>
        </div>
      </div>
    </header>
  )
}
