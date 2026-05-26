import { notFound } from "next/navigation"
import Footer from "../../components/Footer"
import { getProductBySlug, products } from "@/lib/products"
import { ProductDetail } from "./product-detail"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — VoltVibes Dorsten`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-background">
      <div className="pt-20">
        <ProductDetail product={product} />
      </div>
      <Footer />
    </main>
  )
}
