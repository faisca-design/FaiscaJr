import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const redirecionarParaFaisca = () => {
    window.location.href = 'https://www.instagram.com/faiscadesignjr/';
  };

  return (
    <nav className={`${styles.navbar} ${styles.fixedHeader}`}>
      <Container>
        <ul className={styles.list}>
          <li>
            <Link
              to="/inicio"
              className={`${styles.link} ${selectedItem === 'inicio' ? styles.bold : ''}`}
              onClick={() => handleItemClick('inicio')}
            >
              início
            </Link>
          </li>
          <li>
            <Link
              to="/sobrenos"
              className={`${styles.link} ${selectedItem === 'sobrenos' ? styles.bold : ''}`}
              onClick={() => handleItemClick('sobrenos')}
            >
              sobre nós
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`${styles.link} ${selectedItem === 'portfolio' ? styles.bold : ''}`}
              onClick={() => handleItemClick('portfolio')}
            >
              portfólio
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={`${styles.link} ${selectedItem === 'contato' ? styles.bold : ''}`}
              onClick={() => handleItemClick('contato')}
            >
              contato
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/faiscadesignjr/"
              className={`${styles.link} ${selectedItem === 'faisca' ? styles.bold : ''}`}
              onClick={redirecionarParaFaisca}
            >
              @faísca
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;