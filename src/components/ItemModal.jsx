import { useEffect, useRef, useState } from 'react'
import { X, Plus, Minus, Loader2, CheckCircle2, AlertTriangle, Rocket, SendHorizonal } from 'lucide-react'

export default function ItemModal({ open, onClose, item }) {
  const dialogRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [autoBid, setAutoBid] = useState(0)
  const [status, setStatus] = useState('idle') // idle | success | error
  const [feed, setFeed] = useState([])

  useEffect(() => {
    if (open) {
      // Fake websocket-style feed
      const id = setInterval(() => {
        setFeed((f) => [{ id: Date.now(), text: `New bid placed: $${Math.floor(Math.random() * 50) + 5}` }, ...f].slice(0, 6))
      }, 1800)
      return () => clearInterval(id)
    }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open || !item) return null

  function placeBid() {
    setLoading(true)
    setStatus('idle')
    setTimeout(() => {
      const ok = Math.random() > 0.2
      setLoading(false)
      setStatus(ok ? 'success' : 'error')
      setTimeout(() => setStatus('idle'), 1600)
    }, 600)
  }

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-6">
      <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-2xl lg:max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 animate-in" ref={dialogRef}>
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-neutral-100">
          <h2 className="text-base sm:text-lg font-semibold">{item.title}</h2>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative aspect-[4/3] bg-neutral-50 overflow-hidden">
            <img src={item.image} alt="" className="w-full h-full object-cover" />
            {/* Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-120%] animate-[sheen_2.4s_ease-in-out_infinite]" />
          </div>
          <div className="p-4 sm:p-6">
            <p className="text-sm text-neutral-600">{item.subtitle}</p>
            <div className="mt-3 text-2xl font-bold">${item.current}
              <span className="ml-2 text-sm text-neutral-500 font-medium">Current bid</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button onClick={placeBid} disabled={loading} className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-sky-600 hover:bg-sky-500 active:bg-sky-700 disabled:opacity-50 text-white font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
                {loading ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Placing...</>) : 'Bid Now'}
              </button>
              <button onClick={() => setAutoBid((v)=>v+5)} className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-neutral-900/90 text-white hover:bg-neutral-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800">
                Place Auto‑Bid +$5
              </button>
            </div>

            <div className="mt-3 text-xs text-neutral-500">Auto‑Bid up to: <span className="font-medium text-neutral-700">${autoBid}</span></div>

            {/* Inline status */}
            {status === 'success' && (
              <div role="status" className="mt-3 inline-flex items-center gap-2 text-green-600 text-sm"><CheckCircle2 className="w-4 h-4" /> Bid placed!</div>
            )}
            {status === 'error' && (
              <div role="alert" className="mt-3 inline-flex items-center gap-2 text-rose-600 text-sm"><AlertTriangle className="w-4 h-4" /> Bid failed. Try again.</div>
            )}

            {/* Live feed */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Live bids</h3>
              <ul className="mt-2 max-h-40 overflow-auto pr-2 space-y-1" aria-live="polite">
                {feed.map((e) => (
                  <li key={e.id} className="text-sm text-neutral-700 bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-md animate-[slideIn_.28s_ease-out]">{e.text}</li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-xs text-neutral-500">Tip: Use Auto‑Bid to stay ahead automatically. You can change this anytime.</p>
          </div>
        </div>
      </div>

      {/* Confetti on win (placeholder animation) */}
      <style>{`
        @keyframes sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  )
}
