import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericOutLink from "@/components/GenericButtonOutLink";
import styles from "./styles.module.css";

export default function Page({ params }) {
  const projetistas = ["Fulano da Silvinha", "Ciclaninho dos Santos"];

  return (
    <>
      <ProjectBanner />
      <ProjectPurpose />
      <ProjectServices
        titulo1="site"
        titulo2="identidade visual"
        titulo3="rótulo"
      />
      <ProjectValues
        titulo1="força"
        titulo2="energia vibrante"
        titulo3="vibrante"
      />

      <div className={styles.container}>
        <ProManegers ProGerente="Fulano da Silvinha" projetista={projetistas} />
        <GenericOutLink buttonText="veja mais no nosso Behance!" outLink="https://www.behance.net/" />
      </div>

      <ProjectCarousel />
    </>
  )
}