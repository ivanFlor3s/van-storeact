import React from 'react';
import './CartWidget.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => (
  <>
    <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
  </>
);

export default CartWidget;