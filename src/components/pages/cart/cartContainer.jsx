import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Swal from "sweetalert2";
import "./cart.css";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();

  const alertClearCart = () => {
    Swal.fire({
      title: "¿estas seguro de que quieres vaciar el carrito?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "si",
      denyButtonText: `no`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("tu carrito está vacio", "", "success");
      }
    });
  };
  return (
    <div className="cartContainer">
      {cart.map((product) => (
        <div
          key={product.id}
          style={{ border: "2px solid black" }}
          className="cardCart"
        >
          <img src={product.img} alt="" />
          <h2>nombre: {product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      <h2>total: {totalPrice}</h2>
      <Button variant="outlined" onClick={alertClearCart}>
        Vaciar carrito
      </Button>
      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
