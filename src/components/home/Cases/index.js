"use client"

import { useState, useEffect } from 'react';
import styles from './layoutCases.module.css';
import Cases from './cases';
import GenericButton from '@/components/GenericButton';
import casesData from './../../../data/casesData.json';

function CasesArea({ leftTittle, rightTittle }) {
    const [randomCases, setRandomCases] = useState([]);

    useEffect(() => {                                                                  //lógica para selecionar 6 cases aleatorios entre todos disponiveis
        const shuffledCases = [...casesData].sort(() => 0.5 - Math.random());
        setRandomCases(shuffledCases.slice(0, 6));
    }, []);

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
                {randomCases.map((DCase) => (
                    <Cases
                        key={DCase.id}
                        imag={DCase.imagem}
                        ProjectName={DCase.nomeProjeto}
                        projectPath={DCase.projectLink}
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