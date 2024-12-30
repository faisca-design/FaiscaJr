import styles from "./contact.module.css"
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function ContactText({ phrase, subPhrase }) {

    return (
        <div className={styles.contact}>
            <p className={styles.highText}> <StyledText text={phrase} /> </p>
            <div className={styles.lowTextAux}>
                <p className={styles.lowText}> <StyledText text={subPhrase}/> </p>
            </div>

            <div className={styles.Separator}>
                <hr className={styles.HRSeparator} />
            </div>
        </div>
    )



}
export default ContactText