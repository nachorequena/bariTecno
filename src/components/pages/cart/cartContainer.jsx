import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();

  const alertClearCart = () => {
    Swal.fire({
      title: "¿Estas seguro de que quieres vaciar el carrito?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Tu carrito está vacío", "", "success");
      }
    });
  };

  const handleCompletePurchase = () => {
    if (cart.length === 0) {
      Swal.fire(
        "Tu carrito está vacío",
        "Agrega productos antes de realizar la compra",
        "error"
      );
      return;
    }

    Swal.fire({
      title: "Confirmar compra",
      text: "¿Estás seguro de que quieres realizar esta compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "No, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const phoneNumber = "3404645020"; // Número de teléfono de destino (sin el símbolo + y con el código de país)
        const message = `Hola, quiero realizar el siguiente pedido:\n\n${cart
          .map(
            (item, index) =>
              `${index + 1}. ${item.title} - Cantidad: ${item.quantity}\n`
          )
          .join("")}\nTotal: $${totalPrice}\n\nGracias.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
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
          <h2>Nombre: {product.title}</h2>
          <h2>Cantidad: {product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      <h2>Total: {totalPrice}</h2>
      <Button variant="outlined" onClick={alertClearCart}>
        Vaciar carrito
      </Button>
      <Button variant="contained" onClick={handleCompletePurchase}>
        Terminar compra
      </Button>
    </div>
  );
};
