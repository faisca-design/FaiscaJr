import styles from './cases.module.css';
import Cases from './cases';
import GenericButton from '@/components/GenericButton';
import casesData from './../../../data/casesData.json';

function CasesArea({ leftTittle, rightTittle }) {
    return (
        <section className={styles.container}>
            <h1 className={styles.phrase}>
                encontramos <span className={styles.altText}>soluções ideais</span><br></br>para cada tipo de desafio
            </h1>
            <div className={styles.subTittle}>
                <h1><span className={styles.altText}>{leftTittle}</span></h1>
                <hr className={styles.line} />
                <h1><span className={styles.altText}>{rightTittle}</span></h1>
            </div>
            <div className={styles.lista}>
                {casesData.map((DCases) => (
                    <Cases
                        key={DCases.id}
                        imag={`/img/home/Cases/${DCases.id}.png`}
                        ProjectName={DCases.nomeProjeto}
                    />
                ))}
            </div>
            <div className={styles.moreProjects}>
                <GenericButton ButtonText="Mais Projetos" pathWay="/portfolio" />
            </div>
        </section>
    );
}

export default CasesArea;
