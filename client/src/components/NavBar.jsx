import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>EzyCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="itemList">
              Item List
              {/* <Link to="itemList">Item List</Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
              {/* <Link to="about">About</Link> */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <h1>EzyCart</h1> */}
      {/* <nav>
        <Link to="itemList">Item List</Link>
        <br></br>
        <Link to="about">About</Link>
      </nav> */}
    </header>
  );
}

export default NavBar;
