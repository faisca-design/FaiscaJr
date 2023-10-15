import styles from "./form.module.css"
import HeaderForm from './HeaderForm'

function Form() {
    return(
        <div>
            <HeaderForm />
            <form className={styles.form} action="">
                <div className={styles.row}>
                    <input type="text" required placeholder="Nome" />
                    <input type="text" required placeholder="E-mail"/>
                    <input type="text" required placeholder="Telefone"/>
                </div>

                <div className={styles.row}>
                    <select name="Projects" id={styles.project}>
                        <option value="" disabled selected>Qual tipo de projeto?</option>
                        <option value="Identidade Visual">Identidade Visual</option>
                        <option value="Design de Produto">Design de Produto</option>
                        <option value="Embalagem">Embalagem</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Design de Interfaces">Design de Interfaces</option>
                        <option value="Design de Jogos">Design de Jogos</option>
                        <option value="Design de Serviços">Design de Serviços</option>
                    </select>

                    <input required type="date" placeholder="Prazo de Entrega" id={styles.date}/>
                    
                    <select name="HowDidUMeet" id={styles.howDidUMeet}>
                        <option value="" disabled selected>Como conheceu a Faísca?</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Site">Site</option>
                        <option value="UFRGS">UFRGS</option>
                        <option value="Indicação">Indicação</option>
                        
                    </select>
                </div>

                <input className={styles.aboutProject} required type="text" placeholder="Nos conte mais detalhes sobre o seu projeto!"/>

                <input className={styles.submit} type="submit" placeholder="Enviar"/>
            </form>
        </div>
    )
}

export default Form