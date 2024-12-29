import styles from './individualProject.module.css';
import Image from 'next/image';
import Link from 'next/link';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Project({ path, image, erro, titulo, desc }) {
  return (
    <div className={styles.imageContainer}>
      <Link href={path}>
        <div className={styles.imageOverlay}>
          <Image src={image} alt={erro} className={styles.image} width={3000} height={3000} />
        </div>
      </Link>
      <div className={styles.textContainer}>
        <h1 className={styles.textTitle}><StyledText text={titulo}/></h1>
        <p className={styles.textDescription}><StyledText text={desc}/></p>
      </div>
    </div>
  );
}

export default Project;
