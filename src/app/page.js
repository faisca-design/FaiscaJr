import '../styles/globals.css'

import BannerFaisca from '@components/BannerFaisca'
import LearnMoreSection from '@components/LearnMoreSection'
import OurServices from '@components/OurServices'
import Cases from "@components/Cases"
import Img from "@img/RetanguloIlustrativo.png"

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
    </>
  )
}