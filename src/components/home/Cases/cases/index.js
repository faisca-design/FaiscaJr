"use client"

import { useState } from 'react';
import Link from 'next/link';
import styles from './cases.module.css';

function Cases({ imag, ProjectName, projectPath }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={projectPath} className={styles.projectLink}>
            <div 
                className={styles.imageContainer}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={imag}
                    alt={ProjectName}
                    className={styles.image}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.textContainer}>
                    <h3 className={styles.textTitle}>{ProjectName}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Cases;