import { useEffect, useState } from 'react'
import { Info } from 'lucide-react'

export default function OnboardingHints() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem('dream60_onboarded')
    if (!seen) {
      setOpen(true)
      const id = setTimeout(() => setOpen(false), 5000)
      return () => clearTimeout(id)
    }
  }, [])

  function dismiss() {
    localStorage.setItem('dream60_onboarded', '1')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 z-50">
      <div className="max-w-md rounded-lg bg-neutral-900/90 text-white backdrop-blur border border-white/10 shadow-lg p-3 sm:p-4">
        <div className="flex items-start gap-2">
          <div className="mt-0.5"><Info className="w-5 h-5 text-sky-400" /></div>
          <div className="text-sm">
            <p className="font-semibold">Pro tip</p>
            <p className="opacity-90">Tap a card to open details, then try “Bid Now” to see live feedback. You can enable Auto‑Bid to stay on top.</p>
          </div>
          <button onClick={dismiss} aria-label="Dismiss" className="ml-auto text-white/70 hover:text-white">✕</button>
        </div>
      </div>
    </div>
  )
}
