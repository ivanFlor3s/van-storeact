import { useEffect } from "react";
import { createContext, useState } from "react";
import { getFirebaseCollection, AgregarObservacion } from "../utils/helpers";

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

  const getProductoById = (id) => {
    return productos.find(element => element.id === id)
  }
  const getProductosByCategory = (category)=>{
    if(category === 'All'){
      return productos
    }
    return productos.filter(element => element.categoria === category)
  }


  const getCategorias = () => {
    const categorias = productos.map(element => element.categoria)
    const categoriasClean = []
    categoriasClean.push('All')
    categorias.forEach(element => {
      if (!categoriasClean.includes(element)){
        categoriasClean.push(element)
      }
    });
    
    return categoriasClean;
  }
  

  return (
    <ProductContext.Provider value={{productos, getProductoById, getProductosByCategory, getCategorias, AgregarObservacion}}>
     {children}
    </ProductContext.Provider>
  );
};
