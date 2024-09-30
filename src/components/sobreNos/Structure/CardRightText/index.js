import styles from "./CRightText.module.css"
import Image from 'next/image';

function CardRightText({imgPath, erro, tittle, text}) {
    return (
        <div className={styles.container}>
            <Image src={imgPath} alt={erro} className={styles.img} />
            <div className={styles.textContainer}>
                <h1> {tittle}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
};

export default CardRightText;