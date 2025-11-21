import { Link } from "react-router-dom";
import logo from "../assets/img/light-jake.svg";

import "./nav.css";
import { useState } from "react";
export default function Nav() {
  const [isClicked, setIsClicked] = useState("false")

  function HandleButton(){
    setIsClicked(!isClicked);
  }

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
        <div className={isClicked? "nav-right":"nav-clicked"}>
          <Link to="/">Home</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div onClick={HandleButton} className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
