import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericOutLink from "@/components/GenericButtonOutLink";
import styles from "./styles.module.css";
import { handleJSONfiles } from '@/utils/functions/jsonHandler';

function normalizeName(name) {
  return decodeURIComponent(name)
    .toLowerCase()
    .replace(/\s+/g, '');
}

async function generateStaticParams() {
  const projetos = handleJSONfiles('content/projetos');
  return projetos.map((projeto) => ({
    projectName: projeto.nome_projeto,
  }));
}

export default async function Page({ params }) {
  const projetos = handleJSONfiles('./content/projetos');
  const projetoAtual = projetos.find(p => 
    normalizeName(p.nome_projeto) === normalizeName(params.projectName)
  );

  if (!projetoAtual) {
    return (
      <div>
        <h1>Projeto não encontrado</h1>
        <p>Nome buscado: {params.projectName}</p>
        <pre>
          {JSON.stringify({
            params,
            projectName: params.projectName,
          }, null, 2)}
        </pre>
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
}