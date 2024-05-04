import styles from './values.module.css'

import cartao from "@img/projeto/cartaoDeVisitas.png"
import post from "@img/projeto/instagramPostFeed.png"

import Image from 'next/image'

function Issue20 ({titulo1, titulo2, titulo3})
{
    return(
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h1 className={styles.text}>{titulo1}</h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}>{titulo2}</h1>
                <hr className={styles.bar} />
                <h1 className={styles.text}>{titulo3}</h1>
            </div>
            
            <div className={styles.containerImagens}>
                <Image className={styles.imagem1} src={cartao}  alt="cartão de visitas"/>
                <Image className={styles.imagem2} src={post} alt="feed do instagram"/>
            </div>
        </div>
    )
    
}

export default Issue20