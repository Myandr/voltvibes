import Footer from "../components/Footer"
import TeamCarouselSection from "../components/TeamCarouselSection"
import CustomerStoriesSection from "../components/CustomerStoriesSection"
import JoinTeamSection from "../components/JoinTeamSection"

export default function DasTeamPage() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <TeamCarouselSection />

      <JoinTeamSection />

      <CustomerStoriesSection />

      <Footer />
    </main>
  )
}
