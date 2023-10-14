import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./pages.module.css"

export default function Layout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Next.js</title>
            </head>
            <body style={{margin:0}}>
                <Navbar/>
                    <div className={styles.pageContainer}>
                        {children}
                    </div>
                <Footer/>
            </body>
        </html>
    )
  }