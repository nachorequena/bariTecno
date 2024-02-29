import { useState } from "react";
import { Checkout } from "./Checkout";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();

    console.log("se envio el formulario");
    console.log(userInfo);
  };

  const capturar = (event) => {
    console.log(event);
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
