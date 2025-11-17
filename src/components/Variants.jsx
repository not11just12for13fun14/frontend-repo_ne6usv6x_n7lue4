export default function Variants() {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-10">
      <h2 className="text-white/90 text-lg font-semibold mb-4">Aesthetic Variants</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl p-4 bg-white/10 text-white">
          <h3 className="font-semibold">Minimal</h3>
          <p className="mt-1 text-sm text-white/80">Clean white cards, subtle blue accents, restrained motion.</p>
        </div>
        <div className="rounded-xl p-4 bg-gradient-to-br from-sky-600/40 to-fuchsia-600/40 text-white ring-1 ring-white/10">
          <h3 className="font-semibold">Vibrant</h3>
          <p className="mt-1 text-sm text-white/90">Electric hues, playful badges, energetic hover overlays.</p>
        </div>
        <div className="rounded-xl p-4 bg-neutral-900/80 text-white ring-1 ring-white/10">
          <h3 className="font-semibold">Premium Dark</h3>
          <p className="mt-1 text-sm text-white/80">Graphite surfaces, neon CTAs, luxurious depth.</p>
        </div>
      </div>
    </section>
  )
}
