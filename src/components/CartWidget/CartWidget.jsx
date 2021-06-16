import React from "react";
import "./CartWidget.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { useState } from "react";



export const CartWidget = () => {

  const [counter, setCounter] = useState(0)


  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
      <Badge className="badge-counter" variant="light">{counter}</Badge>
        
    </>
  );

}
