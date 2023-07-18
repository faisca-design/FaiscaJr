import styles from "../styles/Issue14.module.css";
import brasil  from "../components/img/brasil.png";
import nejPoa from "../components/img/nej poa.png";
import fejers from "../components/img/fejers.png";
import sla from "../components/img/sla.png";
import faisca from "../components/img/faisca.png"


function Issue14 ()
{
    return (
        <div className={styles.container}>
            <div className={styles.containerImagem}>
                <img className={styles.imagem} src={faisca} alt="imagem"/>
            </div>
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
                    <img className={styles.brasil} src={brasil} alt="brasil"/>
                    <img className={styles.nej} src={nejPoa} alt="NejPoa"/>
                    <img className={styles.fejers} src={fejers} alt="Fejers"/>
                    <img className={styles.vetor} src={sla} alt="SLA"/>
                </div>
                
            </div>
        </div>
    )
}
export default Issue14