import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faHammer} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">
                All Rights reserved ©Alexander Eriksson
            </p>
        </>
    )
}

export default Footer
