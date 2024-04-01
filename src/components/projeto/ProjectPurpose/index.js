import styles from './project.module.css';
import Image from 'next/image';
import imagemCarimbo from './../../../../public/img/projeto/CarimboPreto.png';

export default function ProjectPurpose() {
  return (
    <div className={styles.purpose}>
      <h1 className={styles.projetoTitle}>
        Promover transformação social através da <span>força</span> das raízes brasileiras,
        realçando sua <span>energia moderna</span> e <span>vibrante</span>. </h1>
      <Image
        className={styles.imgcarimbo}
        src={imagemCarimbo}
        alt={'nome'}
      />
    </div>
  );
}