import styles from './cards.module.css'
import MakeCard from './MakeCard';
import membersData from './../../../data/membersData.json'


function Cards() {

    return (

        <div>
            <h2 className={styles.title}>Nossa Equipe</h2>
            <h1 className={styles.subTittle}>Estas são as pessoas que fazem a Faísca acontecer.</h1>
            <section className={styles.container}>
                <div className={styles.row}>
                    {membersData.map((DMembers) => (
                        <MakeCard
                            key={DMembers.id}
                            imagem={`/img/sobreNos/members/${DMembers.id}.png`}
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