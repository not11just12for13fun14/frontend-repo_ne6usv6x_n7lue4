import { useState } from 'react'
import { Heart, Flame, Timer, Sparkles } from 'lucide-react'

export default function AuctionCard({ item, onOpen }) {
  const [hover, setHover] = useState(false)

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-white text-neutral-900 rounded-xl border border-neutral-200 shadow-sm overflow-hidden transition will-change-transform duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.01]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {/* Gradient sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
        {/* Contextual overlay */}
        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
        <div className="absolute top-2 left-2 flex gap-1">
          {item.live && (
            <span className="inline-flex items-center gap-1 px-2 h-6 rounded-full bg-rose-500/90 text-white text-xs font-semibold animate-pulse" aria-live="polite">
              <Flame className="w-3.5 h-3.5" /> Live
            </span>
          )}
          {item.reserve && (
            <span className="inline-flex items-center gap-1 px-2 h-6 rounded-full bg-amber-500/90 text-white text-xs font-semibold">
              Reserve
            </span>
          )}
        </div>
        <button
          onClick={() => onOpen(item)}
          className="absolute inset-0 focus:outline-none"
          aria-label={`Open details for ${item.title}`}
        />
        {/* Quick actions */}
        <div className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <div className="flex gap-1">
            <button aria-label="Watch" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-neutral-900 shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              <Heart className="w-4 h-4" />
            </button>
            <button aria-label="Quick bid" className="inline-flex items-center justify-center h-9 px-3 rounded-full bg-sky-500 text-white text-sm font-semibold shadow hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
              + $5
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold line-clamp-1">{item.title}</h3>
        <p className="mt-1 text-xs text-neutral-500 line-clamp-1">{item.subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm">
            <span className="font-semibold">${item.current}</span>
            <span className="text-neutral-500"> · {item.bids} bids</span>
          </div>
          <div className="inline-flex items-center gap-1 text-xs text-neutral-600">
            <Timer className="w-4 h-4" />
            <span aria-live="polite">{item.time}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
