import "./CartWidget.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <div className="text-nowrap">
        
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="2x"
            className="text-white "
          />
        
        
          {cartContext.shoppingList.length !== 0 ? (
            <Badge className="badge-counter animated fadeIn" variant="light">
              {cartContext.cartCounter}
            </Badge>
          ) : (
            <div> </div>
          )}
        
      </div>
    </>
  );
};
