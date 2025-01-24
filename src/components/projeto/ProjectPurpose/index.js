import styles from './project.module.css';
import Image from 'next/image';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

export default function ProjectPurpose({ imagem, texto, erro }) {
  return (
    <div className={styles.purpose}>
      <h1 className={styles.projetoTitle}>
        <StyledText text={texto} />
      </h1>
      <Image
        className={styles.img}
        src={imagem}
        alt={erro}
        width={7680}
        height={5124}
      />
    </div>
  );
}