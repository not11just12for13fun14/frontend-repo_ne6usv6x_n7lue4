import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Filters from './components/Filters'
import AuctionGrid from './components/AuctionGrid'
import ItemModal from './components/ItemModal'
import Tokens from './components/Tokens'
import Variants from './components/Variants'
import OnboardingHints from './components/OnboardingHints'
import Meta from './components/Meta'

function App() {
  const [theme, setTheme] = useState('premium') // minimal | vibrant | premium
  const [showFilters, setShowFilters] = useState(true)
  const [selected, setSelected] = useState(null)
  const [loading] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.style.setProperty('--bg', theme === 'premium' ? '#0B1220' : theme === 'vibrant' ? '#0A0F1A' : '#0E141B')
  }, [theme])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white selection:bg-sky-500/40">
      <Meta />
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-neutral-900 focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
      <Header onOpenFilters={()=>setShowFilters(true)} onOpenOnboarding={()=>{}} theme={theme} setTheme={setTheme} />
      <main id="content">
        <Hero />
        {showFilters && <Filters onClose={()=>setShowFilters(false)} />}
        {loading ? <div className="opacity-80"><AuctionGrid onOpen={setSelected} /></div> : <AuctionGrid onOpen={setSelected} />}
        <Variants />
        <Tokens />
      </main>
      <ItemModal open={!!selected} item={selected} onClose={()=>setSelected(null)} />
      <OnboardingHints />
      <footer className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-10 text-white/70 text-sm">
        <h2 className="font-semibold text-white">QA checklist</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Keyboard: tab through all controls, visible focus rings</li>
          <li>Responsive: grid at 2/3/4/5 cols; header shrinks on mobile</li>
          <li>Buttons: primary/secondary/disabled/loading states</li>
          <li>Animations: 200ms ease-out, GPU transforms, no jank</li>
          <li>Images: lazy loading, skeleton on slow network</li>
          <li>SEO: meta title/desc, share cards</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
