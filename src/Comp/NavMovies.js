import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavMovies=()=>{
    return(

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">MouhaMovies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link href="#features" as={Link} to="/MoviesList">Movies</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

    )
}
export default NavMovies