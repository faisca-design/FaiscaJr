import styles from './cases.module.css'
import Image from 'next/image'
import GenericButton from '@/components/GenericButton'

function Cases ({titulo1, titulo2, imagem, imagem2, imagem3, imagem4, imagem5, imagem6, nomeprojeto1, nomeprojeto2, nomeprojeto3, nomeprojeto4, nomeprojeto5, nomeprojeto6})
{
    return(
        <div className={styles.container}>
            <div className={styles.containerTitle}>
              <h1 className={styles.title}>
                  encontramos   <span className={styles.altText}> soluções ideias</span>
              </h1>
              <h1 className={styles.title}>
                  para cada tipo de desafio
              </h1>
            </div>
            <h1 className={styles.subTitle}>
            <span className={styles.altText}>{titulo1}</span>
               <hr className={styles.bar} width={500} />
               <span className={styles.altText}>{titulo2}</span>
            </h1>
            <div className={styles.imageRow}>
                <figure className={styles.figure}>
                    <Image className={styles.image}  src={imagem} width={440} height={530} alt="imagem temporaria de testes"/>
                    <label className={styles.text}>
                        {nomeprojeto1}
                    </label>
                </figure>
                <figure className={styles.figure}>
                        <Image className={styles.image}  src={imagem2} width={440} height={530} alt="imagem temporaria de testes"/>
                    <label className={styles.text}>
                        {nomeprojeto2}
                    </label>
                </figure>
                <figure className={styles.figure}>
                    <Image className={styles.image}  src={imagem3} width={440} height={530} alt="imagem temporaria de testes"/>
                    <label className={styles.text}>
                        {nomeprojeto3}
                    </label>
                </figure>
                <figure className={styles.figure}>
                    <Image className={styles.image}  src={imagem4} width={440} height={530} alt="imagem temporaria de testes"/>
                    <label className={styles.text}>
                        {nomeprojeto4}
                    </label>
                </figure>
                <figure className={styles.figure}>
                    <Image className={styles.image}  src={imagem5} width={440} height={530} alt="imagem temporaria de testes"/>
                        <label className={styles.text}>
                        {nomeprojeto5}
                    </label>
                </figure>
                <figure className={styles.figure}>
                    <Image className={styles.image}  src={imagem5} width={440} height={530} alt="imagem temporaria de testes"/>
                        <label className={styles.text}>
                        {nomeprojeto5}
                    </label>
                </figure>
            </div>
            <GenericButton ButtonText="Mais Projetos"/>
        </div>
    )
}

export default Cases