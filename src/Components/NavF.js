import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Frontpg.css";
import img from "../Imges/imgs.webp";

const Navigation = () => {
  return (
    <>
  
      <header>
        <div className="container-fluid">
          <div className="navb-logo">
            <img className="logos" src={img} alt="Logo" />
          </div>
          <div className="navb-items ms-auto d-none d-xl-flex">
            <div className="item">
              <Link className="link" to="/">Home</Link>
            </div>
           
            
            <div className="item">
              <div className="dropdown">
                <div
                  className="text "
                  type="text"
                  id="dropdownMenu"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cases
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <Link className="dropdown-item" to="#">
                    Criminal Cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                    Civil Cases
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                    Family Cases »
                    </Link>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <Link className="dropdown-item" to="#">
                        Marriage 
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                        Paternity 
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                        Divorce»{" "}
                        </Link>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <Link className="dropdown-item" to="#">
                            Guardianship
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Multi level 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                        civil cases
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                        Dative
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            

            <div className="item">
              <a href="about" className="link">About</a>
            </div>
            <div className="item">
              <a href="/contact" className="link">Contact</a>
            </div>
            <div className="item-button">
              <div className="buttn">
              <Link to="/login"  type="button" className="btn btn-light btn-sm btnn">Login</Link>
              </div>
            </div>
          </div>

          <div className="mobile-toggler d-lg-none">
            <Link to="#" data-bs-toggle="modal" data-bs-target="#navbModal">
              <i className="fa-solid fa-bars" />
            </Link>
          </div>

          <div
            className="modal fade"
            id="navbModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <div className="navb-logo">
            <img className="logos" src={img} alt="Logo" />
          </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-line">
                    <i className="fa-solid fa-house" />
                    <Link to="/">Home</Link>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-bell-concierge" />
                    <a href="/services">Services</a>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-bell-concierge" />
                    <div className="dropdown">
                      <div
                        className="text "
                        type="text"
                        id="dropdownMenu"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Cases
                      </div>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Submenu »
                          </Link>
                          <ul className="dropdown-menu dropdown-submenu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Submenu item 1
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Submenu item 2
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Submenu item 3 »{" "}
                              </Link>
                              <ul className="dropdown-menu dropdown-submenu">
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    Multi level 1
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item" to="#">
                                    Multi level 2
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Submenu item 4
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Submenu item 5
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="modal-line">
                    <i className="fa-solid fa-circle-info" />
                    <a href="/about">About</a>
                  </div>
                  <div className="modal-line">
                    <i className="fa-solid fa-circle-info" />
                    <a href="/contact">Contact</a>
                  </div>
                  <div className="buttn">
                <Link to="/login"  type="button" className="btn btn-light btn-sm btnn">Login</Link>
                <Link to="/register" type="button" className="btn btn-light btn-sm btnn">  Register</Link>
              </div>
                </div>
                <div className="mobile-modal-footer">
                  <Link target="_blank" to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link target="_blank" to="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link target="_blank" to="#">
                    <i className="fa-brands fa-youtube" />
                  </Link>
                  <Link target="_blank" to="#">
                    <i className="fa-brands fa-facebook" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
