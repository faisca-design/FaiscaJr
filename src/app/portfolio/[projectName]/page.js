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
import { getProjeto } from './../../../utils/functions/api';

export default function Page() {
  const params = useParams();
  const [projetoAtual, setProjetoAtual] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const projeto = await getProjeto(params.projectName);
        if (projeto) {
          setProjetoAtual(projeto);
          setError(null);
        } else {
          setError('Projeto não encontrado');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [params.projectName]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error || !projetoAtual) {
    return <div>
      {error || 'Projeto não encontrado'}
      <br />
      Nome buscado: {params.projectName}
    </div>;
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
          projetista={projetoAtual?.projetistas || []} // fallback
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