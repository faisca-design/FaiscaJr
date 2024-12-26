'use client'

import { useState } from 'react';
import styles from './service.module.css';

function Service(prop) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.service}>
            <div 
                className={styles.serviceHeader}
                onClick={toggleDescription}
                role="button"
                tabIndex={0}
            >
                <p>{prop.servico}</p>
                <hr />
            </div>
            {isOpen && (
                <div className={styles.description}>
                    {prop.description}
                </div>
            )}
        </div>
    );
}

export default Service;