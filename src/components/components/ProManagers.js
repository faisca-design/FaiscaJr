import styles from './../../styles/ProManegers.module.css'
import Line from "./img/Line.png"

function ProManegers({ ProGerente, projetista }) {

    return (
        <div className={styles.containerAux}>
            <div className={styles.TittlesProjects}>
                <div className={styles.gerenteTittle}>
                    <img src={ Line } alt="Line" />
                    <h1 className={styles.titles}>
                        gerente de projeto
                    </h1>
                    <img src={ Line } alt="Line" />
                </div>
                <h2 className={styles.manager}> {ProGerente} </h2>
            </div>

            <div className={styles.TittlesProjects}>
                <h1 className={styles.titles}>
                    projetistas
                </h1>
                <div>
                    {projetista.map((projetista, index) => (
                        <h2 className={styles.Names} key={index}> {projetista} </h2>
                    ))}

                </div>
            </div>
        </div>
    )

};

export default ProManegers;