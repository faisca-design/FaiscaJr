import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericOutLink from "@/components/GenericButtonOutLink";
import ClientRefreshWrapper from "@/components/ClientRefreshWrapper";
import styles from "./styles.module.css";
import { handleJSONfiles } from '@/utils/functions/jsonHandler';

function normalizeName(name) {
  return decodeURIComponent(name)
    .toLowerCase()
    .replace(/\s+/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Carrega TODOS os projetos durante o BUILD
async function getAllProjects() {
  try {
    const projects = await handleJSONfiles('content/projetos');
    return projects || [];
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// Gera os paths estáticos
export async function generateStaticParams() {
  const projects = await getAllProjects();
  
  return projects.map((projeto) => ({
    projectName: normalizeName(projeto.nome_projeto),
  }));
}

// Componente principal
export default async function Page({ params }) {
  const projects = await getAllProjects();
  const projectNameNormalized = normalizeName(params.projectName);
  const projetoAtual = projects.find(p => 
    normalizeName(p.nome_projeto) === projectNameNormalized
  );

  if (!projetoAtual) {
    return (
      <div>
        <h1>Projeto não encontrado</h1>
        <p>Nome buscado: {params.projectName}</p>
      </div>
    );
  }

  return (
    <>
      <ProjectBanner imagem={projetoAtual.imagemCapa} />
      <ProjectPurpose texto={projetoAtual.textoPurpose} imagem={projetoAtual.imagemSubCapa} />
      <ProjectServices
        titulo1={projetoAtual.t1Services}
        titulo2={projetoAtual.t2Services}
        titulo3={projetoAtual.t3Services}
        imageLeft={projetoAtual.imageLeftSer}
        imageRight={projetoAtual.imageRightSer}
        imageBottom={projetoAtual.imageBottomSer}
      />
      <ProjectValues
        titulo1={projetoAtual.t1Values}
        titulo2={projetoAtual.t2Values}
        titulo3={projetoAtual.t3Values}
        imageLeft={projetoAtual.imageLeftVal}
        imageRight={projetoAtual.imageRightVal}
      />
      <div className={styles.container}>
        <ProManegers
          ProGerente={projetoAtual.gerente}
          projetista={projetoAtual.projetistas}
        />
        <GenericOutLink
          buttonText={projetoAtual.bottonText}
          outLink={projetoAtual.behanceLink}
        />
      </div>
      <ProjectCarousel projetos={projetoAtual.relacionados} />
    </>
  );
}