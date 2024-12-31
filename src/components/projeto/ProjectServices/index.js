import styles from './project.module.css'
import Image from 'next/image'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Issue19({ titulo1, titulo2, titulo3, imageLeft, imageRight, imageBottom }) {
    return (
        <div>
            <div className={styles.containerText}>
                <h1 className={styles.text}><StyledText text={titulo1}/></h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}><StyledText text={titulo2}/></h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}><StyledText text={titulo3}/></h1>
            </div>

            <div className={styles.containerImages}>
                <div className={styles.upperImages}>
                    <Image className={styles.smallImage1} src={imageLeft} alt="cartão de visitas" />
                    <Image className={styles.smallImage2} src={imageRight} alt="feed do instagram" />
                </div>
                <div className={styles.lowerImages}>
                    <Image className={styles.image} src={imageBottom} alt="cartão de visitas" />
                </div>
            </div>
        </div>
    )
}

export default Issue19