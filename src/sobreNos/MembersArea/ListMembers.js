import MakeCard from "./MakeCard";
import styles from './listMembers.module.css'

function ListMembers({ members }) {

    return (
        <div className={styles.ListStyle}>
            {members.map((members, index) => (
                <MakeCard
                    key={index}
                    imagem={members.imagem}
                    nome={members.nome}
                    ciclo={members.ciclo}
                />
            ))}
        </div>
    )
}

export default ListMembers;