import { Link } from "react-router-dom";
import logo from "./assets/img/light-jake.svg";
import {CircleX} from "lucide-react";

import "./nav.css";
import {  useState } from "react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(); 
  console.log(isOpen);
 
  function HandleButton(){
    setIsOpen(!isOpen);
    
    
    
   
  }

  return (
    <section>
      <div className="navigation-bar">
        <div className="nav-left">
          <div className="logo">
            <Link onClick={() => setIsOpen(false)} to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className={isOpen? "nav-show":"nav-right"}>
          <div className="menu-div">
            <img src={logo} alt="logo" />
          <Link className="menu-item" onClick={HandleButton} to="/">Home</Link>
          <Link className="menu-item" onClick={HandleButton} to="/prices">Prices</Link>
          <Link className="menu-item" onClick={HandleButton} to="/about">About us</Link>
          <Link className="menu-item" onClick={HandleButton} to="/contact">Contact Us</Link>
          <button className="menu-close-button" onClick={()=>setIsOpen(false)}>
<CircleX size={40} />          </button>
          </div>
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
