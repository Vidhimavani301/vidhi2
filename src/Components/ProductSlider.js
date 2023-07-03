import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function ProductSlider() {
    var settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div>
        <Slider {...settings}>

            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div> 
                        <Link to="#"><img src="assets/img/shop-img-101.png" className='w-100' alt="product" /></Link> 
                    </div>
                </div>
            </div>

            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="#"><img src="assets/img/shop-img-102.png" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>

            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="/Standard"><img src="assets/img/shop-img-103.png" className='w-100' alt="product" /></Link> 
                    </div>
                </div>
            </div>

            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="#"><img src="assets/img/shop-img-104.png" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>

            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="#"><img src="assets/img/shop-img-105.png" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>
            <div className=" px-2">
                <div className="h-100 rounded-0">
                    <div>
                       <Link to="#"><img src="assets/img/shop-img-106.png" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}
