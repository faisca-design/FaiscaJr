import ContactText from "@/components/contato/ContactText"
import ContactForm from "@/components/contato/ContactForm"
import styles from "@styles/pages.module.css"
import { handleJSONfile } from '../../utils/jsonHandler';

async function getData() {
  const contatoData = await handleJSONfile('./content/contato/contatoPage.json');

  if (!contatoData) {
    throw new Error('Failed to fetch contact data');
  }

  return contatoData;
}

async function Contato() {
  const contatoData = await getData();
  const { contactText, contactForm } = contatoData;

  return (
    <div className={styles.withPadding}>
      <ContactText
        phrase={contactText.phrase}
        subPhrase={contactText.subPhrase}
      />

      <ContactForm
        headerText={contactForm.headerText}
        headerSubText={contactForm.headerSubText}
        nome={contactForm.nome}
        email={contactForm.email}
        telefone={contactForm.telefone}
        tipoProjeto={contactForm.tipoProjeto}
        prazo={contactForm.prazo}
        ondeConheceu={contactForm.ondeConheceu}
        detalhes={contactForm.detalhes}
        enviar={contactForm.enviar}
      />
    </div>
  )
}

export default Contato