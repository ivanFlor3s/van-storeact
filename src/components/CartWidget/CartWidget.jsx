import React from "react";
import "./CartWidget.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

export const CartWidget = ({ cant = 0 }) => {
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
      <Badge className="badge-counter" variant="light">
        {cant}
      </Badge>
    </>
  );
};
