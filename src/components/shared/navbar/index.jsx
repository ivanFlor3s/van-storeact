import "./styles.css" //NOTE se esta importando con la ruta relativa
import React from "react"; 
//NOTE es importante en todos los componentes importar React
//TODO va ver si ya no hace falta con las ultimas actualizacion
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/images/app-logo-temp.png"
              roundedCircle 
              fluid
              className="d-inline-block align-top logo-burguer"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#features">
              <h4>Features</h4>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <h4>Pricing</h4>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
