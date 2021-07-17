import { useEffect } from "react";
import { createContext, useState } from "react";
import { getFirebaseCollection } from "../utils/helpers";

export const ProductContext = createContext();

export const ProductContextComponent = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
      // GET CON THEN --------------------------------------------
      // const DB = getFirestore()
      // const COLLECTION = DB.collection("productos")

      // COLLECTION.get().then(response => {
      //   console.log(response.size)
      //   console.log(response.docs.map( element => element.data()))

      // })


      const initProductos = async () => {

        const PRODS = await getFirebaseCollection("productos")
        setProductos(PRODS)
      } 
      initProductos()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <ProductContext.Provider value={{productos}}>
     {children}
    </ProductContext.Provider>
  );
};
