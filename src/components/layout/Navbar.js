import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav class={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li>
                        <Link to="/inicio">início</Link>
                    </li>
                    <li>
                        <Link to="/sobrenos">sobre nós</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">portfólio</Link>
                    </li>
                    <li>
                        <Link to="/contato">contato</Link>
                    </li>
                    <li>
                        <Link to="faisca">@faísca</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )

}

export default Navbar