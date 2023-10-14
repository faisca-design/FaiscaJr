import '../styles/globals.css'

import BannerFaisca from '@/components/BannerFaisca'
import LearnMoreSection from '@/components/LearnMoreSection'
import OurServices from '@/components/OurServices'

export default function Home() {
  return (
    <>
      <BannerFaisca/>
      <LearnMoreSection />
      <OurServices />
    </>
  )
}