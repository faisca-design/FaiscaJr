import styles from './values.module.css'
import Image from 'next/image'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Issue20 ({titulo1, titulo2, titulo3, imageLeft, imageRight})
{
    return(
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h1 className={styles.text}><StyledText text={titulo1}/></h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}><StyledText text={titulo2}/></h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}><StyledText text={titulo3}/></h1>
            </div>
            
            <div className={styles.containerImagens}>
                <Image className={styles.imagem1} src={imageLeft}  alt="cartão de visitas"/>
                <Image className={styles.imagem2} src={imageRight} alt="feed do instagram"/>
            </div>
        </div>
    )
    
}

export default Issue20