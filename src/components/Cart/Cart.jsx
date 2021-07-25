import React from "react";
import { useEffect } from "react";
import "./Cart.style.scss";
import { CartItem } from "../CartItem";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { CheckoutContainer } from "../../containers/CheckoutContainer";
import { useHistory } from 'react-router-dom';


import Swal from "sweetalert2"

export const Cart = () => {
  const cartContext = useContext(CartContext);
  let history = useHistory();
  console.log(cartContext.shoppingList);

  useEffect(() => {
    if (cartContext.shoppingList.length == 0){
     
      Swal.fire({
        title: 'No hay productos en el carrito',
        imageUrl: 'https://i.gifer.com/7HQe.gif',
        confirmButtonText: 'Volver al inicio',
        allowOutsideClick: false,
        text: 'Redirigiendo al home',
        timer:5000,
        timerProgressBar: true,
        
        
      }).then( (res)=> {
        history.push('/')
      })  
      
    } 
      
    
  }, [cartContext.shoppingList])
  
  

  return (
    <>
        <Container>
          <div className="cart-list mb-3">
            <h3 className="header-lista">Lista en carrito</h3>
            <br />
            {cartContext.shoppingList.map((element, index) => {
              return (
                <div key={index} className="cart-item">
                  <CartItem
                    cartProduct={element}
                    onQuitar={cartContext.quitarItem}
                  ></CartItem>
                </div>
              );
            })}
            <div style={{ textAlign: "end" }}>
              <h1>Total: ${cartContext.getTotal()} </h1>

              <button
                className="text-danger btn"
                onClick={cartContext.quitarTodo}
              >
                {" "}
                Borrar todo
              </button>
            </div>
          </div>

          <CheckoutContainer></CheckoutContainer>
        </Container>
      
    </>
  );
};
