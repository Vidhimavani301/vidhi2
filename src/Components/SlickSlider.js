import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function SlickSlider() {
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

            <div className="px-2 mb-5">
                <div className="h-100 ">
                    <div>
                        <Link to="/Grouped"><img src="assets/img/shop-img-4.jpg" className='w-100'  alt="product" /></Link> 
                    </div>
                </div>
            </div>

            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div> 
                        <Link to="/External"><img src="assets/img/shop-img-9.jpg" className='w-100' alt="product" /></Link> 
                    </div>
                </div>
            </div>

            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="/Virtual"><img src="assets/img/shop-img-10.jpg" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>

            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="#"><img src="assets/img/shop-img-71.jpg" className='w-100' alt="product" /></Link> 
                    </div>
                </div>
            </div>

            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="#"><img src="assets/img/shop-img-5.jpg" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>

            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                        <Link to="/Variable"><img src="assets/img/shop-img-3.jpg" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>
            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                       <Link to="#"><img src="assets/img/shop-img-66.jpg" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>
            <div className="mb-5 px-2">
                <div className="h-100 rounded-0">
                    <div>
                       <Link to="/Standard"><img src="assets/img/shop-img-80.jpg" className='w-100' alt="product" /></Link>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}
