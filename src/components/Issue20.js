import styles from '../styles/Issue20.module.css'
import CartaoVisitas from '../components/img/cartaoDeVisitas.png'
import InstagramFeed from '../components/img/instagramPostFeed.png'

function Issue20 ()
{
    return(
        <div className={styles.container}>
            <div className={styles.containerTitulo}>
                <h1 className={styles.titulo}>
                    força
                </h1>
                <hr className={styles.barra}/>
                <h1 className={styles.titulo}>
                    energia ---------
                </h1>
                <h1 className={styles.titulo}>
                    vibrante
                </h1>
            </div>
            <div className={styles.containerImagens}>
                <img className={styles.imagem1} src={CartaoVisitas} alt="cartão de visitas"/>
                <img className={styles.imagem2} src={InstagramFeed} alt="feed do instagram"/>
            </div>
        </div>
    )
    
}

export default Issue20