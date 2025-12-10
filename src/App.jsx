import Nav from "./Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Prices from "./components/prices.jsx";
import About from "./components/About.jsx";
import Contact from "./components/contact.jsx";
import PrivacyPolicy from "./components/Privacy.jsx";

export default function App() {
  return (
    <section>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </section>
  );
}
