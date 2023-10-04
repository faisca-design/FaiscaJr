import styles from './Footer.module.css';
import emailIcon from './footerIcons/emailIcon.png';
import instagramIcon from './footerIcons/instagramIcon.png';
import linkedinIcon from './footerIcons/linkedinIcon.png';
import behanceIcon from './footerIcons/behanceIcon.png';

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                        <img src={emailIcon} alt="emailIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/faiscadesignjr/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="instagramIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
                <li>
                    <a href="https://br.linkedin.com/company/faiscadesignjunior" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="linkedinIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} /> 
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/FaiscaDesignJunior" target="_blank" rel="noopener noreferrer">
                        <img src={behanceIcon} alt="behanceIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer