import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/img/logo.jpg";

export default function Header() {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="custom-navbar">
        <Container>

          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="me-2"
            />
            <span className="brand-text">Jubilant Data Studio</span>
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="navbar-nav ms-auto nav-links">

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/vision">
                Our Expertise
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}
