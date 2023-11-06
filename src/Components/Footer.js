import React from 'react'
import '../Stylesheets/Footer.css'
import Image  from '../Imges/layer logo.jpg'
import { Link } from 'react-router-dom'
function Footer() {
  return (

<footer id="dk-footer" className="dk-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <div className="dk-footer-box-info">
          <a href="index.html" className="footer-logo">
            <img src={Image } alt="footer_logo" className="img-fluid logoimg" />
          </a>
          <p className="footer-info-text">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
          </p>
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul>
              <li>
                <Link to="#">
                  <i className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-google-plus" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-linkedin" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
          {/* End Social link */}
        </div>
        {/* End Footer info */}
        <div className="footer-awarad">
          <img src="images/icon/best.png" alt="pic" />
          <p>Best Design Company 2019</p>
        </div>
      </div>
      {/* End Col */}
      <div className="col-md-12 col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-us">
              <div className="contact-icon">
                <i className="fa fa-map-o" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>Lahore Pakistan</h3>
                <p>5353 Road pakpttan</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="contact-us contact-us-last">
              <div className="contact-icon">
                <i className="fa fa-volume-control-phone" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>+9231278654</h3>
                <p>Give us a call</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
        </div>
        {/* End Contact Row */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget footer-left-widget">
              <div className="section-heading">
                <h3>Useful Links</h3>
                <span className="animate-border border-black" />
              </div>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Cases</Link>
                </li>
                <li>
                  <Link to="#">Death Cases</Link>
                </li>
                <li>
                  <Link to="#">Criminal Cases</Link>
                </li>
                
              </ul>
              <ul>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Family cases</Link>
                </li>
                <li>
                  <Link to="#">Criminal Cases</Link>
                </li>
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
          {/* End col */}
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget">
              <div className="section-heading">
                <h3>Subscribe</h3>
                <span className="animate-border border-black" />
              </div>
              <p>
                {/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                Reference site about Lorem Ipsum, giving information on its origins, as well.
              </p>
              <form action="#">
                <div className="form-row">
                  <div className="col dk-footer-form">
                    <input type="email" className="form-control" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-send" />
                    </button>
                  </div>
                </div>
              </form>
              {/* End form */}
            </div>
            {/* End footer widget */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Col */}
    </div>
    {/* End Widget Row */}
  </div>
  {/* End Contact Container */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <span>Copyright By Misha</span>
        </div>
        {/* End Col */}
        <div className="col-md-6">
          <div className="copyright-menu">
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End col */}
      </div>
      {/* End Row */}
    </div>
    {/* End Copyright Container */}
  </div>
  {/* End Copyright */}
  {/* Back to top */}
  <div id="back-to-top" className="back-to-top">
    <button className="btn btn-dark" title="Back to Top" style={{display: 'block'}}>
      <i className="fa fa-angle-up" />
    </button>
  </div>
  {/* End Back to top */}
</footer>

  )
}

export default Footer