import Link from 'next/link'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li>
                        <Link href="/">início</Link>
                    </li>
                    <li>
                        <Link href="/sobre-nos">sobre nós</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">portfólio</Link>
                    </li>
                    <li>
                        <Link href="/contato">contato</Link>
                    </li>
                    <li>
                        <Link href="/faisca">@faísca</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )

}

export default Navbar