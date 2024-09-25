import styles from "./CLeftText.module.css"
import Image from "next/image"



function CardLeftText({imgPathLT, erroLT, tittleLT, subTittleLT, textLT}) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>{tittleLT}</h1>
                <h2>{subTittleLT}</h2>
                <p>{textLT}</p>
            </div>
            <Image src={imgPathLT} alt={erroLT} className={styles.img} />
        </div>
    )
};

export default CardLeftText;