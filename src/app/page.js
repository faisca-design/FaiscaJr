import '../styles/globals.css'

import BannerFaisca from '@/components/home/BannerFaisca'
import LearnMoreSection from '@/components/home/LearnMoreSection'
import OurServices from '@/components/home/OurServices'
import Cases from "@/components/home/Cases"
import Img from "@img/home/RetanguloIlustrativo.png"
import HomeCarousel from '@/components/home/HomeCarrousel'

export default function Home() {
  return (
    <>
      <BannerFaisca/>
      <LearnMoreSection />
      <OurServices />
      <Cases
        titulo1 ="texto1"
        titulo2 = "texto2"
        imagem = {Img}
        imagem2 = {Img}
        imagem3 = {Img}
        imagem4 = {Img}
        imagem5 = {Img}
        nomeprojeto1="projeto1"
        nomeprojeto2="projeto2"
        nomeprojeto3="projeto3"
        nomeprojeto4="projeto4"
        nomeprojeto5="projeto5"
      />
      <HomeCarousel/>
    </>
  )
}