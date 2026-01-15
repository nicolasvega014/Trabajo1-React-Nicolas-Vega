import CartWidget from "./CartWidget";
import "../CSS/Navbar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <h2 className="nav-logo">MiTienda</h2>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}



export default NavBar;
