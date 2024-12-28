'use client'

import { useState, useEffect } from 'react';
import chamasDaInsignificancia from '@img/portfolio/chamas.jpg';
import spotlight from '@img/portfolio/spotlight.jpg';
import zakto from '@img/portfolio/zakto.jpg';
import bakoBebidas from '@img/portfolio/bako.jpg';
import bannerJK from '@img/portfolio/bannerJK.png';
import bannerNI from '@img/portfolio/bannerNI.png';
import bannerCN from '@img/portfolio/bannerCN.png';
import Project from './Project';
import styles from './allBanners.module.css';

function BannersFaisca() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const projects = [
    {
      path: "/portfolio/ChamasDaInsignificancia",
      image: chamasDaInsignificancia,
      erro: "Imagem não encontrada",
      titulo: "CHAMAS DA INSIGNIFICÂNCIA",
      desc: "DIAGRAMAÇÃO EDITORIAL"
    },
    {
      path: "/portfolio/SpotLight",
      image: spotlight,
      erro: "Imagem não encontrada",
      titulo: "SPOT LIGHT",
      desc: "IDENTIDADE VISUAL APLICAÇÕES"
    },
    {
      path: "/portfolio/Zakto",
      image: zakto,
      erro: "Imagem não encontrada",
      titulo: "ZAKTO",
      desc: "DIAGRAMAÇÃO EDITORIAL"
    },
    {
      path: "/portfolio/BakoBebidas",
      image: bakoBebidas,
      erro: "Imagem não encontrada",
      titulo: "BAKO BEBIDAS",
      desc: "IDENTIDADE VISUAL APLICAÇÕES"
    },
    {
      path: "/portfolio/Jeikoa",
      image: bannerJK,
      erro: "Imagem não encontrada",
      titulo: "JEIKOA",
      desc: "IDENTIDADE VISUAL APLICAÇÕES"
    },
    {
      path: "/portfolio/NucleoImpulso",
      image: bannerNI,
      erro: "Imagem não encontrada",
      titulo: "NÚCLEO IMPULSO",
      desc: "IDENTIDADE VISUAL APLICAÇÕES"
    },
    {
      path: "/portfolio/CocoNude",
      image: bannerCN,
      erro: "Imagem não encontrada",
      titulo: "COCO NUDE",
      desc: "IDENTIDADE VISUAL APLICAÇÕES"
    },
  ];

  // Cálculo do total de páginas
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Pegar os projetos da página atual
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPaginationRange = () => {
    let pages = [];
    const DOTS = '...';
    
    if (totalPages <= 7) {
      // Se tiver 7 ou menos páginas, mostra todas
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Sempre inclui primeira página
    pages.push(1);

    if (currentPage > 3) {
      pages.push(DOTS);
    }

    // Páginas ao redor da página atual
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push(DOTS);
    }

    // Sempre inclui última página
    if(totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={styles.container}>
      <div className={styles.projectsGrid}>
        {currentProjects.map((project, index) => (
          <Project
            key={index}
            path={project.path}
            image={project.image}
            erro={project.erro}
            titulo={project.titulo}
            desc={project.desc}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {getPaginationRange().map((page, index) => (
            page === '...' ? (
              <span key={`dots-${index}`} className={styles.dots}>...</span>
            ) : (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
              >
                {page}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export default BannersFaisca;
