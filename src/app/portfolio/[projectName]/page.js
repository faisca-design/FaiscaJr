import ProManegers from "@/components/ProManagers";
import ProjectBanner from "@components/ProjectBanner";
import ProjectPurpose from "@components/ProjectPurpose";
import ProjectServices from "@components/ProjectServices"
import ProjectValues from "@components/ProjectValues"
import GenericButton from "@components/GenericButton"
import styles from "./styles.module.css"
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Page({params}) {
  const projetistas = ["Fulano da Silvinha", "Ciclaninho dos Santos"];
 
  return (
    <>
      <p style={{color: 'white', marginTop: '20px', textAlign: 'center'}}>
        nome do projeto: {params.projectName} (apenas pra teste)
      </p>
      <ProjectBanner/>
      <ProjectPurpose/>
      <ProjectServices
        titulo1 ="titulo1"
        titulo2 ="titulo2"
        titulo3 ="titulo3"
      />
      <ProjectValues
        titulo1 ="titulo1"
        titulo2 ="titulo2"
        titulo3 ="titulo3"
      />

      <div className={styles.container}>
        <ProManegers ProGerente = "Fulano da Silvinha" projetista = { projetistas } />
        <GenericButton ButtonText="Veja mais no nosso behance!" OutLink='https://www.behance.net/'/>
      </div>

      <ProjectCarousel />
    </>
  )
}