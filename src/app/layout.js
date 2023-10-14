import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Next.js</title>
            </head>
            <body style={{margin:0}}>
                <Navbar/>
                    {children}
                <Footer/>
            </body>
        </html>
    )
  }