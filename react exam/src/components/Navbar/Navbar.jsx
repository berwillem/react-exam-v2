import "./Navbar.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
      </ul>
    </div>
  );
}
