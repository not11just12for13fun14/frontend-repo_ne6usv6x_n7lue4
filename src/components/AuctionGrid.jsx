import AuctionCard from './AuctionCard'

const sample = [
  { id: 1, title: 'iPhone 15 Pro Max 256GB', subtitle: 'Deep Purple · Boxed', current: 812, bids: 14, time: '00:14:22', live: true, reserve: false, image: 'https://images.unsplash.com/photo-1714623304289-397f6f148fab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heCUyMDI1NkdCfGVufDB8MHx8fDE3NjMzNTQ3OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Sony WH-1000XM5', subtitle: 'Noise Cancelling Headphones', current: 206, bids: 8, time: '01:45:10', live: false, reserve: true, image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Nintendo Switch OLED', subtitle: 'White Joy-Cons', current: 302, bids: 21, time: '00:02:54', live: true, reserve: false, image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'GoPro HERO12 Black', subtitle: '4K Action Camera', current: 390, bids: 16, time: '03:12:44', live: false, reserve: false, image: 'https://images.unsplash.com/photo-1714623304289-397f6f148fab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heCUyMDI1NkdCfGVufDB8MHx8fDE3NjMzNTQ3OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'MacBook Air M3', subtitle: '13-inch · 16GB · 512GB', current: 1240, bids: 11, time: '02:24:19', live: false, reserve: true, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Apple Watch Ultra 2', subtitle: 'Titanium · Ocean Band', current: 540, bids: 5, time: '00:59:59', live: false, reserve: false, image: 'https://images.unsplash.com/photo-1714623304289-397f6f148fab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heCUyMDI1NkdCfGVufDB8MHx8fDE3NjMzNTQ3OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function AuctionGrid({ onOpen }) {
  return (
    <section id="auctions" className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
        {sample.map((item) => (
          <AuctionCard key={item.id} item={item} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
