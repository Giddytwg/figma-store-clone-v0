
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  

export default function NewSlider({products, slidesNo}) {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesNo,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      {products.map((sp)=> (
                            <div key={sp.id} className="">
                                <div 
                                className="rounded-[30px] overflow-hidden w-[80%] h-[50vh] md:h-[40vh]  zigzag-box m-auto" >
                                    <Link to={`${sp.id}`}>
                                        <div className="group"><img src={sp.pictures[0]} alt=""/>
                                        <p className="p-2 text-[.8rem] font-semibold top-[50%] translate-x-2/4 bg-white rounded-xl absolute opacity-0 group-hover:opacity-100 transition-opacity">{sp.name}</p></div>
                                    </Link>
                                </div>
                            </div>
                        ))}
    </Slider>
  );
}

NewSlider.propTypes ={
    slidesNo: PropTypes.number,
    products: PropTypes.array
}