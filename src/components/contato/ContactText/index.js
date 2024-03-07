import styles from "./contact.module.css"

function ContactText(){
    var TextLow = "de acordo com o Instituto de Gestão de Design em Boston, EUA";

    return(
        <div className={styles.contact}>
                <p className={styles.highText}> empresas que investem em <span className={styles.altText}>design crescem</span> o dobro das líderes suas indústrias </p>
                <div className={styles.lowTextAux}>
                    <p className={styles.lowText}> { TextLow } </p>
                </div>
        </div>
    )



}
export default ContactText