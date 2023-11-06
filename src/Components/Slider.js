import Card from "../Pages/Card";
import Avatar1 from "../Imges/card1.png"
import Avatar2 from "../Imges/family.png"
import Avatar3 from "../Imges/bussiness.png"
import Avatar4 from "../Imges/img3.png"
import Avatar5 from "../Imges/personal.png"

function Slider() {
    return (
        <div className="py-5 my-5" style={{backgroundColor:'white' ,  boxshadow: '-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="fw-bold heading">What our client say</h1>
                    </div>
                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <button style={{ backgroundColor: "white" }} className="btn" type="button" data-bs-target="#Testimonials" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="btn" style={{ backgroundColor: "white" }} type="button" data-bs-target="#Testimonials" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div id="Testimonials" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar1}
                                        TestimonialName="Bradley Smythe"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar2}
                                        TestimonialName="Hana White"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar3}
                                        TestimonialName="John Stewart"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar4}
                                        TestimonialName="Bradley Smythe"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar2}
                                        TestimonialName="Hana White"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar1}
                                        TestimonialName="John Stewart"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar3}
                                        TestimonialName="RDJ"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar2}
                                        TestimonialName="Chris Evans"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Card
                                        TestimonialImage={Avatar5}
                                        TestimonialName="Henry Cawil"
                                        TestimonialMessage="This Site is the best place to learn new Technologies and Courses. I have learned a lot many thins from this platform."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;