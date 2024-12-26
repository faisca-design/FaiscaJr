import { handleJSONfile, handleJSONfiles } from './../utils/functions/jsonHandler.js'; 
import BannerHome from "@components/home/BannerHome";
import LearnMoreSection from '@/components/home/LearnMoreSection';
import OurServices from '@/components/home/OurServices';
import Cases from "@/components/home/Cases";
import HomeCarousel from '@/components/home/HomeCarrousel';

async function getData() {
  const homeData = await handleJSONfile('./content/homePage/homePage.json');
  const reviewsData = await handleJSONfiles('./content/reviews');

  if (!homeData) {
    throw new Error('Failed to fetch home data');
  }

  return {
    homeData,
    reviewsData
  };
}

export default async function Home() {
  const { homeData, reviewsData } = await getData();
  const { banner, learnMore, services, cases, reviews } = homeData;

  return (
    <>
      <BannerHome
        purpose={banner.purpose}
        tittle={banner.tittle}
        companyDesc={banner.companyDesc}
        logo={banner.logo}
      />

      <LearnMoreSection
        desc={learnMore.desc}
        buttonphrase={learnMore.buttonPhrase}
        buttonRoute={learnMore.buttonRoute}
      />

      <OurServices
        tittleAllServices={services.titleAllServices}
      />

      <Cases
        phraseCases={cases.phraseCases}
        leftTittle={cases.leftTitle}
        rightTittle={cases.rightTitle}
        buttonphrase={cases.buttonPhrase}
        buttonRoute={cases.buttonRoute}
      />

      <HomeCarousel
        tittleReviews={reviews.titleReviews}
        depoimentos={reviewsData}
      />
    </>
  );
}

