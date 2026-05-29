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

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <div className="pt-20">
        <ProductDetailClient product={result.product} />
      </div>
      <Footer />
    </main>
  )
}
