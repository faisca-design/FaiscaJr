'use client'

import Image from 'next/image';
import { useState } from 'react';
import styles from './cases.module.css';

function Cases({ imag, ProjectName }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.cases}>
            <div className={styles.imageContainer} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Image src={imag} alt='case' width={0} height={0} layout="responsive" className={isHovered ? styles.colorfulImage : styles.grayscaleImage} />
                <h2 className={styles.projectName}>{ProjectName}</h2>
            </div>
        </section>
    );
}

export default Cases;
