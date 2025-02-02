"use client";

import React, { useState, useEffect } from 'react';
import Container from '../Container';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function Navbar({ optionOne, optionTwo, optionThree, optionFour, menuOpenIcon, menuCloseIcon, mobileLogoIcon }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${styles.fixedHeader}`}>
      <Container>
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
        >
          <Image
            src={isMobileMenuOpen ? menuCloseIcon : menuOpenIcon}
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
              {optionOne}
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nos"
              className={`${styles.link} ${pathname === '/sobre-nos/' ? styles.bold : ''}`}
            >
              {optionTwo}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`${styles.link} ${pathname === '/portfolio/' ? styles.bold : ''}`}
            >
              {optionThree}
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`${styles.link} ${pathname === '/contato/' ? styles.bold : ''}`}
            >
              {optionFour}
            </Link>
          </li>
        </ul>
      </Container>
      <Link href="/" aria-label="Ir para a página inicial">
        <Image 
          src={mobileLogoIcon} 
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