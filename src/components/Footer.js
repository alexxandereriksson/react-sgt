import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/SGT.Arboga/about?locale=sv_SE">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.instagram.com/sgtarboga/">
                        {' '}
                        <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>
                </Nav.Item>
               
            </Nav>
            <p className="text-center mt-4 mb-4">
                All Rights reserved ©Alexander Eriksson
            </p>
        </>
    )
}

export default Footer
