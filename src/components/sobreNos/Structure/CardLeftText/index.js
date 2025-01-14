import styles from "./CLeftText.module.css"
import Image from "next/image"
import StyledText from "@/components/textoEstilizado/textoEstilizado"


function CardLeftText({ imgPathLT, erroLT, tittleLT, subTittleLT, textLT }) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1><StyledText text={tittleLT} /></h1>
                <h2><StyledText text={subTittleLT} /></h2>
                <p><StyledText text={textLT} /></p>
            </div>
            <Image src={imgPathLT} alt={erroLT} className={styles.img} width={500} height={500} />
        </div>
    )
};

export default CardLeftText;