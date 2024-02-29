import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1707352525/149555709-dise_C3_B1o-de-vectores-de-comercio-electr_C3_B3nico-de-plantilla-de-logotipo-de-carro-de-tecnolog_C3_ADa-vector_mverjx.jpg"
            alt=""
          />
        </Link>
        <ul className="categories">
          <Link to="/">Todos</Link>
          <Link to="/category/auriculares">auriculares</Link>
          <Link to="/category/relojes">relojes</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
