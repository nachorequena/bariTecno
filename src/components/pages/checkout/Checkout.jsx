import { Link } from "react-router-dom";
import "./checkout.css";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div className="containerCheckout">
      {orderId ? (
        <div>
          <h1>Gracias por tu compra, tu numero de seguimiento es:</h1>
          <div className="numId">
            <h2>{orderId}</h2>
            <ContentCopyIcon />
          </div>
          <Link to="/">
            <Button type="submit" variant="contained">
              seguir comprando...
            </Button>
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

          <Button type="submit" variant="contained" color="success">
            comprar
          </Button>
        </form>
      )}
    </div>
  );
};
