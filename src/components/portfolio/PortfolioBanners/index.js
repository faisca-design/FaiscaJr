import chamasDaInsignificancia from '@img/portfolio/chamas.jpg';
import spotlight from '@img/portfolio/spotlight.jpg';
import zakto from '@img/portfolio/zakto.jpg';
import bakoBebidas from '@img/portfolio/bako.jpg';
import styles from './banners.module.css';
import Image from 'next/image';
import Link from 'next/link';

function BannersFaisca() {
    return (
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Link href="https://www.behance.net/gallery/106148143/Chamas-da-Insignificancia-Editorial?locale=pt_BR">
            <div className={styles.imageOverlay}>
              <Image src={chamasDaInsignificancia} alt="Chamas da Insignificância" className={styles.image} />
            </div>
          </Link>
          <div className={styles.textContainer}>
            <h1 className={styles.textTitle}>CHAMAS DA <br /> INSIGNIFICÂNCIA</h1>
            <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Link href="https://www.instagram.com/spotlight_connection/">
            <div className={styles.imageOverlay}>
              <Image src={spotlight} alt="Spotlight" className={styles.image} />
            </div>
          </Link>
          <div className={styles.textContainer}>
            <h1 className={styles.textTitle}>SPOT <br /> LIGHT</h1>
            <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Link href="https://www.behance.net/gallery/140464381/Zakto?tracking_source=search_projects|zakto&l=0">
            <div className={styles.imageOverlay}>
              <Image src={zakto} alt="Zakto" className={styles.image} />
            </div>
          </Link>
          <div className={styles.textContainer}>
            <h1 className={styles.textTitle}>ZAKTO</h1>
            <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Link href="https://www.behance.net/gallery/146840537/Bako-Bebidas?locale=pt_BR">
            <div className={styles.imageOverlay}>
              <Image src={bakoBebidas} alt="Bako Bebidas" className={styles.image} />
            </div>
          </Link>
          <div className={styles.textContainer}>
            <h1 className={styles.textTitle}>BAKO <br /> BEBIDAS</h1>
            <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
          </div>
        </div>
      </div>
    );
  }

export default BannersFaisca;