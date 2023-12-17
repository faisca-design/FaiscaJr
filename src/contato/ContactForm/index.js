"use client";
import { useState } from 'react';
import styles from "./form.module.css"
import HeaderForm from './HeaderForm'





function Form() {

    const [phone, setPhone] = useState("");

    const formatPhoneNumber = (inputNumber) => {
        // Remove any non-digit characters from the input
        const cleanedNumber = inputNumber.replace(/\D/g, '');
    
        // Insert a hyphen after the fifth digit
        const formattedNumber = `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(2, 7)}-${cleanedNumber.slice(7)}`;
        
        return formattedNumber;
    }

    const handlePhoneChange = (e) => {
        const inputNumber = e.target.value;
        const formattedNumber = formatPhoneNumber(inputNumber);
        setPhone(formattedNumber);
    }

    return(
        <div>
            <HeaderForm />
            <form className={styles.form} action="">
                <div className={styles.row}>
                    <input type="text" required placeholder="Nome" />
                    <input type="email" required placeholder="E-mail"/>
                    <input
                        type="tel"
                        required
                        placeholder="Telefone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>

                <div className={styles.row}>
                    <select name="projects" id={styles.projects}>
                        <option value="" disabled selected>Qual tipo de projeto?</option>
                        <option value="Identidade Visual">Identidade Visual</option>
                        <option value="Design de Produto">Design de Produto</option>
                        <option value="Embalagem">Embalagem</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Design de Interfaces">Design de Interfaces</option>
                        <option value="Design de Jogos">Design de Jogos</option>
                        <option value="Design de Serviços">Design de Serviços</option>
                    </select>

                    <input required type="date" placeholder="Prazo de Entrega:" id={styles.date}/>

                    <select name="howDidUMeet" id={styles.howDidUMeet}>
                        <option value="" disabled selected>Como conheceu a Faísca?</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Site">Site</option>
                        <option value="UFRGS">UFRGS</option>
                        <option value="Indicação">Indicação</option>
                        
                    </select>
                </div>
                
                <textarea className={styles.aboutProject} rows="4" required placeholder="Nos conte mais detalhes sobre o seu projeto!"></textarea>


                <input className={styles.submit} type="submit" placeholder="Enviar"/>
            </form>
        </div>
    )
}

export default Form