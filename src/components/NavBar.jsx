import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../CSS/Navbar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <h2 className="nav-logo">
        <Link to="/">MiTienda</Link>
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/remeras">Remeras</Link>
        </li>
        <li>
          <Link to="/category/zapatillas">Zapatillas</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
