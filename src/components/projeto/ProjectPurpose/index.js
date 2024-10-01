import styles from './project.module.css';
import Image from 'next/image';

export default function ProjectPurpose({imagem, texto, erro}) {
  return (
    <div className={styles.purpose}>
      <h1 className={styles.projetoTitle}>
          {texto}
         </h1>
      <Image
        className={styles.img}
        src={imagem}
        alt={erro}
      />
    </div>
  );
}