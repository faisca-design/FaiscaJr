"use client";

import React, { useState } from 'react';
import Container from '../Container';
import styles from './Navbar.module.css';
import Link from 'next/link';

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
              href="/"
              className={`${styles.link} ${selectedItem === 'inicio' ? styles.bold : ''}`}
              onClick={() => handleItemClick('inicio')}
            >
              início
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nos"
              className={`${styles.link} ${selectedItem === 'sobrenos' ? styles.bold : ''}`}
              onClick={() => handleItemClick('sobrenos')}
            >
              sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`${styles.link} ${selectedItem === 'portfolio' ? styles.bold : ''}`}
              onClick={() => handleItemClick('portfolio')}
            >
              portfólio
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`${styles.link} ${selectedItem === 'contato' ? styles.bold : ''}`}
              onClick={() => handleItemClick('contato')}
            >
              contato
            </Link>
          </li>
          <li>
            <Link
              href="faisca"
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