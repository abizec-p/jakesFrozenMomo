import aboutMomo from "../assets/img/closeupmomo.JPG"
import "./about.css"

export default function About(){
    return(
        <section className="about-us">
            <div className="left-about">
            <h1>About Us</h1>
            <p>At Jake’s Frozen Momo, we believe great food starts with honest ingredients and authentic craftsmanship. Every momo we make is inspired by the rich flavours of Himalayan kitchens and the comfort of homemade cooking. <br />
            <br />
            We prepare each batch with strict hygiene standards, fresh ingredients, and zero shortcuts—because your trust matters to us. Our momos are flash-frozen at peak freshness to lock in flavour, ensuring every bite tastes just as good as the moment it was made. <br />
            <br />
            Our promise is simple: quality, cleanliness, and consistency, delivered straight to your plate. Whether you're cooking for your family or craving a quick, delicious meal, Jake’s Frozen Momo brings you the perfect blend of tradition, taste, and convenience.
            
            </p>
            </div>
            <div className="right-about">
                <img src={aboutMomo} alt="" />
            </div>
        </section>
    )
} 