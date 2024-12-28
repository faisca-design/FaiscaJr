import styles from './about.module.css'
import Image from 'next/image'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function AboutFaisca({ firstText, secondText, logo }) {
    return (
        <div className={styles.preenchimento}>
            <div className={styles.container}>
                <Image className={styles.containerImagem} src={logo} width={330} height={330} alt="logo faisca" />
                <div className={styles.text}>
                    <p className={styles.paragrafo}>
                        <StyledText text={firstText} />
                    </p>
                    <p className={styles.paragrafo}>
                        <StyledText text={secondText}/>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutFaisca