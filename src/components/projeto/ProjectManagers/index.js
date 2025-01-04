import styles from './proManegers.module.css';
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function ProManegers({ ProGerente, projetista }) {
  return (
    <div className={styles.containerAux}>
      <div className={styles.TittlesProjects}>
        <div className={styles.gerenteTittle}>
          <hr className={styles.line} />
          <h1 className={styles.titles}>
            gerente de projeto
          </h1>
          <hr className={styles.line} />
        </div>
        <h2 className={styles.manager}> <StyledText text={ProGerente}/> </h2>
      </div>

      <div className={styles.TittlesProjects}>
        <h1 className={styles.titles}>
          projetistas
        </h1>
        <div>
          {projetista.map((projetista, index, array) => (
            <h2
              className={styles.Names}
              key={index}
              style={{ marginBottom: index === array.length - 1 ? '35px' : '0' }}
            >
              <StyledText text={projetista}/>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProManegers;
