import DynamicBackground from "@components/dynamicBackground";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import styles from "@styles/pages.module.css"
import Script from "next/script";
import "@styles/globals.css"

import emailIcon from '@img/footerIcons/emailIcon.png';
import instagramIcon from '@img/footerIcons/instagramIcon.png';
import linkedinIcon from '@img/footerIcons/linkedinIcon.png';
import behanceIcon from '@img/footerIcons/behanceIcon.png';

export default function Layout({ children }) {
    const socialMedia = [
        {
            icon: emailIcon,
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=contato@faiscadesignjr.com.br",
            altText: "Email"
        },
        {
            icon: instagramIcon,
            link: "https://www.instagram.com/faiscadesignjr/",
            altText: "Instagram"
        },
        {
            icon: linkedinIcon,
            link: "https://www.linkedin.com/company/faiscadesignjunior/",
            altText: "LinkedIn"
        },
        {
            icon: behanceIcon,
            link: "https://www.behance.net/FaiscaDesignJunior",
            altText: "Behance"
        },
    ];

    return (
        <html lang="pt-br">
            <head>
                <title>Faísca</title>
                <Script
                    async
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                />
            </head>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#1E181A', minHeight: '100vh' }}>
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    <DynamicBackground />
                    <Navbar 
                        optionOne={"início"} 
                        optionTwo={"sobre nós"} 
                        optionThree={"portfólio"} 
                        optionFour={"contato"} 
                    />
                    <div className={styles.page}>
                        {children}
                    </div>
                    <Footer socialMedia={socialMedia} />
                </div>
            </body>
        </html>
    )
}