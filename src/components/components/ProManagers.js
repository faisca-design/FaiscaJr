import Image from 'next/image'
import styles from './../../styles/ProManegers.module.css'
import Line from "./img/Line.png"

function ProManegers({ ProGerente, projetista }) {

    return (
        <div className={styles.containerAux}>
            <div className={styles.TittlesProjects}>
                <div className={styles.gerenteTittle}>
                    <Image src={Line} alt="erro" width={444} height={1} />
                    <h1 className={styles.titles}>
                        gerente de projeto
                    </h1>
                    <Image src={Line} alt="erro" width={444} height={1} />
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