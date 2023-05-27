import { Link, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import OffertForm from '../pages/OffertForm'
import DataFetcher from './DataFetcher'
import Footer from './Footer'

function NavBar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Link id="Navbar.Brand" to={'/'}>
                        <img
                            className="companyLogo"
                            src="https://www.facebook.com/photo/?fbid=403157798688772&set=a.403157762022109"
                            alt="Company logo"
                        />{' '}
                    </Link>
                    <Nav className="me-auto">
                        <Link id="Nav.Link" to={'/'}>
                            <FontAwesomeIcon icon={faHouse} /> Hem
                        </Link>
                        <Link id="Nav.Link" to={'/contact'}>
                            <FontAwesomeIcon icon={faPhone} /> Kontakt
                        </Link>
                        <Link id="Nav.Link" to={'/offert'}>
                            <FontAwesomeIcon icon={faEnvelope} /> Offert
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
