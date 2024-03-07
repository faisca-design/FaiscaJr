import { BsArrowUpRight } from "react-icons/bs";
import styles from './GenericButton.module.css'

function GenericButton({ ButtonText, OutLink }) {
    function handleButtonClick () {
        window.open( OutLink , '_blank');
    };

    return (
        <div>
            {/* <button className={styles.redirect} onClick={handleButtonClick}> comentei pq ta com erro :(*/}
            <button className={styles.redirect}>
                <BsArrowUpRight size="2vh" color="#000" />
                <p className={styles.buttonText}> {ButtonText} </p>

            </button>

        </div>
    );
}

export default GenericButton;