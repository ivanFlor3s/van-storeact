import "./ItemListContainer.style.scss";
import { ItemList } from "../ItemList/ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoaderBurguer } from "../../shared/LoaderBurguer/LoaderBurguer";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
  const { categoryId } = useParams();

  const productContext = useContext(ProductContext);
  const [productos, setProductos] = useState([]);

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    setProductos(productContext.getProductosByCategory(categoryId));
    setCategorias(productContext.getCategorias())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, productContext.productos]);

  return (
    <>
      <div className="container text-center">
        { categorias.map( (element, index)=> {
          return (
            <Link  key = {index} to={`/category/${element}`}>
              <button className="btn btn-outline-warning m-2"> {element}</button>
            </Link>
          )
        })}
        
      </div>

      <div>
        {productos.length > 0 ? (
          <ItemList productosList={productos} categoria={categoryId}></ItemList>
        ) : (
          <LoaderBurguer></LoaderBurguer>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
