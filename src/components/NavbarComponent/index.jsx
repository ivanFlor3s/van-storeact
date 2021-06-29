import "./styles.scss"; //NOTE se esta importando con la ruta relativa
import React from "react";
//NOTE es importante en todos los componentes importar React
//NOTE repo del tutor https://github.com/spancavil/after-03/tree/main/public
//TODO va ver si ya no hace falta con las ultimas actualizacion
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget"

export const NavbarComponent = ({cantidad}) => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image
              src="/images/app-logo-temp.png"
              roundedCircle
              fluid
              className="d-inline-block align-top logo-burguer"
              alt="logo"
            />
            
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            <h2>Burguers Pa'l Burgo</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link href="#features">
              <h4>Features</h4>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <h4>Pricing</h4>
            </Nav.Link>
          </Nav>
          <CartWidget cant={cantidad} ></CartWidget>
        </Container>
      </Navbar>

      
    </>
  );
};
