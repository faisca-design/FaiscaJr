import MakeCard from './MakeCard';
import styles from './listMembers.module.css';

function MembersRow3({ members }) {
  const DecPrimeiro = members[10];
  const DecSegundo = members[11];
  const DecTerceiro = members[12];
  const DecQuinto = members[13];
  const DecSexto = members[14];

  return (
    <div className={styles.ListStyle}>
      <MakeCard
        key={0}
        imagem={DecPrimeiro.imagem}
        nome={DecPrimeiro.nome}
        ciclo={DecPrimeiro.ciclo}
        marginLeft="0%"
      />
      <MakeCard
        key={1}
        imagem={DecSegundo.imagem}
        nome={DecSegundo.nome}
        ciclo={DecSegundo.ciclo}
        marginLeft="17%"
      />
      <MakeCard
        key={2}
        imagem={DecTerceiro.imagem}
        nome={DecTerceiro.nome}
        ciclo={DecTerceiro.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={3}
        imagem={DecQuinto.imagem}
        nome={DecQuinto.nome}
        ciclo={DecQuinto.ciclo}
        marginLeft="6%"
      />
      <MakeCard
        key={4}
        imagem={DecSexto.imagem}
        nome={DecSexto.nome}
        ciclo={DecSexto.ciclo}
        marginLeft="5.5%"
      />
    </div>
  );
}

export default MembersRow3;