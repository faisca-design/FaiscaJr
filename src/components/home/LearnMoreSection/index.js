import styles from "./LearnMore.module.css";
import GenericButton from "@components/GenericButton";

function LearnMoreSection({desc, buttonphrase, buttonRoute}) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.textAbout}>
        {desc}
      </h1>
      <GenericButton ButtonText={buttonphrase} pathWay={buttonRoute}/>
      <butao/>

    </div>
  );
}

export default LearnMoreSection;
