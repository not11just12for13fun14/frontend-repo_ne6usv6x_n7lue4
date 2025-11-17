export default function SkeletonGrid() {
  const items = Array.from({ length: 8 })
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {items.map((_, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden animate-pulse">
            <div className="aspect-[4/3] bg-white/10" />
            <div className="p-3">
              <div className="h-4 bg-white/20 rounded w-2/3" />
              <div className="mt-2 h-3 bg-white/15 rounded w-1/2" />
              <div className="mt-4 h-4 bg-white/20 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
