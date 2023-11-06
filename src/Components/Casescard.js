import React from 'react'
import imga from "../Imges/family.png";
import imges from "../Imges/bussiness.png";
import image from "../Imges/criminal.png";
import imag from "../Imges/Real.png";
import imege from "../Imges/education.png";
import img from "../Imges/education.png";
import '../Stylesheets/Casecard.css'
function Casescard() {
  return (
    <div>


<section>

<div className="card-container">

  <div className="new-card">
    <div className="card-circle">
      <img className="images" src={imga} alt='pic' />
      <div className="dot"></div>
    </div>
    <div className="divtext">
      <h1 className="text-law">Family Law</h1>
      <h6 className="texth6">A group of persons who are connected by blood or by affinity or through law within two or three generations.</h6>
    </div>
  </div>

  <div className="new-card">
    <div className="card-circle">
    <img className="images" src={img} alt='pic'/>
      <div className="dot"></div>
    </div>
    <div className="divtext">
      <h1 className="text-law">Personal Injury</h1>
      <h6 className="texth6">physical injuries, mental injuries, or property damage caused to you by another party's negligence</h6>
    </div>
  </div>

  <div className="new-card">
    <div className="card-circle">
      <div className="dot"></div>
      <img className="images" src={imges} alt='pic'/>
    </div>
    <div className="divtext">
      <h1 className="text-law">Business Law</h1>
      <h6 className="texth6">Laws get their legitimacy from being based on principles that are universally accepted</h6>
    </div>
  </div>

  <div className="new-card">
    <div className="card-circle">
      <div className="dot"></div>
      <img className="images" src={image} alt='pic'/>
    </div>
    <div className="divtext">
      <h1 className="text-law">Criminal Law</h1>
      <h6 className="texth6">A group of persons who are connected by blood or by affinity or through law within two or three generations.</h6>
    </div>
  </div>

  <div className="new-card">
    <div className="card-circle">
      <div className="dot"></div>
      <img className="images" src={imege} alt='pic'/>
    </div>
    <div className="divtext">
      <h1 className="text-law">Education Law</h1>
      <h6 className="texth6">The core purpose of this type of law is to provide a high-quality education for all children, </h6>
    </div>
  </div>
  <div className="new-card">
    <div className="card-circle">
      <div className="dot"></div>
      <img className="images" src={imag} alt='pic'/>
    </div>
    <div className="divtext">
      <h1 className="text-law">Real Estate Law</h1>
      <h6 className="texth6">the area of law that governs using, buying and selling of land, it's the law that governs how people acquire property </h6>
    </div>
  </div>

</div>

</section>
    </div>
  )
}

export default Casescard