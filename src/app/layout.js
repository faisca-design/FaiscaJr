import DynamicBackground from "@components/dynamicBackground";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import styles from "@styles/pages.module.css"
import Script from "next/script";
import "@styles/globals.css"

export default function Layout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Faísca</title>
                <Script
                    async
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                />
            </head>
            <body style={{ margin: 0, padding: 0, backgroundColor: '#1E181A', minHeight: '100vh' }}>      {/* propriedades adicionadas para o bakcground funcionar :(*/}
                <div style={{ position: 'relative', minHeight: '100vh' }}>
                    <DynamicBackground />
                    <Navbar />
                    <div className={styles.page}>
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}