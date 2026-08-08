import Hero from '@/components/Hero/Hero'
import InteractiveMap from '@/components/Map/InteractiveMap'
import BiodiversitySection from '@/components/Biodiversity/BiodiversitySection'
import CultureSection from '@/components/Culture/CultureSection'
import ExperiencesSection from '@/components/Experiences/ExperiencesSection'
import GallerySection from '@/components/Gallery/GallerySection'
import PracticalSection from '@/components/Practical/PracticalSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <InteractiveMap />
      <BiodiversitySection />
      <CultureSection />
      <ExperiencesSection />
      <GallerySection />
      <PracticalSection />
    </>
  )
}
