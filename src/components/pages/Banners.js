import chamasDaInsignificancia from './bannerPictures/chamas.jpg';
import spotlight from './bannerPictures/spotlight.jpg';
import zakto from './bannerPictures/zakto.jpg';
import bakoBebidas from './bannerPictures/bako.jpg';
import styles from './Banners.module.css';

function BannersFaisca() {
  return (
    <div className={styles.topContainer}>
      <div className={styles.imageContainer}>
        <img src={chamasDaInsignificancia} alt="Chamas da Insignificância" className={styles.image} />
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>CHAMAS DA <br /> INSIGNIFICÂNCIA</h1>
          <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
        </div>
      </div>
          <div className={styles.imageContainer}>
            <img src={spotlight} alt="Spotlight" className={styles.image} />
            <div className={styles.textContainer}>
              <h1 className={styles.textTitle}>SPOT <br /> LIGHT</h1>
              <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
            </div>
          </div>
        <div className={styles.imageContainer}>
          <img src={zakto} alt="Zakto" className={styles.image} />
          <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>ZAKTO</h1>
          <p className={styles.textDescription}>DIAGRAMAÇÃO <br /> EDITORIAL</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={bakoBebidas} alt="Bako Bebidas" className={styles.image} />
          <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>BAKO <br /> BEBIDAS</h1>
          <p className={styles.textDescription}>IDENTIDADE VISUAL <br /> APLICAÇÕES</p>
          </div>
        </div>
      </div>
    );
  }  

export default BannersFaisca;