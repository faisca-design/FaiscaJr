import styles from './../../styles/MakeCard.module.css'
function MakeCard({ imagem, nome, ciclo }) {


    return (
        <div class={styles.card}>
            <div class={styles.cardImg}>
                <div class={styles.cardText}>
                    <h2 class={styles.Nomes}>{nome}</h2>
                    <p class={styles.Ciclo}>{ciclo}</p>
                </div>
                <img src={imagem} alt={nome} />
            </div>
        </div >

    )

};

export default MakeCard;