import React from 'react';
import './Cart.style.scss';
import {CartItem} from '../CartItem'
import { Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {

  const cartContext = useContext(CartContext)
  console.log(cartContext.shoppingList)
  return (
    
    <>

      { cartContext.shoppingList.length == 0 ? 
      <Container className="mt-3" style={{textAlign:'center'}}>
        <Row>

        <h1>UPS... No hay nada en el carrito</h1>
        </Row>
        <Row>

          <img src="https://i.gifer.com/7HQe.gif" className="empty-gift" alt="empty-cart" />
        </Row>
        <Link to="/">Volve al inicio para seguir comprando</Link>
      </Container>
      
      : 
      
      
      <Container >
        <div className="cart-list">

        <h3 className="header-lista">LISTA CARRITO</h3>
        <br />
        { cartContext.shoppingList.map((element, index) => {
          return (<div key={index} className="cart-item">
            <CartItem  cartProduct = {element} onQuitar={cartContext.quitarItem} ></CartItem>
            </div>)
        }) }
        <h1>Total: ${ cartContext.getTotal() } </h1>

        <button className="text-danger btn" onClick={cartContext.quitarTodo}> Borrar todo</button>
        
        </div>
      </Container>}
      
      
    </>
    
  )
};