import React ,{useEffect, useState}from 'react';
import SlickSlider from './SlickSlider';
import ProductSlider from './ProductSlider';
export default function Grouped() {

  const[count,setcount]=useState(1)
  const Decrement = () =>{
    if(count==1){
      return
    }
    setcount(count-1)
  }

  return (
    <div>
    <section>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6 col-12">
              <img src="assets/img/shop-img-4.jpg" alt="" className="w-100"/>
              <ProductSlider/>             
            </div>
            <div className="col-lg-6 col-12">
              <div>
                <h1 className="fw-bold">Fractal Design Tempered Glass S7 Computer Case</h1>
                <div className="d-flex py-2">
                  <h3 className="fw-bold">$2,790</h3>
                </div>
                <p className="fs-6">
                  <span className="material-symbols-outlined align-middle fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fw-bold">grade</span>
                  <span className="material-symbols-outlined align-middle fw-bold t-gray">grade</span>
                  <span className="material-symbols-outlined align-middle fw-bold t-gray">grade</span>
                  (2 customer reviews)
                </p>
                <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro.</p>
              </div>

              <div className="py-1 row g-0">
                  <div className='col-12 col-lg-1'>
                    <button className="btn d-inline-block text-light py-2 px-3 text-capitalize rounded-0 mt-3 btn-primary" onClick={()=>{setcount(count+1)}}>+</button>
                  </div>
                  <div className='col-12 col-lg-1'>
                    <h3 className='mt-3 ms-3'>{count} </h3>
                  </div>
                  <div className='col-12 col-lg-1'>
                    <button className="btn d-inline-block text-light py-2 px-3 text-capitalize rounded-0 mt-3 btn-primary" onClick={()=>{Decrement()}}>-</button>
                  </div>
                  <div className='col-12 col-lg-5'>
                    <button className="btn d-inline-block text-light py-2 px-3 text-capitalize rounded-0 mt-3 btn-primary">Add to cart</button>
                  </div>
              </div>
             
              <div className="py-2 d-flex" style={{borderBottom:" 2px solid #f6f4f2"}}>
                <ul className="list-unstyled fw-bold">
                  <li>SKU:</li>
                  <li>Category:</li>
                  <li>Tags:</li>
                </ul>
                <ul className="list-unstyled px-5">
                  <li>242</li>
                  <li>Chromebooks</li>
                  <li>Computers, Equipment</li>
                </ul>
              </div>
              <div className="py-3 d-flex">
                <div>
                  <span className="d-inline-block px-1 fw-bold"> Need help?</span> 
                  <span className="d-inline-block px-1 t-gray"> <i className="icofont-facebook"></i>Call Us +001 234 56 789</span><br/>
                  <span className="d-inline-block px-1 t-gray"> <i className="icofont-twitter"></i>Monday - Friday 09:00 - 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

  {/* <!-- faq section start --> */}

    <section>
        <div>
            <h2 className='py-5 container'>Related products</h2>
        </div>
        <div className="">
            <div className="container m-auto">
                <SlickSlider/>
            </div>
        </div>
    </section>
    </div>
  )
}
