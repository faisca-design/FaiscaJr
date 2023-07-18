import { BsArrowUpRight } from "react-icons/bs";
import styles from './../../styles/GenericButton.module.css'

function GenericButton({ ButtonText, OutLink }) {
    function handleButtonClick () {
        window.open( OutLink , '_blank');
    };

    return (
        <div>
            <button className={styles.redirect} onClick={handleButtonClick}>
                <BsArrowUpRight size={15} color="#000" />
                <p className={styles.buttonText}> {ButtonText} </p>

            </button>

        </div>
    );
}

export default GenericButton;