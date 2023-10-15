import Image from 'next/image'
import styles from './makeCard.module.css'


function MakeCard({ imagem, nome, ciclo, marginLeft }) {
    
    const cardStyle = {
        marginLeft: marginLeft, 
      };

    return (
        <div style={cardStyle} className={styles.card}>
            <div className={styles.cardImg}>
                <div className={styles.cardText}>
                    <h2 className={styles.Nomes}>{nome}</h2>
                    <p className={styles.Ciclo}>{ciclo}</p>
                </div>
                <Image src={imagem} alt={nome} width={156} height={156} />
            </div>
        </div >

    )

};

export default MakeCard;