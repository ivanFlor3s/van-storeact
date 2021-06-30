import "./ItemListContainer.style.scss";
import { ItemList } from "../ItemList/ItemList";
import { getDataMLA } from "../../utils/helpers";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoaderBurguer } from "../../shared/LoaderBurguer/LoaderBurguer";


export const ItemListContainer = () => {
  const [productos, setProds] = useState([]);
  const {categoryId}= useParams()

  

  useEffect(() => {
    const setData = async () => {
      const respuesta = await getDataMLA(categoryId);
      //Agrego timeout para apreciar que hay una espera
      setTimeout(() => {
        let aux = respuesta.map((element) => {
          return {
            idProd: element.id,
            img: element.thumbnail,
            title: element.title,
            price: element.price,
          };
        });
        setProds(aux);
      }, 2000);
    };
    setProds([])
    setData();
    return () => {
      console.log("Me muero");
    };
  }, [categoryId]);

  return (
  <>
     {productos.length > 0 ?  <ItemList productosList={productos} categoria={categoryId}></ItemList> : 
      <LoaderBurguer></LoaderBurguer> }
    
    
  </>
  )
};

export default ItemListContainer;
