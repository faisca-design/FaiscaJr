import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericButton from "@/components/GenericButton";
import styles from "./styles.module.css"

export default function Page({ params }) {
  const projetistas = ["Fulano da Silvinha", "Ciclaninho dos Santos"];

  return (
    <>
      <p style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}>
        nome do projeto: {params.projectName} (apenas pra teste)
      </p>
      <ProjectBanner />
      <ProjectPurpose />
      <ProjectServices
        titulo1="titulo1"
        titulo2="titulo2"
        titulo3="titulo3"
      />
      <ProjectValues
        titulo1="titulo1"
        titulo2="titulo2"
        titulo3="titulo3"
      />

      <div className={styles.container}>
        <ProManegers ProGerente="Fulano da Silvinha" projetista={projetistas} />
        <GenericButton ButtonText={"Veja mais no nosso behance!"} OutLink={'/portfolio/oiiiQueridos'}/>
      </div>

      <ProjectCarousel />
    </>
  )
}