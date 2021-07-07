import {createContext, useState} from 'react';

export const CartContext = createContext();

//Creo componente que despues uso en el App.jsx para "limpiar" + Separacion de funcionalidades


export const CartComponentContext = ({children}) => {

    const [shoppingList, setShoppingList]= useState([])

    const addItem = ({item, quantity} )=> {
        setShoppingList([...shoppingList, {
            itemList: item,
            cantidad: quantity }] )
    }
    
    return (
        <CartContext.Provider value={{addItem, shoppingList}}>
            {children}
        </CartContext.Provider>
    )
}