import MakeCard from './MakeCard';
import styles from './../../styles/ListMembers.module.css';

function MembersRow2({ members }) {
  const quinto = members[4];
  const sexto = members[5];
  const setimo = members[6];
  const oitavo = members[7];
  const nono = members[8];
  const decimo = members[9];

  return (
    <div className={styles.ListStyle}>
      <MakeCard
        key={0}
        imagem={quinto.imagem}
        nome={quinto.nome}
        ciclo={quinto.ciclo}
        marginLeft="0%"
      />
      <MakeCard
        key={1}
        imagem={sexto.imagem}
        nome={sexto.nome}
        ciclo={sexto.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={2}
        imagem={setimo.imagem}
        nome={setimo.nome}
        ciclo={setimo.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={3}
        imagem={oitavo.imagem}
        nome={oitavo.nome}
        ciclo={oitavo.ciclo}
        marginLeft="6%"
      />
      <MakeCard
        key={4}
        imagem={nono.imagem}
        nome={nono.nome}
        ciclo={nono.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={5}
        imagem={decimo.imagem}
        nome={decimo.nome}
        ciclo={decimo.ciclo}
        marginLeft="6%"
      />
    </div>
  );
}

export default MembersRow2;