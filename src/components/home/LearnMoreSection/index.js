import styles from "./LearnMore.module.css";
import GenericButton from "@components/GenericButton";
import GenericButtonOutLink from "@/components/GenericButtonOutLink";

function LearnMoreSection() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.textAbout}>
        nós fazemos <span className={styles.altText}>desing</span> <br></br>de um jeito que você <br></br> nunca viu.
      </h1>
      <GenericButtonOutLink ButtonText="Saiba mais sobre nós" outLink="https://www.behance.net/" />
      <butao/>

    </div>
  );
}

export default LearnMoreSection;
