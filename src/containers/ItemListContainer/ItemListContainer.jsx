import "./ItemListContainer.style.scss";
import { Row, Col } from "react-bootstrap";
import { ItemCount } from "../../components/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { getDataMLA } from "../../utils/helpers";
import { useState, useEffect } from "react";


export const ItemListContainer = () => {
  const [productos, setProds] = useState([]);
  const setData = async () => {
    const respuesta = await getDataMLA("Zapatillas");
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
    }, 1000);
  };

  useEffect(() => {
    setData();
    return () => {
      console.log("Me muero");
    };
  }, []);

  return (
  <>
    {productos.length > 0 ?  <ItemList productosList={productos}></ItemList> : null} 
  </>
  )
};

export default ItemListContainer;
