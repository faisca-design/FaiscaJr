'use client'

import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericButton.module.css';
import Link from 'next/link';

function GenericButton({ ButtonText, pathWay }) {
    return (
        <nav>
            <ul>
                <li>
                    <Link className={styles.redirect} href={pathWay || '#'} passHref>
                        <BsArrowUpRight size="2vh" color="#000" />
                        <p className={styles.buttonText}>{ButtonText}</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default GenericButton;


