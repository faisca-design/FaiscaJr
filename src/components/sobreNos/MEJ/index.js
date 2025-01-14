import styles from './mej.module.css'
import Image from "next/image"
import rectagle from '@img/sobreNos/MEJ/teste.png'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function MEJ({ tittle, phrase, mainImg, brasilJrImg, NejImg, fejersImg, designUFRGSImg}) {
    return (
        <div className={styles.container}>
            <Image className={styles.imge} src={mainImg} alt={"error"} width={500} height={500} />
            <div className={styles.bar}></div>
            <div className={styles.rightContent}>
                <h1><StyledText text={tittle}/></h1>
                <p><StyledText text={phrase}/></p>
                <div className={styles.apoiadores}>
                    <Image className={styles.logos} src={brasilJrImg} width={500} height={500} alt="brasil" />
                    <Image className={styles.nejpoa} src={NejImg} width={500} height={500} alt="NejPoa" />
                    <Image className={styles.fejers} src={fejersImg} width={500} height={500} alt="Fejers" />
                    <Image className={styles.logos} src={designUFRGSImg} width={500} height={500} alt="design ufrgs" />
                </div>
            </div>
        </div>
    )
}

export default MEJ;