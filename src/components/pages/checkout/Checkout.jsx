import { Link } from "react-router-dom";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1>Gracias por tu compra, tu numero de seguimiento es {orderId} </h1>
          <Link to="/">
            <button>Seguir comprando...</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu apellido"
            onChange={capturar}
            name="lastName"
          />

          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />

          <button type="submit">comprar</button>
        </form>
      )}
    </div>
  );
};
