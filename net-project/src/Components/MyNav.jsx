import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../assets/netflix_logo.png"

function MyNav() {
  return (
    <Navbar expand="md" style={{ backgroundColor: "rgba(19, 19, 19, 0.966)" }}>
      <Container fluid className="p-0 text-white">
        <Navbar.Brand href="#">
          <img
            className="mx-0 px-0 d-block"
            src={logo}
            alt="logo"
            style={{ maxWidth: "130px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#tv-shows" style={{ color: "white" }}>
              Tv Shows
            </Nav.Link>
            <Nav.Link href="#movies" style={{ color: "white" }}>
              Movies
            </Nav.Link>
            <Nav.Link href="#recently-added" style={{ color: "white" }}>
              Recently added
            </Nav.Link>
            <Nav.Link href="#my-list" style={{ color: "white" }}>
              My list
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <i
              className="bi bi-search text-white m-2"
              style={{ fontSize: "16px" }}
            ></i>
            <i
              className="bi bi-bell-fill text-white m-3"
              style={{ fontSize: "16px" }}
            ></i>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
