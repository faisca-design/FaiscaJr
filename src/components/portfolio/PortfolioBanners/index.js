import chamasDaInsignificancia from '@img/portfolio/chamas.jpg';
import spotlight from '@img/portfolio/spotlight.jpg';
import zakto from '@img/portfolio/zakto.jpg';
import bakoBebidas from '@img/portfolio/bako.jpg';
import bannerJK from '@img/portfolio/bannerJK.png';
import bannerNI from '@img/portfolio/bannerNI.png';
import bannerCN from '@img/portfolio/bannerCN.png';

import Project from './Project';

function BannersFaisca() {
  return (
    <div>
      <Project
        path="/portfolio/ChamasDaInsignificancia"
        image={chamasDaInsignificancia}
        erro="Imagem não encontrada"
        titulo="CHAMAS DA INSIGNIFICÂNCIA"
        desc="DIAGRAMAÇÃO EDITORIAL"
      />

      <Project
        path="/portfolio/SpotLight"
        image={spotlight}
        erro="Imagem não encontrada"
        titulo="SPOT LIGHT"
        desc="IDENTIDADE VISUAL APLICAÇÕES"
      />

      <Project
        path="/portfolio/Zakto"
        image={zakto}
        erro="Imagem não encontrada"
        titulo="ZAKTO"
        desc="DIAGRAMAÇÃO EDITORIAL"
      />

      <Project
        path="/portfolio/BakoBebidas"
        image={bakoBebidas}
        erro="Imagem não encontrada"
        titulo="BAKO BEBIDAS"
        desc="IDENTIDADE VISUAL APLICAÇÕES"
      />

      <Project
        path="/portfolio/Jeikoa"
        image={bannerJK}
        erro="Imagem não encontrada"
        titulo="JEIKOA"
        desc="IDENTIDADE VISUAL APLICAÇÕES"
      />

      <Project
        path="/portfolio/NucleoImpulso"
        image={bannerNI}
        erro="Imagem não encontrada"
        titulo="NÚCLEO IMPULSO"
        desc="IDENTIDADE VISUAL APLICAÇÕES"
      />

      <Project
        path="/portfolio/CocoNude"
        image={bannerCN}
        erro="Imagem não encontrada"
        titulo="COCO NUDE"
        desc="IDENTIDADE VISUAL APLICAÇÕES"
      />
    </div>
  );
}

export default BannersFaisca;