import ContactText from "@/components/contato/ContactText"
import ContactForm from "@/components/contato/ContactForm"
import styles from "@styles/pages.module.css"

function Contato() {
    return (
        <div className={styles.withPadding}>

            <ContactText
                phrase={"empresas que investem em ##design crescem## o dobro das líderes suas indústrias"}
                subPhrase={"de acordo com o Instituto de Gestão de Design em Boston, EUA"}
            />

            <ContactForm
                headerText={"entre em contato com a gente"}
                headerSubText={"retornamos sua mensagem em até 5 dias úteis."}
                
                nome={"Nome"}
                email={"E-mail"}
                telefone={"Telefone"}
                tipoProjeto={"Qual tipo de projeto?"}
                prazo={"Prazo de Entrega:"}
                ondeConheceu={"Como conheceu a Faísca?"} 
                detalhes={"Nos conte mais detalhes sobre o seu projeto!"} 
                enviar={"Enviar"}
            />

        </div>
    )
}

export default Contato