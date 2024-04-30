import styles from './project.module.css'
import Image from 'next/image'
import capa from '@img/projeto/Capa.png'
import cracha from '@img/projeto/cracha.png'
import xicara from '@img/projeto/xicara.png'

function Issue19({ titulo1, titulo2, titulo3 }) {
    return (
        <div>
            <div className={styles.containerText}>
                <h1 className={styles.text}>
                    {titulo1}
                </h1>
                <hr className={styles.bar} width={199} />
                <h1 className={styles.text}>
                    {titulo2}
                </h1>
                <hr className={styles.bar} width={199} />
                <h1 className={styles.text}>
                    {titulo3}
                </h1>
            </div>
            <div>
                <div className={styles.upperImages}>
                    <Image className={styles.smallImage1} src={capa} width={680} height={785} alt="cartão de visitas" />
                    <Image className={styles.smallImage2} src={cracha} width={680} height={785} alt="feed do instagram" />
                </div>
                <div className={styles.lowerImages}>
                    <Image className={styles.image} src={xicara} width={1468} height={906} alt="cartão de visitas" />
                </div>
            </div>
        </div>
    )
}

export default Issue19