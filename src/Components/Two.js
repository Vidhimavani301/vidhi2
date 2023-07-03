import React from 'react'
import { Link } from 'react-router-dom';
export default function Two() {
  return (
    <div className='container'>
        <p className='my-5'><Link to="/" className='text-decoration-none text-dark'>Home</Link> | Two Columns</p>
        <div className='row g-0 justify-content-around mt-3'>
            <div className='col-12 col-lg-5 card '> 
                <img src='assets/img/shop-categories-product-img2.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Full Hd 1080p Webcam With Light Correction</span>
                    <p className='h1'>$120</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-18.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>SX-2299 Closed-Back Wireless Headphones</span>
                    <p className='h1'>$520</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
        </div>

        <div className='row g-0 justify-content-around mt-3'>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-66.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Optical Mouse Pro XS-854PT Carbon Black</span>
                    <p className='h1'>$170</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-71.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Wireless Headphones with 32mm Drivers</span>
                    <p className='h1'>$890</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
        </div>

        <div className='row g-0 justify-content-around mt-3'>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-76-1.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Side-by-Side Fridge & Freezer For Apartment</span>
                    <p className='h1'>$460</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-3.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Led 4K Smart TV Expo GSX-10257 Black</span>
                    <p className='h1'>$400</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
        </div>

        <div className='row g-0 justify-content-around mt-3'>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-10.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Full Hd 1080p Webcam With Light Correction</span>
                    <p className='h1'>$120</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
            <div className='col-12 col-lg-5 card'> 
                <img src='assets/img/shop-img-40.jpg'></img>
                <div className='card-boby text-center bg-body-secondary'>
                    <span className='fw-bold'>Full Hd 1080p Webcam With Light Correction</span>
                    <p className='h1'>$120</p>
                    <button className='btn btn-primary mb-2'>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}
