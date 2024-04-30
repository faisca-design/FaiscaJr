"use client";
import { useState } from 'react';
import styles from "./form.module.css"
import HeaderForm from './HeaderForm'





function Form() {

    const [phone, setPhone] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);



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

    const showSuccess = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        setShowFailureMessage(false); // Reset failure message visibility
    }

    const handleButtonClick = (e) => {
        // Trigger form submission when the button is clicked
        setShowFailureMessage(true);
        setShowSuccessMessage(false); // Reset success message visibility
        handleFormSubmit(e);
    };

    return(
        <div className={styles.mainDiv}>
            <HeaderForm />
            <form className={styles.form} action="" onSubmit={showSuccess}>

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


                <input className={styles.submit} type="submit" onClick={handleButtonClick} placeholder="Enviar"/>
            </form>

            {showSuccessMessage && (
                <div className={styles.rectangleSuccess} style={{ display: 'inline-block' }}>Sua resposta foi enviada!</div>
            )}
            {showFailureMessage && (
                <div className={styles.rectangleFailed} style={{ display: 'inline-block' }}>Existem campos que devem ser preenchidos</div>
            )}
            
        </div>
    )
}

export default Form