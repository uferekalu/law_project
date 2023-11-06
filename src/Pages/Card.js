import "../Stylesheets/Slider.css"

function Card(props) {
    return (
        <div className="card TestimonialCard">
            <div className="card-body">
                <div className="row py-2">
                    <div className="TestimonialImage col-md-2">
                        <img src={props.TestimonialImage} alt="" />
                    </div>
                    <div className="col-md-10" style={{display:'flex', alignItems:'center'}}>
                        <h5>{props.TestimonialName}</h5>
                    </div>
                </div>
                <div className="py-2">
                    <h6>{props.TestimonialMessage}</h6>
                </div>
            </div>
        </div>
    );
}

export default Card;