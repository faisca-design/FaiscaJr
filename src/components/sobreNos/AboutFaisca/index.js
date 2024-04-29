import styles from './about.module.css'
import Image from 'next/image'
import img from "@img/sobreNos/Logo-Faisca.png"

function AboutFaisca() {
    return (
        <div className={styles.preenchimento}>
            <div className={styles.container}>
                <Image className={styles.containerImagem} src={img} width={350} height={350} alt="logo faisca" />
                <div className={styles.text}>
                    <p className={styles.paragrafo}>
                        A Faísca é uma empresa júnior de design da UFRGS
                        que se <span className={styles.fraseDestaque}>destaca</span> no mercado por sua combina ação de <span className={styles.fraseDestaque}>criatividade </span>
                        e <span className={styles.fraseDestaque}>eficiência</span>. Formada por estudantes universitários altamente
                        capacitados em design, a Faísca possui como principal diferencial
                        a capacidade de trabalhar em estreita <span className={styles.fraseDestaque}>colaboração</span> com o cliente,
                        desde o início do projeto, visando compreender suas necessidades
                        e expectativas, a fim de criar <span className={styles.fraseDestaque}>soluções</span> <span className={styles.fraseDestaque}>personalizadas</span> e que
                        atendam aos seus objetivos.
                    </p>
                    <p className={styles.paragrafo}>
                        <br />Em suma, se você está em busca de uma empresa de design que
                        ofereça soluções criativas e eficientes, a Faísca é a escolha
                        ideal. Conte conosco para ajudá-lo a alcançar seus objetivos
                        e superar suas expectativas.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AboutFaisca