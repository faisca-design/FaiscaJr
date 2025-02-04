import styles from './individualProject.module.css';
import Image from 'next/image';
import Link from 'next/link';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Project({ path, image, erro, titulo, desc }) {
  return (
    <Link href={path} className={styles.projectLink}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={erro} className={styles.image} width={3000} height={3000} />
        </div>
        <div className={styles.imageOverlay}></div>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}><StyledText text={titulo}/></h1>
          <p className={styles.textDescription}><StyledText text={desc}/></p>
        </div>
      </div>
    </Link>
  );
}

export default Project;