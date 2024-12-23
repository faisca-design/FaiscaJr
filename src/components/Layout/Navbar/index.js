"use client";

import React, { useState } from 'react';
import Container from '../Container';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import menu from "@img/mobileNavbarIcons/MenuNavbarCell.png"
import close from "@img/mobileNavbarIcons/CloseNavbarCell.png"
import faisca from "@img/mobileNavbarIcons/mobile_icon_header.png"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${styles.fixedHeader}`}>
      <Container>
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
        >
          <Image
            src={isMobileMenuOpen ? close : menu}
            alt={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            width={isMobileMenuOpen ? 25 : 40} 
            height={0} 
          />
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
       {/*   <li>
            <a
              href="https://www.instagram.com/faiscadesignjr/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              @faísca
            </a>
          </li>*/}
        </ul>
      </Container>
      <Link href="/" aria-label="Ir para a página inicial">
        <Image 
          src={faisca} 
          alt="Faísca Design Jr - Página Inicial" 
          width={55} 
          height={0} 
          className={styles.iconFaisca} 
        />
      </Link>
    </nav>
  );
}

export default Navbar;