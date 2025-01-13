import styles from './project.module.css';
import Image from 'next/image';


export default function ProjectBanner({imagem, erro}) {
  return (
    <div className={styles.ProjectBanner}>
      <Image 
        src={imagem} 
        alt={erro} 
        className={styles.bannerImage} 
        width={500}
        height={500}
      />
    </div>
  );
}
