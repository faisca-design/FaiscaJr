import './Form.css'

function Form() {
    return(
        <div>
            <form  className='Form' action="">
                <div className='row'>
                    <input type="text" required placeholder="Nome" />
                    <input type="text" required placeholder="E-mail"/>
                    <input type="text" required placeholder="Telefone"/>
                </div>

                <div className='row'>
                    <select name="Projects" id="Projects">
                        <option value="" disabled selected>Qual tipo de projeto?</option>
                        <option value="Identidade Visual">Identidade Visual</option>
                        <option value="Design de Produto">Design de Produto</option>
                        <option value="Embalagem">Embalagem</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Design de Interfaces">Design de Interfaces</option>
                        <option value="Design de Jogos">Design de Jogos</option>
                        <option value="Design de Serviços">Design de Serviços</option>
                    </select>

                    <input required type="date" placeholder="Prazo de Entrega" id="Date"/>
                    
                    <select name="HowDidUMeet" id="HowDidUMeet">
                        <option value="" disabled selected>Como conheceu a Faísca?</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Site">Site</option>
                        <option value="UFRGS">UFRGS</option>
                        <option value="Indicação">Indicação</option>
                        
                    </select>
                </div>

                <input className='AboutProject' required type="text" placeholder="Nos conte mais detalhes sobre o seu projeto!"/>

                <input className='Submit' type="submit" placeholder="Enviar"/>
            </form>
        </div>


    )
}

export default Form