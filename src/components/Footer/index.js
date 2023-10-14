import styles from './Footer.module.css';
import emailIcon from '@public/img/footerIcons/emailIcon.png';
import instagramIcon from '@public/img/footerIcons/instagramIcon.png';
import linkedinIcon from '@public/img/footerIcons/linkedinIcon.png';
import behanceIcon from '@public/img/footerIcons/behanceIcon.png';
import Image from 'next/image';

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                        <Image src={emailIcon} alt="emailIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/faiscadesignjr/" target="_blank" rel="noopener noreferrer">
                        <Image src={instagramIcon} alt="instagramIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
                <li>
                    <a href="https://br.linkedin.com/company/faiscadesignjunior" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinIcon} alt="linkedinIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} /> 
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/FaiscaDesignJunior" target="_blank" rel="noopener noreferrer">
                        <Image src={behanceIcon} alt="behanceIcon" style={{ width: '24px', height: '24px', color: '#d45827' }} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer