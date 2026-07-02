import { CoreFeatures } from "../components/CoreFeatures"
import { Hero } from "../components/Hero"
import { ProductPreview } from "../components/ProductPreview"

export function Home() {
  return (
    <>
      <Hero />
      <ProductPreview />
      <CoreFeatures />
    </>
  )
}