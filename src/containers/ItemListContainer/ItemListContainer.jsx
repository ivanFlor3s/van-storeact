import "./ItemListContainer.style.scss";
import { ItemList } from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoaderBurguer } from "../../shared/LoaderBurguer/LoaderBurguer";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";


export const ItemListContainer = () => {
  const [productos, setProds] = useState([]);
  const {categoryId}= useParams()

  const productContext = useContext(ProductContext)
  

  useEffect(() => {
    setProds(productContext.getProductos(categoryId))
  }, [categoryId, productos]);

  return (
  <>
     {productos.length > 0 ?  
     <ItemList productosList={productos} categoria={categoryId}></ItemList> 
     : 
    <LoaderBurguer></LoaderBurguer> }
  </>
  )
};

export default ItemListContainer;
