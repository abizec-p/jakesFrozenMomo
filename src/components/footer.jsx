import "../components/footer.css";
import darklogo from "../assets/img/dark-jake.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-left">
        <h1>Thank you</h1>
        <p>Hoping to talk to you soon.</p>

        <img src={darklogo} alt="jake's logo" />
        <p></p>
      </div>
      <div className="footer-right">
        <h1>Contact us</h1>
        <p>Mississauga, ON, Canada</p>
        <p>+1(437)665-1393 </p>
        <p>Jakesfrozenmomo@gmail.com </p>
      </div>
      <div className="footer-links">
        <h1>Quick Links</h1>
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/prices">Prices</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
}
