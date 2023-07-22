import styles from '../styles/Issue19.module.css'
import Image from 'next/image'
//import cracha from './img/cracha.png'
//import xicara from './img/xicara.png'

function Issue19 ()
{
    return(
        <div>
            <div className={styles.containerText}>
                <h1>
                    site
                </h1>
                <hr className={styles.bar} width={199}/>
                <h1>
                    identidade visual
                </h1>
                <hr className={styles.bar} width={199}/>
                <h1>
                    rótulo
                </h1>
            </div>
            <div>
                <div className={styles.upperImages}>
                    <Image className={styles.smallImage1} src="/img/Capa.png" width={680} height={785} alt="cartão de visitas"/>
                    <Image className={styles.smallImage2} src="/img/cracha.png" width={680} height={785} alt="feed do instagram"/>
                </div>
                <div className={styles.lowerImages}>
                    <Image className={styles.image} src="/img/xicara.png" width={1468} height={906} alt="cartão de visitas"/>
                </div>
            </div>
        </div>
    )
}

export default Issue19