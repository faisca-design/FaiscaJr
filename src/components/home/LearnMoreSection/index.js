import StyledText from "@/components/textoEstilizado/textoEstilizado"
import styles from "./LearnMore.module.css";
import GenericButton from "@components/GenericButton";

function LearnMoreSection({ desc, buttonphrase, buttonRoute }) {
  return (
    <div className={styles.Container}>
      <h1 className={styles.textAbout}>
        <StyledText text={desc} />
      </h1>
      <GenericButton ButtonText={buttonphrase} pathWay={buttonRoute} />
    </div>
  );
}

export default LearnMoreSection;
