import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-10 lg:py-12 grid lg:grid-cols-2 items-center gap-6 lg:gap-10">
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
            Bid smarter. Win faster.
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-200 max-w-prose">
            Dream60 is the playful auction house for cutting‑edge gadgets. Smooth, fast, and fair — with live bidding that feels electric.
          </p>
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
            <a href="#auctions" className="inline-flex items-center justify-center h-10 sm:h-11 px-4 sm:px-5 rounded-md bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400">
              Browse Live Auctions
            </a>
            <a href="#how" className="inline-flex items-center justify-center h-10 sm:h-11 px-4 sm:px-5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40">
              How it works
            </a>
          </div>
        </div>
        <div className="relative h-[260px] sm:h-[360px] lg:h-[460px] rounded-xl ring-1 ring-white/10 overflow-hidden">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
