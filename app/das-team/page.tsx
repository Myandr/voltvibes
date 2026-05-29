import Footer from "../components/Footer"
import TeamCarouselSection from "../components/TeamCarouselSection"
import CustomerStoriesSection from "../components/CustomerStoriesSection"

export default function DasTeamPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <TeamCarouselSection />

      <CustomerStoriesSection />

      <Footer />
    </main>
  )
}
