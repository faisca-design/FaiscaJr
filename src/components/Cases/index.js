import styles from './cases.module.css'
import Image from 'next/image'

function Cases ({titulo1, titulo2, imagem, imagem2, imagem3, imagem4, imagem5, nomeprojeto1, nomeprojeto2, nomeprojeto3, nomeprojeto4, nomeprojeto5})
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
                {titulo1}
               <hr className={styles.bar} width={500} />
                {titulo2}
            </h1>
            <div className={styles.containerImages}>
                <div className={styles.imageRow}>
                    <figure className={styles.figure}>
                        <Image className={styles.image}  src={imagem} width={440} height={530} alt="imagem temporaria de testes"/>
                        <label className={styles.text}>
                            {nomeprojeto1}
                        </label>
                    </figure>
                    <figure className={styles.figure}>
                         <Image className={styles.image2}  src={imagem2} width={440} height={775} alt="imagem temporaria de testes"/>
                        <label className={styles.text2}>
                            {nomeprojeto2}
                        </label>
                    </figure>
                </div>
                <div className={styles.imageBlock}>
                    <div className={styles.smallImageBlock}>
                        <figure className={styles.figure}>
                            <Image className={styles.image3}  src={imagem3} width={440} height={826} alt="imagem temporaria de testes"/>
                            <label className={styles.text3}>
                                {nomeprojeto3}
                            </label>
                        </figure>
                        <figure className={styles.figure}>
                            <Image className={styles.image4}  src={imagem4} width={377} height={826} alt="imagem temporaria de testes"/>
                            <label className={styles.text4}>
                                {nomeprojeto4}
                            </label>
                        </figure>
                    </div>
                    <figure className={styles.figure}>
                        <Image className={styles.image5}  src={imagem5} width={885} height={473} alt="imagem temporaria de testes"/>
                         <label className={styles.text5}>
                            {nomeprojeto5}
                        </label>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Cases