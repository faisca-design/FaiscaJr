import salaFaisca from './structurePictures/sala.jpg';
import laboratorioFaisca from './structurePictures/laboratorio.jpg';
import bibliotecaFaisca from './structurePictures/biblioteca.jpg';
import labModFaisca from './structurePictures/labmod.jpg';

function EstruturaFaisca() {

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    maxWidth: '2000px',
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '120px',
  };

  const imageStyle = {
    marginRight: '50px',
  };

  const textContainerStyle = {
    maxWidth: '40%',
  };

  const introTextContainerStyle = {
    maxWidth: '70%',
    textAlign: 'center',
  };

  const leftContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const middleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rightContainerStyle = {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={middleContainerStyle}>
          <div style={introTextContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>ESTRUTURA</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}><br/ >A Faísca, empresa júnior de design da UFRGS, conta com uma estrutura de trabalho completa e moderna, que inclui equipamentos de alta tecnologia, salas de reunião e espaço de convivência para a equipe. Além disso, a empresa tem acesso a diversas bibliotecas da universidade, o que possibilita o acesso a uma vasta gama de materiais de pesquisa e literatura técnica.</p>
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={leftContainerStyle}>
          <img src={salaFaisca} alt="Sala da Faísca" style={imageStyle} />
          <div style={textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Sala da <br /> Faísca</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Nosso espaço exclusivo para <br /> desenvolvimento dos projetos.</p>
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={rightContainerStyle}>
          <img src={laboratorioFaisca} alt="Laboratório de protótipo e ensaios" style={imageStyle} />
          <div style={textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Laboratório <br /> de protótipo <br /> e ensaios</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold'}}>Temos acesso a um maquinário de <br /> alta tecnologia disponibilizado pela universidade para a realização de <br /> seus projetos. Entre as ferramentas <br /> disponíveis, destacam-se o corte a <br /> laser e o CNC.</p>
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={leftContainerStyle}>
          <img src={bibliotecaFaisca} alt="Biblioteca" style={imageStyle} />
          <div style={textContainerStyle}>
            <h1 style={{ fontSize: '40px' }}>Biblioteca</h1>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Um acervo completo sobre <br /> design está à nossa disposição.</p>
          </div>
        </div>
      </div>
      <div style={containerStyle}>
        <div style={rightContainerStyle}>
          <img src={labModFaisca} alt="LabMod" style={imageStyle} />
          <div style={textContainerStyle}>
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