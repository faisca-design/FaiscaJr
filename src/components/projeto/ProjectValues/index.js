import styles from './values.module.css'

import cartao from "@img/projeto/cartaoDeVisitas.png"
import post from "@img/projeto/instagramPostFeed.png"

import Image from 'next/image'

function Issue20 ({titulo1, titulo2, titulo3})
{
    return(
        <div className={styles.container}>
            <div className={styles.containerTitulo}>
                <h1 className={styles.titulo}>
                    {titulo1}
                </h1>
                <hr className={styles.bar} width={199}/>
                <h1 className={styles.titulo}>
                    {titulo2}
                </h1>
                <hr className={styles.bar} width={199}/>
                <h1 className={styles.titulo}>
                    {titulo3}
                </h1>
            </div>
            <div className={styles.containerImagens}>
                <Image className={styles.imagem1} src={cartao} width={683} height={758} alt="cartão de visitas"/>
                <Image className={styles.imagem2} src={post} width={683} height={758} alt="feed do instagram"/>
            </div>
        </div>
    )
    
}

export default Issue20