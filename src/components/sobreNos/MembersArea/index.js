import styles from './cards.module.css'
import foto from '@img/sobreNos/Foto01.png'
import MakeCard from './MakeCard';


function Cards() {

    return (

        <section className={styles.container}>
            <div className={styles.row}>
                <h2 className={styles.title}>Nossa <br></br>Equipe</h2>
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="10%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="11%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />

                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="6%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="6%" marginRight="0%" />

                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="12%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="9%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="6%" marginRight="0%" />

                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="18%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="9%" />

                {/* a partir daqui repete o padrão */}
                
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="30%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="11%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />

                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="6%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="0%" marginRight="0%" />
                <MakeCard imagem={foto} nome="gleydson" ciclo="diretor" marginLeft="6%" marginRight="0%" />
            </div>

        </section>

    )
}

export default Cards;