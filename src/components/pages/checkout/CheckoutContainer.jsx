import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  let totalPrice = getTotalPrice();

  const [orderId, setOrderId] = useState(null);

  const envioDeFormulario = (e) => {
    e.preventDefault();
    let order = {
      buyer: { userInfo },
      items: cart,
      total: totalPrice,
    };

    let ordersCollection = collection(dataBase, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let refDoc = doc(dataBase, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  const capturar = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Checkout
      envioDeFormulario={envioDeFormulario}
      capturar={capturar}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
