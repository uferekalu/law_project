
import Carousel from "../Components/Carousel";
import "../Stylesheets/Frontpg.css";
import img from "../Imges/card1.png";
import imge from "../Imges/download.png";
import imga from "../Imges/img3.png";
import { Card } from "react-bootstrap";
import Slider from "../Components/Slider";
import Casescard from "../Components/Casescard";
import ServicesCard from "../Components/ServicesCard";
import Seccontact from "../Components/Seccontact";
import LatestNews from "../Components/LatestNews";
import NavF from '../Components/NavF'
import Footer from '../Components/Footer'

const FrontPage = () => {
  return (
    
    <>

<NavF/>
      <section>
        <Carousel />
      </section>
      <section className="sec2">
        <div className="cards">
          <div className="cardss">
            <div className="new">
              <div className="cardlogo">
                <img src={img} alt="no img" />
              </div>
              <p className="cardtext">Book Your</p>
              <h1 className="cardtext2">Appointment</h1>
            </div>
          </div>

          <div className="cardss">
            <div className="new">
              <div className="cardlogo">
                <img src={imge} alt="no img" />
              </div>
              <p className="cardtext">Get Free</p>
              <h1 className="cardtext2">Expert Advice</h1>
            </div>
          </div>

          <div className="cardss">
            <div className="new">
              <div className="cardlogo">
                <img src={imga} alt="no img" />
              </div>
              <p className="cardtext">You Can Easily</p>
              <h1 className="cardtext2">Join Our Team</h1>
            </div>
          </div>
        </div>
      </section>

      {/* how can help you section */}
<Casescard/>
      <Slider />
      <ServicesCard/>
      <Seccontact/>
   <LatestNews/>
   <Footer />
    </>
  );
};

export default FrontPage;
