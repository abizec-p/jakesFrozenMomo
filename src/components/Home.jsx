import "../components/home.css";
import lastImage from "../assets/img/momo-steam.jpg";
import chickenmomo from "../assets/img/chickenmomo.JPG"
import paneermomo from "../assets/img/dumpling.jpg"
import jholachar from "../assets/img/jholmomo.jpg"

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="main">
          <h1>
            What's goin on? <br />
            Craving Mo:Mo?
          </h1>
          <div className="call-to-action">
            <button className="order-now">Order Yours</button>
          </div>
        </div>
      </section>
      <section className="info-section">
        <h1>Our most loved products</h1>
        <p>
          Here are some of our best selling products which you might love as
          well. Made with Love!
        </p>
        <div className="info-container">
        <div>
          <img src={chickenmomo} alt="chicken momo" />
          <h2>Chicken mo:mo</h2>
        </div>
        <div>
          <img src={paneermomo} alt="paneer momo" />
          <h2>Paneer mo:mo</h2>
        </div>
        <div>
          <img src={jholachar} alt="jholachar" />

          <h2>Jake's Jhol momo</h2>
        </div>
        </div>
      </section>
      <section>
        <div className="prices">
          <h1>Prices</h1>
          <div className="prices-main">
            <div className="prices-img"></div>
            <div className="prices-list">
              <div className="list-name">
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Chicken Mo:Mo</li>
                    <li>$35</li>
                  </div>
                  <p>
                    Ground chichen with Onion, Cabbage,garlic, ginger and
                    spices.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Pork Mo:Mo</li>
                    <li>$35</li>
                  </div>
                  <p>
                    Ground Pork with Onion, Cabbage,garlic, ginger and spices.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Paneer Mo:Mo</li>
                    <li>$35</li>
                  </div>
                  <p>
                    Grated Paneer with Onion, Cabbage,garlic, ginger and spices.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Vegg Mo:Mo</li>
                    <li>$30</li>
                  </div>
                  <p>
                    Grated Vegetables with Onion, Cabbage,garlic, ginger and
                    spices.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Beef Mo:Mo</li>
                    <li>$40</li>
                  </div>
                  <p>
                    Ground Beef with Onion, Cabbage,garlic, ginger and spices.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50 pcs Goat Mo:Mo</li>
                    <li>$35</li>
                  </div>
                  <p>
                    Ground Goat meat with Onion, Cabbage,garlic, ginger and
                    spices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="prices-main-achar">
            <div className="prices-list">
              <div className="list-name">
                <div className="list-container">
                  <div className="list-title">
                    <li>100ml Tomato achar</li>
                    <li>$10</li>
                  </div>
                  <p>
                    Tomato, onion, garlic, ginger and spices cooked and grinded.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>100ml peanut and tomato</li>
                    <li>$10</li>
                  </div>
                  <p>
                    Peanut,Tomato, onion, garlic, ginger and spices cooked and
                    grinded.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>100ml Jhol achar</li>
                    <li>$10</li>
                  </div>
                  <p>
                    Peanut, sesame seeds, onion, garlic, ginger and spices
                    cooked and grinded.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>100ml Chilli Oil</li>
                    <li>$10</li>
                  </div>
                  <p>
                    Peanut, sesame seeds, onion, garlic, ginger and spices
                    cooked and grinded.
                  </p>
                </div>
                <div className="list-container">
                  <div className="list-title">
                    <li>50ml Piro achar</li>
                    <li>$5</li>
                  </div>
                  <p>Chilli flakes, garlic and spices grinded.</p>
                </div>
              </div>
            </div>
            <div className="prices-chutney-img"></div>
          </div>
        </div>
      </section>
      <section className="last-call-to-action">
        <div className="last-image">
          <img src={lastImage} alt="momo steamed" />
        </div>
        <div className="last-call-text">
          <h1>Our Promise to our customer</h1>
          <p>
            <i>
              When Jake’s Frozen Mo:Mo started, our vision was simple: bring the
              authentic taste of Nepali mo:mo to your home using the freshest
              ingredients, and create a brand that treats every customer like
              family. Years later, our passion remains the same — delivering
              delicious, convenient mo:mo that bring joy to every meal. We make
              it easy to enjoy restaurant-quality momos anytime, straight from
              your freezer. Every bite is crafted with care, so you can taste
              the love in every mo:mo.
            </i>
          </p>
        </div>
      </section>
    </>
  );
}
