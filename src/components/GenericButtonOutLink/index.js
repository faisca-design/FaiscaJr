import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericOutLink.module.css';

function GenericOutLink({ buttonText, outLink }) {
    return (
        <div>
            <a href={outLink} className={styles.redirect} target="_blank" rel="noopener noreferrer">
                <BsArrowUpRight size="2vh" color="#000" />
                <p className={styles.buttonText}> {buttonText} </p>
            </a>
        </div>
    );
}

export default GenericOutLink;
