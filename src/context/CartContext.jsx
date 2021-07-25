import { useEffect } from "react";
import { createContext, useState } from "react";
import { generarOrdenFirebase, validarOrdenFirebase, actualizarStockFirebase } from "../utils/helpers"
import Swal from "sweetalert2";

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


  const quitarItem = (id) => {
    var array = [...shoppingList]
    var index = array.findIndex(element => element.itemList.id == id)
    if (index !== -1) {
      array.splice(index, 1)
      setShoppingList([...array])
    }
  }

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

  const createOrder = async (data) => {
    console.log('Creando order con esta data', data, shoppingList )
    const order = {
      buyer : data,
      items: shoppingList,
      total: getTotal()
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading()
    //TODO Verificar que haya stock en prdouctos db
    
    console.log('Se valida')
    const outOfStock = await validarOrdenFirebase(order.items)

    if(outOfStock.length > 0 ){
   
      const sinStock = outOfStock.map( e => e.itemList.title).join(" - ")
      Swal.fire({
        title: 'No tenemos stock',
        icon:'error',
        text: 'Algunos productos elegidos carecen de stock: \n' + sinStock
      })
      return;
    }
    
    console.log('Se genera orden')
    const response = await generarOrdenFirebase(order)
    
    await Swal.fire({
      title: 'Orden creada',
      text: 'El ID de su orden es: ' + response.id,
      icon: 'success'
    });

    console.log('Actualizar stock')
    await actualizarStockFirebase(order.items)
    
    //TODO Recargar productos en llamado

  }

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
    <CartContext.Provider value={{createOrder, addItem, shoppingList, cartCounter, quitarTodo, getTotal, quitarItem }}>
      {children}
    </CartContext.Provider>
  );
};
