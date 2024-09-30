"use client";
import { useState } from 'react';
import styles from "./form.module.css";
import emailjs from 'emailjs-com';
import HeaderForm from './HeaderForm';

function Form() {
    const [phone, setPhone] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);  // Estado para controlar a desativação do botão

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        deadline: "",
        howDidUMeet: "",
        projectDetails: ""
    });

    const formatPhoneNumber = (inputNumber) => {
        const cleanedNumber = inputNumber.replace(/\D/g, '');

        if (cleanedNumber.length === 0) {
            return "";  // Retorna string vazia se não houver números
        } else if (cleanedNumber.length <= 2) {
            return `(${cleanedNumber}`;
        } else if (cleanedNumber.length <= 7) {
            return `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(2)}`;
        } else {
            return `(${cleanedNumber.slice(0, 2)}) ${cleanedNumber.slice(2, 7)}-${cleanedNumber.slice(7, 11)}`;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (e) => {
        const inputNumber = e.target.value;
        const formattedNumber = formatPhoneNumber(inputNumber);
        setPhone(formattedNumber);
        setFormData({ ...formData, phone: formattedNumber });
    };

    const sendEmail = () => {
        const [year, month, day] = formData.deadline.split("-");
        const formattedDeadline = `${day}/${month}/${year}`;
        const templateParams = {
            message: `
                Nome: ${formData.name}
                E-mail: ${formData.email}
                Telefone: ${formData.phone}
                Qual tipo de projeto: ${formData.projectType}
                Prazo de Entrega: ${formattedDeadline}
                Como conheceu a Faísca: ${formData.howDidUMeet}
                Detalhes do projeto: ${formData.projectDetails}
            `
        };

        emailjs.send('service_2v72mwx', 'template_5r4k3ch', templateParams, 'l6hYfXGiDRkFE0nwY')
            .then((result) => {
                console.log('Email enviado:', result.text);
            }, (error) => {
                console.log('Erro ao enviar o email:', error.text);
            });
    };

    const areFieldsEmpty = () => {
        const { name, email, phone, projectType, deadline, howDidUMeet, projectDetails } = formData;
        return (
            name.trim() === "" || 
            email.trim() === "" || 
            phone.trim() === "" || 
            projectType.trim() === "" || 
            deadline.trim() === "" || 
            howDidUMeet.trim() === "" || 
            projectDetails.trim() === ""
        );
    };

    const showSuccess = (e) => {
        e.preventDefault();

        if (areFieldsEmpty()) {
            setShowFailureMessage(true);
            setShowSuccessMessage(false);
            return;
        }
    
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        sendEmail();

        // Desabilitar o botão e configurar o timer para 1 minuto
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);  // Reativa o botão após 1 minuto
        }, 60000);
    };

    return (
        <div className={styles.mainDiv}>
            <HeaderForm />
            <form className={`${styles.form} ${isSubmitted ? styles.submitted : ''}`} onSubmit={showSuccess}>
                <div className={styles.row}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="name"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        name="email"
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        placeholder="Telefone"
                        value={phone}
                        onChange={handlePhoneChange}
                        name="phone"
                    />
                </div>

                <div className={styles.row}>
                    <select name="projectType" id={styles.projects} onChange={handleInputChange}>
                        <option value="" disabled selected>Qual tipo de projeto?</option>
                        <option value="Identidade Visual">Identidade Visual</option>
                        <option value="Design de Produto">Design de Produto</option>
                        <option value="Embalagem">Embalagem</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Design de Interfaces">Design de Interfaces</option>
                        <option value="Design de Jogos">Design de Jogos</option>
                        <option value="Design de Serviços">Design de Serviços</option>
                    </select>

                    <input 
                        type="date" 
                        placeholder="Prazo de Entrega:" 
                        id={styles.date}
                        name="deadline"
                        onChange={handleInputChange}
                    />

                    <select name="howDidUMeet" id={styles.howDidUMeet} onChange={handleInputChange}>
                        <option value="" disabled selected>Como conheceu a Faísca?</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Site">Site</option>
                        <option value="UFRGS">UFRGS</option>
                        <option value="Indicação">Indicação</option>
                    </select>
                </div>
                
                <textarea
                    className={styles.aboutProject}
                    rows="4"
                    placeholder="Nos conte mais detalhes sobre o seu projeto!"
                    name="projectDetails"
                    onChange={handleInputChange}
                ></textarea>

                <input 
                    className={styles.submit} 
                    type="submit" 
                    value="Enviar" 
                    disabled={isDisabled}  // Desabilita o botão se isDisabled for true
                />
            </form>

            {showSuccessMessage && (
                <div className={styles.rectangleSuccess} style={{ display: 'inline-block' }}>Sua resposta foi enviada!</div>
            )}
            {showFailureMessage && (
                <div className={styles.rectangleFailed} style={{ display: 'inline-block' }}>Erro ao enviar o formulário</div>
            )}
        </div>
    );
}

export default Form;
