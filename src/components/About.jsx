import aboutMomo from "../assets/img/closeupmomo.JPG"
import "./about.css"

export default function About(){
    return(
        <>
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
        <section className="second-section">
            <div className="second-text">
            <p>Jake’s Frozen Momo began its journey in 2024, founded by Abishek Pariyar and Jodiga Pariyar, with a simple dream: to share the authentic taste of Himalayan momos with everyone, far beyond the kitchens of their childhood. In the very beginning, they started small—just one or two orders a week—but each momo was made with care, passion, and a commitment to quality that never wavered. <br />
            <br />

From hand-selecting the freshest ingredients to perfecting the traditional folding techniques, every step of the process reflects their dedication to authenticity. Their momos quickly became more than just a meal—they were a connection to home, a comfort food that carried the warmth of family and tradition. Even as demand grew, Abishek and Jodiga never compromised on hygiene, flavor, or freshness. Each batch continues to be flash-frozen at its peak, ensuring that the taste you experience today is exactly as it was meant to be—homemade, wholesome, and unforgettable. <br />
<br />

What started as a tiny, homegrown endeavor has now blossomed into a trusted name for frozen momos, bringing the perfect balance of tradition, taste, and convenience to tables everywhere. Every bite tells the story of humble beginnings, passionate craftsmanship, and a promise to keep delivering quality, one momo at a time.</p>
</div>
        </section>
        </>
    )
} 