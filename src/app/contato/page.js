import ContactText from "@/components/contato/ContactText"
import ContactForm from "@/components/contato/ContactForm"
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