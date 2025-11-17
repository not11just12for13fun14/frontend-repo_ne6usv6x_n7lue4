import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ToastCtx = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const show = useCallback((t) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((arr) => [...arr, { id, ...t }])
    setTimeout(() => dismiss(id), t.duration ?? 2200)
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((arr) => arr.filter((t) => t.id !== id))
  }, [])

  const value = useMemo(() => ({ show, dismiss }), [show, dismiss])

  return (
    <ToastCtx.Provider value={value}>
      {children}
      <div aria-live="polite" className="fixed top-3 right-3 z-[200] space-y-2 w-[calc(100vw-24px)] max-w-sm">
        {toasts.map((t) => (
          <div key={t.id} className={`pointer-events-auto px-4 py-3 rounded-lg shadow-lg border ${t.variant==='error'?'bg-rose-600 text-white border-rose-500':'bg-neutral-900 text-white border-neutral-800'} animate-[toastIn_.22s_ease-out]`} role="status">
            {t.message}
          </div>
        ))}
      </div>
      <style>{`@keyframes toastIn{from{opacity:.4; transform: translateY(-6px)} to{opacity:1; transform: translateY(0)}}`}</style>
    </ToastCtx.Provider>
  )
}

export function useToast(){
  const ctx = useContext(ToastCtx)
  if(!ctx) throw new Error('useToast must be used inside ToastProvider')
  return ctx
}
