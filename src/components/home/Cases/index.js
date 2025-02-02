"use client"

import { useState, useEffect } from 'react';
import styles from './layoutCases.module.css';
import Cases from './cases';
import GenericButton from '@/components/GenericButton';
import StyledText from "@/components/textoEstilizado/textoEstilizado";

function normalizeName(name) {
    return decodeURIComponent(name)
        .toLowerCase()
        .replace(/\s+/g, '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function CasesArea({ phraseCases, leftTittle, rightTittle, buttonphrase, buttonRoute, casesData }) {
    const [randomCases, setRandomCases] = useState([]);

    useEffect(() => {
        const shuffledCases = [...casesData].sort(() => 0.5 - Math.random());
        setRandomCases(shuffledCases.slice(0, 6));
    }, [casesData]);

    return (
        <section className={styles.container}>
            <h1 className={styles.phrase}>
                <StyledText text={phraseCases} />
            </h1>
            <div className={styles.subTittle}>
                <h1><span className={styles.altText}><StyledText text={leftTittle} /></span></h1>
                <hr className={styles.line} />
                <h1><span className={styles.altText}><StyledText text={rightTittle} /></span></h1>
            </div>
            <div className={styles.lista}>
                {randomCases.map((DCase) => (
                    <Cases
                        key={DCase.id}
                        imag={DCase.imagem}
                        ProjectName={DCase.nomeProjeto}
                        projectPath={normalizeName(DCase.projectLink)}
                    />
                ))}
            </div>
            <div className={styles.moreProjects}>
                <GenericButton ButtonText={buttonphrase} pathWay={buttonRoute} />
            </div>
        </section>
    );
}

export default CasesArea;
