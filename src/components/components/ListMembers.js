import MakeCard from "./MakeCard";
import styles from './../../styles/ListMembers.module.css'

function ListMembers({ members }) {

    return (
        <div class={styles.ListStyle}>
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