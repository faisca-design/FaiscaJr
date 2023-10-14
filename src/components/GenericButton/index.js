import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericButton.module.css'

function GenericButton({ ButtonText }) {

    return (
        <div>
            <button className={styles.redirect}>
                <BsArrowUpRight size={15} color="#000" />
                <p className={styles.buttonText}> {ButtonText} </p>

            </button>

        </div>
    );
}

export default GenericButton;