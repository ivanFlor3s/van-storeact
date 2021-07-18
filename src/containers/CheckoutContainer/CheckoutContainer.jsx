import React from 'react';
import './CheckoutContainer.style.scss';
import {Checkout} from "../../components/Checkout"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CheckoutContainer = ( ) => {

  const cartContext = useContext(CartContext)

  return (
    <>
      
      <Checkout postInfo = { cartContext.createOrder }></Checkout>
    </>
  )
};