
import React from 'react';
import img from '../Imges/lawyer1.jpg'
import img1 from '../Imges/lawyer2.jpg'
import img2 from '../Imges/lawyer3.jpg'
import img3 from '../Imges/lawyer6.jpg'
import img4 from '../Imges/lawyer5.jpg'
import '../Stylesheets/Frontpg.css'
const Carousel = () => {

  return (
    <>
<section className="home" id="home">
<div className="swiper mySwipe home-slider">
  <div className="swiper-wrapper wrapper">
    <div className="swiper-slide slide">
      <div className="content">
        <div className="imgs">

          <img className='imges' src={img} alt="" />
          <div className="img-text">
                    <span className="img-heading">AS Like A Friend</span>
                    <span className="img-subheading">"Hey there! As your lawyer, I want to make sure you feel comfortable discussing any legal matters with me. I understand that legal issues can be complex and overwhelming,</span>
                  </div>
        </div>
      </div>
    </div>
    <div className="swiper-slide slide">
      <div className="content">
        <div className="imgs">
          <img className='imges' src={img1} alt="" />
          <div className="img-text">
          <span className="img-heading">AS Like A Friend</span>
                    <span className="img-subheading">"Hey there! As your lawyer, I want to make sure you feel comfortable discussing any legal matters with me. I understand that legal issues can be complex and overwhelming,</span>
                  </div>
        </div>
      </div>
    </div>
   <div className="swiper-slide slide">
      <div className="content">
        <div className="imgs">
          <img className='imges' src={img2} alt="" />
          <div className="img-text">
          <span className="img-heading">AS Like A Friend</span>
                    <span className="img-subheading">"Hey there! As your lawyer, I want to make sure you feel comfortable discussing any legal matters with me. I understand that legal issues can be complex and overwhelming,</span>
                  </div>
        </div>
      </div>
    </div>
   <div className="swiper-slide slide">
      <div className="content">
        <div className="imgs">
          <img className='imges' src={img3} alt="" />
          <div className="img-text">
          <span className="img-heading">AS Like A Friend</span>
                    <span className="img-subheading">"Hey there! As your lawyer, I want to make sure you feel comfortable discussing any legal matters with me. I understand that legal issues can be complex and overwhelming,</span>
                  </div>
        </div>
      </div>
    </div>
   <div className="swiper-slide slide">
      <div className="content">
        <div className="imgs">
          <img className='imges' src={img4} alt="" />
          <div className="img-text">
          <span className="img-heading">AS Like A Friend</span>
                    <span className="img-subheading">"Hey there! As your lawyer, I want to make sure you feel comfortable discussing any legal matters with me. I understand that legal issues can be complex and overwhelming,</span>
                  </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

    </>
  );
};

export default Carousel;





