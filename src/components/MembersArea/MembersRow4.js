import MakeCard from './MakeCard';
import styles from './listMembers.module.css';

function MembersRow4({ members }) {
  const DecSetimo = members[15];
  const DecOitavo = members[16];
  const DecNono = members[17];
  const Vigesimo = members[18];
  const VigPrimeiro = members[19];

  return (
    <div className={styles.ListStyle}>
      <MakeCard
        key={0}
        imagem={DecSetimo.imagem}
        nome={DecSetimo.nome}
        ciclo={DecSetimo.ciclo}
        marginLeft="0%"
      />
      <MakeCard
        key={1}
        imagem={DecOitavo.imagem}
        nome={DecOitavo.nome}
        ciclo={DecOitavo.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={2}
        imagem={DecNono.imagem}
        nome={DecNono.nome}
        ciclo={DecNono.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={3}
        imagem={Vigesimo.imagem}
        nome={Vigesimo.nome}
        ciclo={Vigesimo.ciclo}
        marginLeft="15%"
      />
      <MakeCard
        key={4}
        imagem={VigPrimeiro.imagem}
        nome={VigPrimeiro.nome}
        ciclo={VigPrimeiro.ciclo}
        marginLeft=".1%"
      />
      <h1 className={styles.vazio}>.</h1>
    </div>
  );
}

export default MembersRow4;