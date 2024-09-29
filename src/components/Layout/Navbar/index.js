"use client";

import React, { useState } from 'react';
import Container from '../Container';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importa o hook para pegar o caminho atual

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // Usa o hook para obter o pathname atual

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${styles.fixedHeader}`}>
      <Container>
        {/* Botão Mobile */}
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>

        <ul className={`${styles.list} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li>
            <Link
              href="/"
              className={`${styles.link} ${pathname === '/' ? styles.bold : ''}`}
            >
              início
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nos"
              className={`${styles.link} ${pathname === '/sobre-nos' ? styles.bold : ''}`}
            >
              sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`${styles.link} ${pathname === '/portfolio' ? styles.bold : ''}`}
            >
              portfólio
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`${styles.link} ${pathname === '/contato' ? styles.bold : ''}`}
            >
              contato
            </Link>
          </li>
          <li>
            <Link
              href="/faisca"
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
