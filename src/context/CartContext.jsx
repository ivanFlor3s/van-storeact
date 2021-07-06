import {createContext, useState} from 'react';

export const CartContext = createContext();

//Creo componente que despues uso en el App.jsx para "limpiar" + Separacion de funcionalidades


export const CartComponentContext = ({children}) => {

    const [shoppingList, setShoppingList]= useState([])

    const addItem = ({item, quantity} )=> {
        setShoppingList([{
            itemList: item,
            cantidad: quantity }, ...shoppingList] )
    }
    
    return (
        <CartContext.Provider value={{addItem}}>
            {children}
        </CartContext.Provider>
    )
}