import { Link, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import Contact from './Contact'
import OffertForm from './OffertForm'
import DataFetcher from './DataFetcher'
import Footer from './Footer'

function NavBar() {
    return (
        <>
            <Navbar fixed="sticky" bg="light" variant="light">
                <Container>
                    <Link id="Navbar.Brand" to={'/'}>
                        <img
                            src="https://scontent.fbma5-1.fna.fbcdn.net/v/t39.30808-6/306135708_403157785355440_457808101483734734_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=qBvA_oKUfJ0AX9Kgb8q&_nc_ht=scontent.fbma5-1.fna&oh=00_AfCvTiC82jaCnh65jp29WQc6oBUHOEDUgqd-arkqNPxAjw&oe=643D0498"
                            alt="Company Logo"
                        />{' '}
                    </Link>
                    <Nav className="me-auto">
                        <Link id="Nav.Link" to={'/'}>
                            <FontAwesomeIcon icon={faHouse} /> Hem
                        </Link>
                        <Link id="Nav.Link" to={'/contact'}>
                            Kontakt
                            <FontAwesomeIcon icon={faPhone} />
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <DataFetcher>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/offert" element={<OffertForm />} />
                </Routes>
            </DataFetcher>
            <Footer />
        </>
    )
}

export default NavBar
