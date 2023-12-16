import styles from "./mej.module.css";
import brasil from "@img/sobreNos/brasil.png"
import NejPoa from "@img/sobreNos/NejPoa.png"
import fejers from "@img/sobreNos/fejers.png"
import sla from "@img/sobreNos/sla.png"
import img from "@img/sobreNos/faisca.png"

import Image from "next/image";

function MEJ ()
{
    return (
        <div className={styles.container}>
            <Image className={styles.imagem} src={img} width={469.72} height={561} alt="imagem"/>
            <div className={styles.bar}/>
            <div className={styles.containerParagrafo}>
                <h1 className={styles.titulo}>
                    MEJ
                </h1>
                <p className={styles.paragrafo}>
                    Nossa missão é formar, por meio da vivência empresarial, 
                    lideranças comprometidas e capazes de transformar o país em 
                    um brasil empreendedor.
                    Desde 2010, o MEJ já impactou mais de R$ 70.000.000,00 
                    na economia brasileira, que são integralmente reinvestidos 
                    na educação empreendedora dos estudantes.
                </p>
                
                <div className={styles.conjuntoImagens}>
                    <Image src={brasil} width={119} height={108} alt="brasil" />
                    <Image src={NejPoa} width={112} height={102} alt="NejPoa" />
                    <Image src={fejers} width={162} height={75} alt="Fejers" />
                    <Image src={sla} width={96} height={110} alt="SLA" />
                </div>
                
            </div>
        </div>
    )
}
export default MEJ