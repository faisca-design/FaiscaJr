import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericOutLink.module.css'
import Link from 'next/link';

function GenericButtonOutLink({ ButtonText, outLink}) {

    return (
        <div>
            <Link href={outLink} passHref>
            <button className={styles.redirect}>
                <BsArrowUpRight size="2vh" color="#000" />
                <p className={styles.buttonText}> {ButtonText} </p>

            </button>
            </Link>
        </div>
    );
}

export default GenericButtonOutLink;