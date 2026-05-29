import { notFound } from "next/navigation"
import Footer from "../../components/Footer"
import { fetchProductByHandle } from "@/lib/shopify"
import ProductDetailClient from "./product-detail"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await fetchProductByHandle(slug)
  if (!result.ok) return {}
  return {
    title: `${result.product.title} — VoltVibes Dorsten`,
    description: result.product.description.slice(0, 155),
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await fetchProductByHandle(slug)

  if (!result.ok) notFound()

  const { product } = result

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      {/* Dark header — makes navbar visible */}
      <div
        className="w-full"
        style={{ background: '#fff', paddingTop: 'clamp(5rem, 10vw, 7rem)', paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888', fontFamily: "'DM Sans', sans-serif" }}>
            {product.categoryLabel}
          </p>
          <h1
            className="leading-none text-[#0e0e0e]"
            style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.02em' }}
          >
            {product.title}
          </h1>
        </div>
      </div>

      <ProductDetailClient product={result.product} />
      <Footer />
    </main>
  )
}
