import styles from "./bannerHome.module.css";
import logobanner from "@img/home/BannerLogo.svg";

import Image from 'next/image';

export default function BannerHome() {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1 className={styles.text}>
                        PROPORCIONAMOS SOLUÇÕES CRIATIVAS PARA PROJETOS EXCLUSIVOS
                    </h1>
                </div>
                <Image className={styles.image} src={logobanner} alt="nome" />
                <div className={styles.subTextContainer}>
                    <h2 className={styles.subTextTitle}>SOMOS A FAÍSCA!</h2>
                    <p className={styles.subTextDescription}>
                        UMA EMPRESA JÚNIOR DE DESIGN VISUAL E DE PRODUTO DA UFRGS
                    </p>
                </div>
            </div>
        </div>
    );
}
