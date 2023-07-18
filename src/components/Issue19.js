import styles from '../styles/Issue19.module.css'
import capa from '../components/img/Capa.png'
import cracha from '../components/img/cracha.png'
import xicara from '../components/img/xicara.png'

function Issue19 ()
{
    return(
        <div>
            <div className={styles.containerText}>
                <h1>
                    site------
                </h1>
                <h1>
                    identidade visual ---------
                </h1>
                <h1>
                    rótulo
                </h1>
            </div>
            <div>
                <div className={styles.upperImages}>
                    <img className={styles.smallImage1} src={capa} alt="cartão de visitas"/>
                    <img className={styles.smallImage2} src={cracha} alt="feed do instagram"/>
                </div>
                <div className={styles.lowerImages}>
                    <img className={styles.image} src={xicara} alt="cartão de visitas"/>
                </div>
            </div>
        </div>
    )
}

export default Issue19