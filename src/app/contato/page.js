import ContactText from "@components/ContactText"
import ContactForm from "@components/ContactForm"
import styles from "@styles/pages.module.css"

function Contato(){
    return (
        <div className={styles.withPadding}>
            <ContactText />
            <ContactForm />
        </div>
    )
}

export default Contato