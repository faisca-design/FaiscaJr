// allMembers.js
import styles from './allMembers.module.css'
import Card from './card';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function AllCards({ tittle, subTittle, membersData }) {
  // Ordena os membros pela ordem definida
  const sortedMembers = membersData.sort((a, b) => a.ordem - b.ordem);

  return (
    <div>
      <h2 className={styles.title}><StyledText text={tittle}/></h2>
      <h1 className={styles.subTittle}><StyledText text={subTittle}/></h1>
      <section className={styles.container}>
        <div className={styles.row}>
          {sortedMembers.map((DMembers) => (
            <Card
              key={DMembers.id}
              members={DMembers.members || [{
                nome: DMembers.nome,
                ciclo: DMembers.ciclo,
                imagem: DMembers.imagem
              }]}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AllCards;