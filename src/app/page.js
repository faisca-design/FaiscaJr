import '../styles/globals.css'

import BannerFaisca from '@/components/home/BannerFaisca'
import LearnMoreSection from '@/components/home/LearnMoreSection'
import OurServices from '@/components/home/OurServices'
import Cases from "@/components/home/Cases"
import HomeCarousel from '@/components/home/HomeCarrousel'

export default function Home() {
  return (
    <>
      <BannerFaisca />
      <LearnMoreSection />
      <OurServices />
      <Cases
        leftTittle="CASES"
        rightTittle="SELECIONADOS"
      />
      <HomeCarousel />
    </>
  )
}