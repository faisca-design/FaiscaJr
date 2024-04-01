'use client'

import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericButton.module.css';
import { usePathname } from 'next/navigation'
import Link from 'next/link';


function GenericButton({ ButtonText, pathWay }) {
    const pathname = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link className={`${styles.redirect} link ${pathname === '/' ? 'active' : ''}`} href="/portfolio/oiiiQueridos">
                        <BsArrowUpRight size="2vh" color="#000" />
                        <p className={styles.buttonText}> {ButtonText} </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default GenericButton;