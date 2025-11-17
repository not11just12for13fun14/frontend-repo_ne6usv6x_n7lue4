export default function Tokens() {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8">
      <h2 className="text-white/90 text-lg font-semibold">Design Tokens</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
        <div className="p-3 rounded-lg bg-white/10 text-white">Primary BG: #0B1220</div>
        <div className="p-3 rounded-lg bg-white/10 text-white">Electric Blue: #38BDF8</div>
        <div className="p-3 rounded-lg bg-white/10 text-white">Neon Accent: #22D3EE</div>
        <div className="p-3 rounded-lg bg-white/10 text-white">Card: #FFFFFF</div>
        <div className="p-3 rounded-lg bg-white/10 text-white">Spacing: 8 · 12 · 16 · 24 · 32</div>
        <div className="p-3 rounded-lg bg-white/10 text-white">Fonts: 16/24/32</div>
      </div>
    </section>
  )
}
