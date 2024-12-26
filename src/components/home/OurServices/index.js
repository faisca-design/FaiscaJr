import styles from './services.module.css'
import Service from './Service'
import StyledText from "@/components/textoEstilizado/textoEstilizado"

function Services({tittleAllServices, servicos}){
    // Ordena os serviços baseado no campo 'ordem'
    const servicosOrdenados = [...servicos].sort((a, b) => a.ordem - b.ordem);

    return(
        <div className={styles.services}>
            <p><StyledText text={tittleAllServices}/></p>
            {servicosOrdenados.map((servico, index) => (
                <Service 
                    key={index} 
                    servico={servico.titulo}
                    description={servico.descricao}
                />
            ))}
        </div>
    )
}

export default Services