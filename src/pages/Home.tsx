import { BuiltForClubGolf } from "../components/BuiltForClubGolf"
import { CoreFeatures } from "../components/CoreFeatures"
import { FuturePlans } from "../components/FuturePlans"
import { Hero } from "../components/Hero"
import { ProductPreview } from "../components/ProductPreview"

export function Home() {
  return (
    <>
      <Hero />
      <ProductPreview />
      <CoreFeatures />
      <BuiltForClubGolf />
      <FuturePlans />
    </>
  )
}