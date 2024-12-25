import LearnMoreSection from '@/components/home/LearnMoreSection';
import OurServices from '@/components/home/OurServices';
import Cases from "@/components/home/Cases";
import HomeCarousel from '@/components/home/HomeCarrousel';
import BannerHome from "@components/home/BannerHome"

import logobanner from "@img/home/BannerLogo.svg";

export default function Home() {


  return (
    <>
      <BannerHome 
      purpose={"PROPORCIONAMOS SOLUÇÕES CRIATIVAS PARA PROJETOS EXCLUSIVOS"}
      tittle={"SOMOS A FAÍSCA!"} 
      companyDesc={"UMA EMPRESA JÚNIOR DE DESIGN VISUAL E DE PRODUTO DA UFRGS"} 
      logo={logobanner} 
      />

      <LearnMoreSection 
      desc={"nós fazemos design de um jeito que você nunca viu"} 
      buttonphrase={"Vem impulsionar sua marca"} 
      buttonRoute={'/contato'} 
      />

      <OurServices 
      tittleAllServices={"NOSSOS SERVIÇOS"} 
      />

      <Cases 
      phraseCases={"encontramos soluções ideais para cada tipo de desafio"} 
      leftTittle="CASES" 
      rightTittle="SELECIONADOS"
      buttonphrase={"Mais Projetos"} 
      buttonRoute={'/portfolio'} 
      />

      <HomeCarousel 
      tittleReviews={"O QUE NOSSOS CLIENTES TEM A DIZER"} 
      />
      
    </>
  );
}
