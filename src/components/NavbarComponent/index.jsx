import "./styles.scss";
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget";

import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";

const PopupList = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className="dropdown-menu-cart " style={{zIndex: '100px'}}>
      <h4 className="header-menu"> Lista carrito</h4>
      {cartContext.shoppingList.length == 0 ? (
        <>
          <p>Tu carro sufre de <strong>inanicion</strong></p>
          <p>Por favor compra algo para llenarlo</p>
          <Dropdown.Button variant="danger"  className="menu-button d-block" as={Link} to="/category/All">
              
              A categorias
          </Dropdown.Button>
        </>
      ) : (
        <>
        <ul>
          {cartContext.shoppingList.map((element, index) => {
            return (
              <li key={index} className="li-style">                
                <span>{element.itemList.title} </span>
                <span className="label-cantidad" > {element.cantidad} </span>
              </li>
            );
          })}
          </ul>
          
            <Button variant="danger"  className="menu-button d-block" as={Link} to="/cart">
              Ir al carrito
            </Button>
          
        </>
      )}
    </div>
  );
};

export const NavbarComponent = ({ cantidad }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleBox = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {}, [activeMenu]);

  return (
    <>
      <Navbar variant="dark" className="navbar-custom">
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
            <h2>Burguereacts</h2>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact={true} activeClassName="active" to="/">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/category/All">
              <h4> Categorias </h4>
            </Nav.Link>
          </Nav>
            <Dropdown >
              <Dropdown.Toggle variant="warning" style={{ height: "50px" }}>
                <CartWidget cant={cantidad}></CartWidget>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <PopupList></PopupList>
              </Dropdown.Menu>
            </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};
