import React from "react";
import "./CartWidget.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
  const [counter, setCounter] = useState(0)

  const cartContext = useContext(CartContext)
  

  

  useEffect(() => {
    
    let aux = cartContext.shoppingList.map(element => element.cantidad).reduce((a,b)=> a + b, 0)
    console.log("counter", aux)
    setCounter(aux)
    
  }, [])

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
      <Badge className="badge-counter" variant="light">
        {counter}
      </Badge>
    </>
  );
};
