import { useState } from "react";
import { Checkout } from "./Checkout";

const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log("se envio el formulario");
    console.log(userInfo);
  };

  const capturar = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};

export default CheckoutContainer;
