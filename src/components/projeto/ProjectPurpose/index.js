import styles from './project.module.css';
import Image from 'next/image';
import imagemCarimbo from './../../../../public/img/projeto/CarimboPreto.png';

export default function ProjectPurpose() {
  return (
    <div className={styles.purpose}>
      <h1 className={styles.projetoTitle}>
        Promover transformação social através <br></br>da <span>força</span> das raízes brasileiras,
        realçando <br></br>sua <span>energia moderna</span> e <span>vibrante</span>. </h1>
      <Image
        className={styles.imgcarimbo}
        src={imagemCarimbo}
        alt={'nome'}
        width={1000}
        height={585}
      />
    </div>
  );
}