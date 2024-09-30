'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProManegers from "@components/projeto/ProjectManagers";
import ProjectBanner from "@components/projeto/ProjectBanner";
import ProjectPurpose from "@components/projeto/ProjectPurpose";
import ProjectServices from "@components/projeto/ProjectServices"
import ProjectValues from "@components/projeto/ProjectValues"
import ProjectCarousel from "@components/projeto/ProjectCarousel";
import GenericOutLink from "@/components/GenericButtonOutLink";
import styles from "./styles.module.css";
import { projectData } from "./../../../data/projectData"


export default function Page() {
  const params = useParams();
  const [projetoAtual, setProjetoAtual] = useState(null);

  useEffect(() => {
    const nomeProjeto = params.projectName;
    console.log("Nome do projeto:", nomeProjeto);
    const projeto = projectData[nomeProjeto] || projectData["GBAdvocacia"];
    setProjetoAtual(projeto);
    console.log("Projeto atual:", projeto);
  }, [params.projectName]);

  if (!projetoAtual) {
    return <div>Carregando...</div>;
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
        <ProManegers ProGerente={projetoAtual.gerente} projetista={projetoAtual.projetistas} />
        <GenericOutLink buttonText={projetoAtual.bottonText} outLink={projetoAtual.behanceLink} />
      </div>
      <ProjectCarousel />
    </>
  );
}