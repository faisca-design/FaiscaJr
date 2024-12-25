import styles from "./bannerHome.module.css";

import Image from 'next/image';

export default function BannerHome({purpose, tittle, companyDesc, logo}) {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1 className={styles.text}>
                        {purpose}
                    </h1>
                </div>
                <Image className={styles.image} src={logo} alt="logo faísca" />
                <div className={styles.subTextContainer}>
                    <h2 className={styles.subTextTitle}>{tittle}</h2>
                    <p className={styles.subTextDescription}>
                        {companyDesc}
                    </p>
                </div>
            </div>
        </div>
    );
}
