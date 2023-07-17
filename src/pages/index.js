import styles from "./../styles/LearnMore.module.css";
import GenericButton from "@/components/components/GenericButton";

function App() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.textAbout}>
        nós fazemos <span className={styles.altText}>desing</span> <br></br>de um jeito que você <br></br> nunca viu.

      </h1>
      <GenericButton ButtonText="Saiba mais sobre nós" />

    </div>
  );
}

export default App;
