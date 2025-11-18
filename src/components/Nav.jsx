import { Link } from "react-router-dom";
import logo from "../assets/img/light-jake.svg";

import "./nav.css";
export default function Nav() {
  return (
    <section>
      <div className="navigation-bar">
        <div className="nav-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
