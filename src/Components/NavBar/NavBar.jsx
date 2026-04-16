import { ShoppingCart } from "lucide-react";
import logo from "../../assets/icon.png";
const NavBar = ({ cart }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center">
          <ul className="flex gap-3 justify-between items-center">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Featuring</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost">
            <ShoppingCart></ShoppingCart>({cart.length})
          </button>
          <button className="btn btn-ghost">login</button>
          <button className="btn btn-primary rounded-3xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
