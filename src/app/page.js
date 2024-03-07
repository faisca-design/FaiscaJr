import '../styles/globals.css'

import BannerFaisca from '@/components/home/BannerFaisca'
import LearnMoreSection from '@/components/home/LearnMoreSection'
import OurServices from '@/components/home/OurServices'
import Cases from "@/components/home/Cases"
import Img from "@img/home/CaseRectangle.png"
import HomeCarousel from '@/components/home/HomeCarrousel'

export default function Home() {
  return (
    <>
      <BannerFaisca/>
      <LearnMoreSection />
      <OurServices />
      <Cases
        titulo1 ="CASES"
        titulo2 = "SELECIONADOS"
        imagem =  {Img}
        imagem2 = {Img}
        imagem3 = {Img}
        imagem4 = {Img}
        imagem5 = {Img}
        nomeprojeto1="nome do projeto"
        nomeprojeto2="nome do projeto"
        nomeprojeto3="nome do projeto"
        nomeprojeto4="nome do projeto"
        nomeprojeto5="nome do projeto"
      />
      <HomeCarousel/>
    </>
  )
}