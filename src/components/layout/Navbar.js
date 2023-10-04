import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
            <Link
              to="faisca"
              className={`${styles.link} ${selectedItem === 'faisca' ? styles.bold : ''}`}
              onClick={() => handleItemClick('faisca')}
            >
              @faísca
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;