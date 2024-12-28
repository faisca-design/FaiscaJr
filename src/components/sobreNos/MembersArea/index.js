import styles from './cards.module.css'
import MakeCard from './MakeCard';
import membersData from './../../../data/membersData.json'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Cards( {tittle, subTittle}) {
    return (
        <div>
            <h2 className={styles.title}><StyledText text={tittle}/></h2>
            <h1 className={styles.subTittle}><StyledText text={subTittle}/></h1>
            <section className={styles.container}>
                <div className={styles.row}>
                    {membersData.map((DMembers) => (
                        <MakeCard
                            key={DMembers.id}
                            imagem={DMembers.imagem}
                            nome={DMembers.nome}
                            ciclo={DMembers.ciclo}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Cards;