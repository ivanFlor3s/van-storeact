import React from "react";
import { useState, useEffect } from "react";
import { getItemMLA } from "../../utils/helpers";
import "./ItemDetailContainer.style.scss";
import { ItemDetail } from "../../components/ItemDetail";
import {useParams} from "react-router-dom"
import { LoaderBurguer } from "../../shared/LoaderBurguer/LoaderBurguer";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const {id} = useParams();

  

  useEffect(() => {
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
    setData();
    return () => {
      console.log("Hold the door");
    };
  }, [id]);

  
    return (
      <>
        {producto ? (
          <ItemDetail className="animated fadeIn"
            img={producto.img}
            title={producto.title}
            price={producto.price}
          ></ItemDetail>
        ) : <LoaderBurguer></LoaderBurguer> }
      </>
    );
  
};
