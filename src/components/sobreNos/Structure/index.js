// EstruturaFaisca.js
import React from 'react';
import styles from "./structure.module.css";
import Image from 'next/image';

import salaFaisca from '@img/sobreNos/sala.jpg';
import laboratorioFaisca from '@img/sobreNos/laboratorio.jpg';
import bibliotecaFaisca from '@img/sobreNos/biblioteca.jpg';
import labModFaisca from '@img/sobreNos/labmod.jpg';

function EstruturaFaisca() {
  return (
    <div>
      <div className={styles.containerStyle}>
        <div className={styles.middleContainerStyle}>
          <div className={styles.introTextContainerStyle}>
            <h1>ESTRUTURA</h1>
            <p><br />A Faísca, empresa júnior de design da UFRGS, conta com uma estrutura de trabalho completa e moderna, que inclui equipamentos de alta tecnologia, salas de reunião e espaço de convivência para a equipe. Além disso, a empresa tem acesso a diversas bibliotecas da universidade, o que possibilita o acesso a uma vasta gama de materiais de pesquisa e literatura técnica.</p>
          </div>
        </div>
      </div>

      <div className={styles.containerStyle}>
        <div className={styles.leftContainerStyle}>
          <Image src={salaFaisca} alt="Sala da Faísca" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1>Sala da <br /> Faísca</h1>
            <p>Nosso espaço exclusivo para <br /> desenvolvimento dos projetos.</p>
          </div>
        </div>
      </div>

      <div className={styles.containerStyle}>
        <div className={styles.rightContainerStyle}>
          <Image src={laboratorioFaisca} alt="Laboratório de protótipo e ensaios" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1>Laboratório <br /> de protótipo <br /> e ensaios</h1>
            <p>Temos acesso a um maquinário de alta tecnologia disponibilizado pela universidade para a realização de seus projetos. Entre as ferramentas disponíveis, destacam-se o corte a laser e o CNC.</p>
          </div>
        </div>
      </div>

      <div className={styles.containerStyle}>
        <div className={styles.leftContainerStyle}>
          <Image src={bibliotecaFaisca} alt="Biblioteca" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1>Biblioteca</h1>
            <p>Um acervo completo sobre <br /> design está à nossa disposição.</p>
          </div>
        </div>
      </div>

      <div className={styles.containerStyle}>
        <div className={styles.rightContainerStyle}>
          <Image src={labModFaisca} alt="LabMod" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1>LabMod</h1>
            <h2 className={styles.subTitle}>LABORATÓRIO <br /> INTERDISCIPLINAR DE <br /> MODELAGEM</h2>
            <p>Entregamos protótipos e estudamos formas para melhor atender as suas necessidades. Para isso, contamos com um laboratório completo de impressoras 3D.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstruturaFaisca;
