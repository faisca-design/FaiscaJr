import styles from "./CRightText.module.css"
import Image from 'next/image';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function CardRightText({ imgPath, erro, tittle, text }) {
    return (
        <div className={styles.container}>
            <Image src={imgPath} alt={erro} className={styles.img} />
            <div className={styles.textContainer}>
                <h1> <StyledText text={tittle} /></h1>
                <p><StyledText text={text} /></p>
            </div>
        </div>
    )
};

export default CardRightText;