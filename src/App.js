import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import SobreNos from './components/pages/SobreNos'
import Contato from './components/pages/Contato'
import Portfolio from './components/pages/Portfolio'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/inicio" element={<Inicio/>}>
          </Route>
          <Route exact path="/sobrenos" element={<SobreNos/>}>
          </Route>
          <Route exact path="/portfolio" element={<Portfolio/>}>
          </Route>
          <Route exact path="/contato" element={<Contato/>}>
          </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;