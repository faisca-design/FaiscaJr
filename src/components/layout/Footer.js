import {IoMail, FaInstagram, FaLinkedin, FaBehance} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                        <IoMail style={{ color: '#d45827' }}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/faiscadesignjr/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ color: '#d45827' }}/>
                    </a>
                </li>
                <li>
                    <a href="https://br.linkedin.com/company/faiscadesignjunior" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ color: '#d45827' }}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/FaiscaDesignJunior" target="_blank" rel="noopener noreferrer">
                        <FaBehance style={{ color: '#d45827' }}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer