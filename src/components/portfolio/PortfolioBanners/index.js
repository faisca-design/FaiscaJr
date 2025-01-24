'use client'

import { useState, useEffect } from 'react';
import Project from './Project';
import styles from './allBanners.module.css';

function BannersFaisca({ projects = [] }) {
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

  // Ordenar projetos pela ordem definida no CMS
  const sortedProjects = [...projects].sort((a, b) => a.ordem - b.ordem);

  // Cálculo do total de páginas
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  // Pegar os projetos da página atual
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

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

    // Páginas ao redor da página atual (+1 e -1)
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
            key={project.ordem}
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