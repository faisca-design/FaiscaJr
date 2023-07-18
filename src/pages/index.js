import styles from './../styles/projetistasMainCon.module.css'
import ProManegers from './../components/components/ProManagers';
import GenericButton from './../components/components/GenericButton';


function App() {

const projetistas = ["Fulano da Silvinha", "Ciclaninho dos Santos"];
  return (
    <div className={styles.Container}>
      
      <ProManegers ProGerente = "Fulano da Silvinha" projetista = { projetistas } />
      <GenericButton ButtonText="Veja mais no nosso behance!" OutLink='https://www.behance.net/'/>

    </div>

  );
}

export default App;
