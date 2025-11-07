import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Handloom Fashion</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/basket">🛒 Basket</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
