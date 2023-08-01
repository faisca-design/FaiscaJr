import styles from '../styles/Issue7.module.css'
import Imagem from 'next/image'

function Issue7 ()
{
    return(
        <div className={styles.container}>
            <div className={styles.containerTitle}>
              <h1 className={styles.title}>
                  encontramos soluções ideias
              </h1>
              <h1 className={styles.title}>
                  para cada tipo de desafio
              </h1>
            </div>
            <h1 className={styles.subTitle}>
                CASES
               <hr className={styles.bar} width={500} />
                SELECIONADOS
            </h1>
            <div className={styles.containerImages}>
                <div className={styles.imageRow}>
                    <img className={styles.image}  src="/img/RetanguloIlustrativo.png" width={440} height={530} alt="imagem temporaria de testes"/>
                    <img className={styles.image} src="/img/RetanguloIlustrativo.png" width={440} height={775} alt="imagem temporaria de testes"/>
                </div>
                <div className={styles.imageBlock}>
                    <div className={styles.smallImageBlock}>
                        <img className={styles.image} src="/img/RetanguloIlustrativo.png" width={440} height={826} alt="imagem temporaria de testes"/>
                        <img className={styles.image} src="/img/RetanguloIlustrativo.png" width={377} height={826} alt="imagem temporaria de testes"/>
                    </div>
                    <img className={styles.image} src="/img/RetanguloIlustrativo.png" width={885} height={473} alt="imagem temporaria de testes"/>
                </div>
            </div>
        </div>
    )
}

export default Issue7