import chamasDaInsignificancia from '@img/portfolio/chamas.jpg';
import spotlight from '@img/portfolio/spotlight.jpg';
import zakto from '@img/portfolio/zakto.jpg';
import bakoBebidas from '@img/portfolio/bako.jpg';
import styles from './banners.module.css';
import Image from 'next/image';

function BannersFaisca() {
  return (
        <div className={styles.topContainer}>
            <div className={styles.imageContainer}>
                <Image src={chamasDaInsignificancia} alt="Chamas da Insignificância" className={styles.image} />
                <div className={styles.textContainer}>
                    <h1 className={styles.textTitle}>CHAMAS DA <br /> INSIGNIFICÂNCIA</h1>
                    <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={spotlight} alt="Spotlight" className={styles.image} />
                <div className={styles.textContainer}>
                    <h1 className={styles.textTitle}>SPOT <br /> LIGHT</h1>
                    <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={zakto} alt="Zakto" className={styles.image} />
                <div className={styles.textContainer}>
                    <h1 className={styles.textTitle}>ZAKTO</h1>
                    <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={bakoBebidas} alt="Bako Bebidas" className={styles.image} />
                <div className={styles.textContainer}>
                    <h1 className={styles.textTitle}>BAKO <br /> BEBIDAS</h1>
                    <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
                </div>
            </div>
        </div>
    );
}  

export default BannersFaisca;