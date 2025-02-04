import PortfolioBanners from "@components/portfolio"
import { handleJSONfiles } from '@/utils/functions/jsonHandler'

async function getData() {
  const bannersData = await handleJSONfiles('./content/banners');
  
  if (!bannersData) {
    throw new Error('Failed to fetch banners data');
  }
  
  return {
    bannersData
  };
}

async function Portfolio(){
  const { bannersData } = await getData();
  
  return (
    <>
      <PortfolioBanners projects={bannersData}/>
    </>
  )
}

export default Portfolio