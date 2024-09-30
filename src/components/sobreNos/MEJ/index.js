import styles from './mej.module.css'
import Image from "next/image"
import rectagle from '@img/sobreNos/MEJ/teste.png'
import brasilJR from "@img/sobreNos/MEJ/brasil.png"
import NejPoa from "@img/sobreNos/MEJ/NejPoa.png"
import fejers from "@img/sobreNos/MEJ/fejers.png"
import sla from "@img/sobreNos/MEJ/sla.png"

function MEJO() {
    return (
        <div className={styles.container}>
            <Image src={rectagle} alt={"error"} width={0} height={420} />
            <div className={styles.bar}></div>
            <div className={styles.rightContent}>
                <h1>Movimento Empresa Jr</h1>
                <p>Nossa missão é formar, por meio da vivência empresarial, lideranças comprometidas e capazes de transformar o país em um brasil empreendedor. Desde 2010,
                    o MEJ já impactou mais de R$ 70.000.000,00 na economia brasileira, que são integralmente reinvestidos na educação empreendedora dos estudantes.</p>
                <div className={styles.apoiadores}>
                    <Image className={styles.logos} src={brasilJR} width={0} height={80} alt="brasil" />
                    <Image className={styles.logos} src={NejPoa} width={0} height={75} alt="NejPoa" />
                    <Image className={styles.logos} src={fejers} width={0} height={47} alt="Fejers" />
                    <Image className={styles.logos} src={sla} width={0} height={82} alt="SLA" />
                </div>
            </div>
        </div>
    )
}

export default MEJO;