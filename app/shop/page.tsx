import Footer from "../components/Footer"
import PageHero from "../components/PageHero"
import ShopClient from "./ShopClient"
import { fetchProducts } from "@/lib/shopify"
import { AlertTriangle, Settings, Wifi, KeyRound } from "lucide-react"

const ERROR_META = {
  missing_config: { Icon: Settings,      bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-500', title: 'text-amber-900', text: 'text-amber-700' },
  unauthorized:   { Icon: KeyRound,      bg: 'bg-red-50',   border: 'border-red-200',   icon: 'text-red-500',   title: 'text-red-900',   text: 'text-red-700'   },
  api_error:      { Icon: AlertTriangle, bg: 'bg-red-50',   border: 'border-red-200',   icon: 'text-red-500',   title: 'text-red-900',   text: 'text-red-700'   },
  network_error:  { Icon: Wifi,          bg: 'bg-blue-50',  border: 'border-blue-200',  icon: 'text-blue-500',  title: 'text-blue-900',  text: 'text-blue-700'  },
}

export default async function ShopPage() {
  const result = await fetchProducts()

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <PageHero
        eyebrow="VoltVibes Dorsten"
        title="Unser"
        titleAccent="Shop"
        subtitle="E-Scooter, Stunt Scooter, Helme und Elektromobile — direkt in der Dorstener Innenstadt."
      />

      {!result.ok ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          {(() => {
            const { type, message, details } = result.error
            const { Icon, bg, border, icon, title, text } = ERROR_META[type]
            return (
              <div className={`rounded-lg border ${bg} ${border} p-6`}>
                <div className="flex gap-4">
                  <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${icon}`} />
                  <div className="flex flex-col gap-2">
                    <p className={`font-semibold text-base ${title}`}>{message}</p>
                    <p className={`text-sm leading-relaxed ${text}`}>{details}</p>
                    {type === 'unauthorized' && (
                      <div className={`mt-2 rounded-md bg-white/60 border ${border} p-4 text-xs ${text}`}>
                        <p className="font-semibold mb-1">Admin-Token vs. Storefront-Token:</p>
                        <p>Admin API Token beginnt mit <code className="bg-white/80 px-1 rounded">shpat_...</code> — das ist der falsche Token.</p>
                        <p className="mt-1">Shopify Admin → Einstellungen → Apps → Deine Custom App → <strong>Storefront API Access Token</strong></p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      ) : result.products.length === 0 ? (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="rounded-lg border bg-[#f9f9f9] border-[#e5e5e5] p-8 text-center">
            <p className="text-lg font-medium text-[#0e0e0e]">Noch keine Produkte im Shop</p>
            <p className="text-sm text-[#888] mt-2">Füge Produkte in deinem Shopify Admin hinzu — sie erscheinen hier automatisch.</p>
          </div>
        </div>
      ) : (
        <ShopClient initialProducts={result.products} categories={result.categories} />
      )}

      <Footer />
    </main>
  )
}
