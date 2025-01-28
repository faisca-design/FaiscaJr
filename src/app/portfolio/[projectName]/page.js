import { join } from 'path';
import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericOutLink from "@/components/GenericButtonOutLink";
import styles from "./styles.module.css";
import { handleJSONfiles } from '@/utils/functions/jsonHandler';

function getProjectsPath() {
  return join(process.cwd(), 'content', 'projetos');
}

function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export async function generateStaticParams() {
  try {
    const projectsPath = getProjectsPath();
    const projects = handleJSONfiles(projectsPath);
    
    return projects.map((project) => ({
      projectName: normalizeName(project.nome_projeto)
    }));
  } catch (error) {
    console.error('Error generating params:', error);
    return [];
  }
}

export default async function ProjectPage({ params }) {
  try {
    const projectsPath = getProjectsPath();
    const projects = handleJSONfiles(projectsPath);
    
    const projetoAtual = projects.find(project => {
      const normalizedProjectName = normalizeName(project.nome_projeto);
      const normalizedParamName = normalizeName(params.projectName);
      console.log(`Comparando: ${normalizedProjectName} com ${normalizedParamName}`);
      return normalizedProjectName === normalizedParamName;
    });

    if (!projetoAtual) {
      console.log('Projeto não encontrado. Projetos disponíveis:', projects.map(p => p.nome_projeto));
      return (
        <div>
          <h1>Projeto não encontrado</h1>
          <p>Nome buscado: {params.projectName}</p>
        </div>
      );
    }

    return (
      <>
        <ProjectBanner
          imagem={projetoAtual.imagemCapa}
        />
        <ProjectPurpose
          texto={projetoAtual.textoPurpose}
          imagem={projetoAtual.imagemSubCapa}
        />
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
  } catch (error) {
    console.error('Error loading project:', error);
    return (
      <div>
        <h1>Erro ao carregar o projeto</h1>
        <p>Por favor, tente novamente mais tarde.</p>
      </div>
    );
  }
}