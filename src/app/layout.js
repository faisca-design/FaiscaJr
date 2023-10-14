import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "@styles/pages.module.css"

export default function Layout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Next.js</title>
            </head>
            <body style={{margin:0}}>
                <Navbar/>
                    <div className={styles.page}>
                        {children}
                    </div>
                <Footer/>
            </body>
        </html>
    )
  }
