import "./contact.css";
import { Phone, Mail, MapPin, Instagram , Facebook, Youtube} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="left-contact">
        <h1>Contact us</h1>
        <p>
          Hope you would our product please contact us for any order or any
          question.
        </p>
        <div className="contact-detail">
          <li>
            <span className="icons phone">
              <Phone size={16} strokeWidth={1.75} />
            </span>
            (437) 665-1393
          </li>
          <li>
            <span className="icons mail">
              <Mail size={16} strokeWidth={1.75} />
            </span>
            jakesfrozenmomo@gmail.com
          </li>
          <li>
            <span className="icons map">
              <MapPin size={16} strokeWidth={1.75} />
            </span>
            4233 tea garden circle, Mississauga, ON, Canada
          </li>
          <div className="social">
          <div className="social-icons">
          <span><Instagram size={30} strokeWidth={1.75} /></span>
          <span><Facebook size={30} strokeWidth={1.75} /></span>
          <span><Youtube size={30} strokeWidth={1.75} /></span>
          </div>
</div>
          
        </div>
      </div>
      <div className="right-contact">
        <h1>Or write me a letter like this</h1>
        <div className="letter">
          <p>Momo Lover</p>
          <p>123 street, cityname</p>
          <p>123-456-7890</p>
          <br />

          <p>Abishek Pariyar</p>
          <p>Jakes Frozen Momo Pvt. Ltd</p>
          <p>4233 tea garden circle</p>
          <p>Mississauga, ON, Canada</p>
          <br />

          <p>Subject : how i fell in love 😉</p>
          <br />
          <p>Dear Mr.Pariyar</p>
          <p>
            Hope you're doin well, I wanted to talk to you about ... ... (How i
            love you)
          </p>
          <p>... ...</p>
          <p>... ...</p>
          <p>... ...</p>
          <p>Yours sincerly</p>
          <p className="cursive">momolover</p>

          <p>Momo Lover</p>
        </div>
      </div>
    </section>
  );
}
