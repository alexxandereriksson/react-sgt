import { Link, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import Contact from './Contact'

function NavBar() {
    return (
        <>
            <Navbar fixed="sticky" bg="light" variant="light">
                <Container>
                    <Link id="Navbar.Brand" to={'/'}>
                        SGT{' '}
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default NavBar
