import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss'
import EUR from '../imgs/eur.png'
import USD from '../imgs/images.png'


function Header({USDUAH, EURUAH, Loading}) {

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Currency Converter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className={'justify-content-end'}>
                    <Nav>
                        <Navbar.Text>
                            <div className={'currency'}><img src={EUR}/> <h5>EUR</h5><span>-</span><h6>{Number(EURUAH).toFixed(2)}</h6></div>
                        </Navbar.Text>
                        <Navbar.Text>
                            <div className={'currency'}><img src={USD}/> <h5>USD</h5><span>-</span><h6>{Number(USDUAH).toFixed(2)}</h6></div>
                        </Navbar.Text>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;