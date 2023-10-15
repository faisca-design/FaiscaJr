import salaFaisca from '@img/sobreNos/sala.jpg';
import laboratorioFaisca from '@img/sobreNos/laboratorio.jpg';
import bibliotecaFaisca from '@img/sobreNos/biblioteca.jpg';
import labModFaisca from '@img/sobreNos/labmod.jpg';
import Image from 'next/image';
import styles from "./structure.module.css"

function EstruturaFaisca() {
  return (
    <div>
      <div className={styles.containerStyle}>
        <div className={styles.middleContainerStyle}>
          <div className={styles.introTextContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>ESTRUTURA</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}><br />A Faísca, empresa júnior de design da UFRGS, conta com uma estrutura de trabalho completa e moderna, que inclui equipamentos de alta tecnologia, salas de reunião e espaço de convivência para a equipe. Além disso, a empresa tem acesso a diversas bibliotecas da universidade, o que possibilita o acesso a uma vasta gama de materiais de pesquisa e literatura técnica.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerStyle}>
        <div className={styles.leftContainerStyle}>
          <Image src={salaFaisca} alt="Sala da Faísca" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Sala da <br /> Faísca</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Nosso espaço exclusivo para <br /> desenvolvimento dos projetos.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerStyle}>
        <div className={styles.rightContainerStyle}>
          <Image src={laboratorioFaisca} alt="Laboratório de protótipo e ensaios" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Laboratório <br /> de protótipo <br /> e ensaios</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Temos acesso a um maquinário de <br /> alta tecnologia disponibilizado pela universidade para a realização de <br /> seus projetos. Entre as ferramentas <br /> disponíveis, destacam-se o corte a <br /> laser e o CNC.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerStyle}>
        <div className={styles.leftContainerStyle}>
          <Image src={bibliotecaFaisca} alt="Biblioteca" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Biblioteca</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Um acervo completo sobre <br /> design está à nossa disposição.</p>
          </div>
        </div>
      </div>
      <div className={styles.containerStyle}>
        <div className={styles.rightContainerStyle}>
          <Image src={labModFaisca} alt="LabMod" className={styles.imageStyle} />
          <div className={styles.textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>LabMod</h1>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>LABORATÓRIO <br /> INTERDISCIPLINAR DE <br /> MODELAGEM</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Entregamos protótipos e estudamos <br /> formas para melhor atender as suas necessidades. Para isso, contamos <br /> com um laboratório completo de <br /> impressoras 3D.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default EstruturaFaisca