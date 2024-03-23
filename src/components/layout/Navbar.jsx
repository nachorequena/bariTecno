import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";
import "./Navbar.css";
import { menuNavigation } from "../../router/menuNavigation";

export const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1711177381/149555709-dise_C3_B1o-de-vectores-de-comercio-electr_C3_B3nico-de-plantilla-de-logotipo-de-carro-de-tecnolog_C3_ADa-vector_mverjx-removebg-preview_ex459h.png"
            alt="logo"
          />
        </Link>
        <ul className="categories">
          {menuNavigation.map(({ id, text, path }) => (
            <Link key={id} to={path}>
              {text}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
