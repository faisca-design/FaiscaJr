import Image from 'next/image'
import styles from './makeCard.module.css'


function MakeCard({ imagem, nome, ciclo, marginLeft }) {
    
    const cardStyle = {
        marginLeft: marginLeft, 
      };

    return (
        <div style={cardStyle} class={styles.card}>
            <div class={styles.cardImg}>
                <div class={styles.cardText}>
                    <h2 class={styles.Nomes}>{nome}</h2>
                    <p class={styles.Ciclo}>{ciclo}</p>
                </div>
                <Image src={imagem} alt={nome} width={156} height={156} />
            </div>
        </div >

    )

};

export default MakeCard;