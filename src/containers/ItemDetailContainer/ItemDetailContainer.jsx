import React from "react";
import { useState, useEffect } from "react";
import { getItemMLA } from "../../utils/helpers";
import "./ItemDetailContainer.style.scss";
import { ItemDetail } from "../../components/ItemDetail";
import { useParams } from "react-router-dom";
import { LoaderBurguer } from "../../shared/LoaderBurguer/LoaderBurguer";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const { id } = useParams();

  const productContext = useContext(ProductContext)

  useEffect(() => {
    

   setProducto(productContext.getProductoById(id))
    
  }, [id]);

  return (
    <>
      {producto ? (
        <ItemDetail
          className="animated fadeIn"
          prod = {producto}
        ></ItemDetail>
      ) : (
        <LoaderBurguer></LoaderBurguer>
      )}
    </>
  );
};
