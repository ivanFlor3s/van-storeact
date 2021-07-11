import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

//Creo componente que despues uso en el App.jsx para "limpiar" + Separacion de funcionalidades

export const CartComponentContext = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  const isInCart = (item) => {
    
    return shoppingList
      .map((element) => element.itemList.id)
      .indexOf(item.id);
  };

  const addItem = ({ prod, quantity }) => {
    // console.log("Lista preview",shoppingList)
    // console.log("Item que llega",item)
    // console.log("indexOf",isInCart(item))
    // console.log('criterio',isInCart(item) >= 0 )
    if (isInCart(prod) >= 0) {
      shoppingList[isInCart(prod)].cantidad += quantity;
      // console.log('Agregue a art ya existente shopping list', shoppingList)
      setShoppingList([...shoppingList]);
    } else {
      // console.log('Agrego nuevo item')
      setShoppingList([
        ...shoppingList,
        {
          itemList: prod,
          cantidad: quantity,
          subTotal: quantity * prod.price
        },
      ]);
    }
  };

  const quitarTodo = () =>{
    setShoppingList([])
  }
  const saveInStorage = () => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  };

  const getFromStorage = () => {
    const shoppingMemory = JSON.parse(localStorage.getItem("shoppingList"));
    if (shoppingMemory && shoppingMemory.length !== 0) {
      setShoppingList(shoppingMemory);
    }
  };

  const getTotal = () => {
    return shoppingList.map(element => element.subTotal).reduce((a,b) => a + b, 0)
  }


  //Al montar
  useEffect(() => {
    getFromStorage();
    saveInStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const bufferCounter = shoppingList
      .map((element) => element.cantidad)
      .reduce((a, b) => a + b, 0);

    setCartCounter(bufferCounter);

    saveInStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingList]);

  return (
    <CartContext.Provider value={{ addItem, shoppingList, cartCounter, quitarTodo, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
