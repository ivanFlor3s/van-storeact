import React from "react";
import "./CartWidget.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
  

  const cartContext = useContext(CartContext)
  

  

  

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
      <Badge className="badge-counter" variant="light">
        {cartContext.cartCounter}
      </Badge>
    </>
  );
};
