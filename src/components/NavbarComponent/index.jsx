import "./styles.scss"; 
import React from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget";

import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect } from "react";






const PopupList = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <h4 className="header-menu"> LISTA EN CART</h4>
      {cartContext.shoppingList.length == 0 ? (
        <>
          <p>Ir al Inicio</p>
        </>
      ) : (
        <ul>
          {cartContext.shoppingList.map((element) => {
            return <li> 
              <span>{element.itemList.title}  </span>
              
              <span class="label-cantidad" > {element.cantidad} </span>
              
             </li>;
          })}
          <li>
            <Button variant="danger" className="d-block" as={Link} to="/cart"> IR AL CARRITO</Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export const NavbarComponent = ({ cantidad }) => {

  const [activeMenu, setActiveMenu]=useState(false)

  const toggleBox = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    
  }, [activeMenu])

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
            <Nav.Link
              as={NavLink}
              activeClassName="active"
              to="/category/All"
            >
              <h4> Categorias </h4>
            </Nav.Link>
            
          </Nav>
          <Button className="action" variant="" onClick={ toggleBox}>
            <CartWidget  cant={cantidad}></CartWidget>
          </Button>
          <div style={{ zIndex: 10 }}>
           {activeMenu ? <div className="menu animated fadeIn" >
            <PopupList></PopupList>
           </div>  : <div></div> }
          </div>
        </Container>
      </Navbar>
    </>
  );
};
