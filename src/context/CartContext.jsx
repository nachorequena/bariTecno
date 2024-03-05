import { createContext, useState } from "react";

export const CartContext = createContext();

//el proveedor(cartContextProvider) va a retonar el contexto(cartContext) en forma de componente
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
  };

  let data = {
    cart,
    addToCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
