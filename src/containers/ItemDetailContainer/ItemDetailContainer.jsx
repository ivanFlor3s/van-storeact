import React from "react";
import { useState, useEffect } from "react";
import { getItemMLA } from "../../utils/helpers";
import "./ItemDetailContainer.style.scss";
import { ItemDetail } from "../../components/ItemDetail";
import {useParams} from "react-router-dom"

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const {id} = useParams();

  const setData = async () => {
    const respuesta = await getItemMLA(id);
    setTimeout(() => {
      let aux = {
        title: respuesta.title,
        id: respuesta.id,
        price: respuesta.price,
        img: respuesta.thumbnail
      }
      setProducto(aux);
    }, 2000);
  };

  useEffect(() => {
    setData();
    return () => {
      console.log("Hold the door");
    };
  }, [id]);

  
    return (
      <>
        {producto ? (
          <ItemDetail
            img={producto.img}
            title={producto.title}
            price={producto.price}
          ></ItemDetail>
        ) : (
          <h1>No tengo producto detail para mostrar</h1>
        )}
      </>
    );
  
};
