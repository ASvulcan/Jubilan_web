import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/img/logo.jpg";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar-wrapper">
      <Navbar
        expand="lg"
        className="custom-navbar"
        expanded={expanded} // control the open/close state
      >
        <Container>

          {/* LOGO */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center"
            onClick={() => setExpanded(false)} // close on click
          >
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="70"
              className="me-2"
            />
            <span className="brand-text">Jubilant Data Studio</span>
          </Navbar.Brand>

          {/* Toggle button */}
          <Navbar.Toggle
            aria-controls="main-navbar"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          {/* Nav links */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="navbar-nav ms-auto nav-links">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/vision" onClick={() => setExpanded(false)}>
                Our Expertise
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}
