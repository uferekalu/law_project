import React, { useRef, useState } from 'react';
import '../Stylesheets/Contact.css'
import head from "../Imges/lawyer6.jpg";
import img from "../Imges/card1.png";
import imge from "../Imges/download.png";
import imga from "../Imges/img3.png";
import Casescard from '../Components/Casescard';
import NavF from '../Components/NavF'
import Footer from '../Components/Footer'

function Contactus() {
  const formRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    formRef.current.reset();
    setFormErrors({});
  };

  const handleInputChange = (event) => {
    const input = event.target;
    const name = input.name;
    const value = input.value;
    const errors = { ...formErrors };
    if (input.hasAttribute('required') && !value) {
      errors[name] = 'This field is required';
    } else {
      delete errors[name];
    }
    setFormErrors(errors);
  }

  return (
    <>
    <NavF />
      <div className="mb-5">

        <img
          src={head}
          alt=""
          style={{
            width: "100%",
            height: "50vh",
            backgroundSize: "cover",
            marginTop: "30px",
           

          }}
        ></img>
      
      </div>


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

      <div className='main'>
        <div className="contact-form">
          <div className="first-container">
            <div className="info-container">
              <div>
                <h3>Address</h3>
                <p>H-block, Street no-17, New Delhi- 110001, India</p>
              </div>
              <div>
                <h3>Lets Talk</h3>
                <p>+1 800 1236879</p>
              </div>
              <div>
                <h3>General Support</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h2>Send Us A Message</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <label htmlFor="name-input">Tell us your name*</label>
                <input id="name-input" type="text" placeholder="First name" name="firstName" onChange={handleInputChange} required />
                {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                <input type="text" placeholder="Last name" name="lastName" onChange={handleInputChange} required />
                {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Enter your email</label>
                <input id="email-input" type="email" placeholder="Eg. example@gmail.com" name="email" onChange={handleInputChange} required />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone-input">Enter phone number</label>
                <input id="phone-input" type="tel" placeholder="Eg. _1800 000000" name="phone" onChange={handleInputChange} required />
                {formErrors.phone && <span className="error">{formErrors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message-textarea">Message</label>
                <textarea className="textarea" id="message-textarea" placeholder="Write us a message" name="message" onChange={handleInputChange} />

              </div>
              <button className="btn" type="submit" aria-label="Submit form">Send Message</button>
            </form>
          </div>
        </div>
      </div>
<Casescard/>
<Footer />
    </>
  );
}

export default Contactus;












