import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sample_logo.png";
export const Header = () => {
  return (
    <header className="flex justify-between items-center border border-gray-200 mx-40">
      <Link to="/" className="flex-1 flex justify-start items-center p-2">
        <img src={logo} alt="logo" width={60} />
        <span>Assignment Cart</span>
      </Link>

      <nav className="flex-1  flex justify-center items-center gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <div className="flex-1  flex justify-end items-center gap-2">
        <p>Cart :</p>
        <span>4</span>
      </div>
    </header>
  );
};
