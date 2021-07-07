import { useEffect } from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext();

//Creo componente que despues uso en el App.jsx para "limpiar" + Separacion de funcionalidades


export const CartComponentContext = ({children}) => {

    const [shoppingList, setShoppingList]= useState([])
    const [cartCounter, setCartCounter] = useState(0)

    const isInCart= (item) =>{
        return shoppingList.find( element => element.id === item.id)
    }
    
    const addItem = ({item, quantity} )=> {
        
        
        if (isInCart(item)){
            alert("producto ya en lista")
            return
        }

        setShoppingList([...shoppingList, {
            itemList: item,
            cantidad: quantity }] )
        
   

    }

    const saveInStorage = () => {
        localStorage.removeItem('shoppingList')
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
    }

    const getFromStorage = () =>{
        //TODO ver este console.log
        //console.log("Guardo en local storage")
        const shoppingMemory = JSON.parse(localStorage.getItem('shoppingList'))
        if( shoppingMemory &&  shoppingMemory.length !== 0 ) {
            console.log('Traigo data de local storage')
            
            setShoppingList(shoppingMemory)
        }
    }

    useEffect(() => {

        //getFromStorage()

        //Agrego en el counter
        const bufferCounter = shoppingList.map(element => element.cantidad).reduce((a,b)=> a + b, 0)
        //console.log("Agregando al cart",bufferCounter)
        setCartCounter(bufferCounter)

        //saveInStorage()
        
    }, [shoppingList])
    
    return (
        <CartContext.Provider value={{addItem, shoppingList, cartCounter}}>
            {children}
        </CartContext.Provider>
    )
}