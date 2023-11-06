import React from 'react'
import "../Stylesheets/Servicecard.css"
import img from '../Imges/about.png'
import imge from '../Imges/per-issues.jpg'
import imga from '../Imges/bus-accounting.jpg'
import imgae from '../Imges/buss-fAMILY.jpg'
import imgaa from '../Imges/GENERAL.jpg'
import imgea from '../Imges/CRIMINALPRC.jpg'
function ServicesCard() {
  return (
    <>
    
<section id="team" className="pb-5 section1">
  <div className="container">

    <h5 className="section-title h1">OUR Services</h5>
    <div className="row">
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip">
          <div className="mainflip flip-0">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p><img className=" img-fluid" src={img} alt='pic' /></p>
                  <h4 className="card-title">Corporate</h4>
                  <p className="card-text">General Practice</p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">General Practice</h4>
                  <p className="card-text">Unlike many law firms that specialize in one or two areas of the law, a Harrison County general practice law firm specializes in various fields of law, including personal injury, family law, business litigation and mediation, estate planning, and general litigation</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ./Team member */}
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                <p><img className=" img-fluid" src={imge} alt='pic' /></p>                  <h4 className="card-title">General</h4>
                  <p className="card-text">Personal Issue</p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">Personal Issue</h4>
                  <p className="card-text">Unlike many law firms that specialize in one or two areas of the law, a Harrison County general practice law firm specializes in various fields of law, including personal injury, family law, business litigation and mediation, estate planning, and general litigation</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ./Team member */}
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                <p><img className=" img-fluid" src={imga} alt='pic' /></p>                  <h4 className="card-title">Business</h4>
                  <p className="card-text">Business Accounting</p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">business</h4>
                  <p className="card-text">The Sarbanes-Oxley Act, also known as the SOX Act, is a 2002 federal law that enacted a comprehensive reform of business financial practices. It put in place new standards for public accounting firms, corporate management, and corporate boards of directors at publicly held companies.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ./Team member */}
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                <p><img className=" img-fluid" src={imgae} alt='pic' /></p>                   <h4 className="card-title">Family issue</h4>
                  <p className="card-text">Business Accounting</p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">Business Accounting</h4>
                  <p className="card-text">There is also a unique set of challenges that family-owned businesses have to face as a result of the nature of their business structure.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ./Team member */}
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" onTouchStart={() => this.classList.toggle('hover')}>
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                <p><img className=" img-fluid" src={imgaa} alt='pic' /></p>                    <h4 className="card-title">Corporate</h4>
                  <p className="card-text">General Practice </p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">General Practice</h4>
                  <p className="card-text">General practice is similar to urgent care or a general health clinic. General practitioners offer general medical services to patients of all ages but do not typically specialize in a particular area.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ./Team member */}
      {/* Team member */}
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" oonTouchStart={() => this.classList.toggle('hover')}>
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                <p><img className=" img-fluid" src={imgea} alt='img' /></p>      
                              <p className="card-text">CRIMINAL</p>
                  <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">CRIMINAL</h4>
                  <p className="card-text">concerns the system of legal rules that define what conduct is classified as a crime and how the government may prosecute individuals that commit crimes
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-icon text-xs-center" target="_blank" rel="noreferrer" href="https://www.fiverr.com/share/qb8D02">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
    </>
  )
}

export default ServicesCard