import React from 'react';
import './CheckoutContainer.style.scss';
import {useEffect} from 'react'

export const CheckoutContainer = () => {

  
  useEffect(() => {
    console.log("llegue")
    return () => {
      
    }
  }, [])
  return (
    <>
    <h1>Hola loco</h1>
      <p>CheckoutContainer component working :D </p>
    </>
  )
};