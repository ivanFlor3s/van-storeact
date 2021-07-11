import React from 'react';
import './Cart.style.scss';
import {CartItem} from '../CartItem'
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

  const cartContext = useContext(CartContext)


  return (
    <>
      <Container >
        <div className="cart-list">

        <h3 className="header-lista">LISTA CARRITO</h3>
        <br />
        { cartContext.shoppingList.map((element, index) => {
          return (<div key={index} className="cart-item">
            <CartItem  cartProduct = {element} ></CartItem>
            </div>)
        }) }
        <h1>Total: ${ cartContext.getTotal() } </h1>

        <button className="text-danger btn" onClick={cartContext.quitarTodo}> Borrar todo</button>
        
        </div>
      </Container>
      
    </>
    
  )
};