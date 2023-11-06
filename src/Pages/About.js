import React from "react";
import { Button, Col, Container, Fade, Image, Row } from "react-bootstrap";
import Data from "../Imges/about.png";
import head from "../Imges/lawyer6.jpg";
import { Link } from "react-router-dom";
import NavF from '../Components/NavF'
import Footer from '../Components/Footer'
import img from "../Imges/card1.png";
import imge from "../Imges/download.png";
import imga from "../Imges/family.png";
import Casescard from "../Components/Casescard";
function About() {
  return (
    <>
        <NavF />
    <Row className="mb-5">
          <Col>
            <img
              src={head}
              alt=""
              style={{
                width: "100%",
                height: "50vh",
                backgroundSize: "cover",
                marginTop:"30px",
             
              }}
            ></img>
          </Col>
        </Row>
        <section className="sec2">
        <div className="cards">
          <div className="cardss">
            <div className="new">
              <div className="cardlogo">
                <img  src={img} alt="no img" />
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
    <Fade in={true}>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Image src={Data} alt="" srcset="" style={{ width: "100%" ,height:'400px',marginBottom:"30px"}} />
          </Col>
          <Col md={6} sm={12}>
            <h1 style={{color:"black",textAlign:"left", margin:"10px"}}>About</h1>
            <p style={{color:"black",textAlign:"left", margin:"10px"}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,
            </p>
            <p style={{color:"black",textAlign:"left", margin:"10px"}}>
            and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
            </p>
            <Link to="/">
           <button  className="btn btn-dark btn-lg" variant="outline-light">Read More</button>
           </Link>
           
          </Col>
        </Row>
      </Container>
    </Fade>
<Casescard/>
<Footer />
    </>
  );
}

export default About;
