import React, { useEffect } from 'react'
import SlickSlider from './SlickSlider';
import Product from './Product';
export default function Home() {

  useEffect(()=>{
    const Marquee = ( selector, speed ) => {
      const parentSelector = document.querySelector( selector );
      const clone = parentSelector.innerHTML;
      const firstElement = parentSelector.children[0];
      let i = 0;
      
      parentSelector.insertAdjacentHTML( 'beforeend', clone );
      parentSelector.insertAdjacentHTML( 'beforeend', clone );
    
      setInterval( () => {
        firstElement.style.marginLeft = `-${i}px`;
        if ( i > firstElement.clientWidth ) {
          i = 0;
        }
        i = i + speed;
      }, 0 );
    }
    
    window.addEventListener( 'load', Marquee( '.marquee', .2 ) )
  })
  return (
    <div className='overflow-hidden'>
      {/*home carousel start */}
        <section>
        <div>
          <div id="carouselExampleDark" className="carousel slide " data-bs-ride="carousel">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active me-2 "
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-current="true" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="container m-auto">
                  <div className="row my-50 pt-5">
                    <div className="col-sm-6 col-10 m-auto d-none d-lg-block " data-aos="fade-up">
                      <div className="align-items-center d-height py-4">
                        <div data-aos="fade-up ">
                          <h1 className="fw-bold display-5 my-3">
                          Latest pc on 
                            <br/>
                            The Market
                          </h1>
                          <p>Glzmos cx70 2QF-261xpl</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 col-10 m-auto"data-aos="fade-left">
                      <img src="assets/img/shop-img-3.jpg" className="w-100" alt="coffee-machine"/>
                    </div>
                    <div className="col-sm-6 col-10 m-auto d-lg-none text-center">
                      <div className="align-items-center d-height">
                        <div data-aos="fade-up ">
                          <h1 className="fw-bold display-5 ">
                          Latest pc on 
                            <br/>
                            The Market
                          </h1>
                          <p>Glzmos cx70 2QF-261xpl</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="carousel-item" data-bs-interval="2000">
                <div className="container m-auto">
                  <div className="row my-50 pt-5">
                    <div className="col-sm-6 col-10 m-auto d-none d-lg-block" data-aos="fade-up">
                      <div className="align-items-center d-height py-4">
                        <div data-aos="fade-up ">
                          <h1 className="fw-bold display-5 my-3">
                            WP-54778Y
                            <br/>
                            Console
                          </h1>
                          <p>ULTRA CX-70 2QF 621XPL</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-5 col-10 m-auto"data-aos="fade-left">
                      <img src="assets/img/shop-img-9.jpg" className="w-100" alt="coffee-machine"/>
                    </div>

                    <div className="col-sm-6 col-10 m-auto d-lg-none text-center">
                      <div className="align-items-center d-height py-4">
                        <div data-aos="fade-up ">
                          <h1 className="fw-bold display-5 my-3">
                            WP-54778Y
                            <br/>
                            Console
                          </h1>
                          <p>ULTRA CX-70 2QF 621XPL</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="2000">
                <div className="container m-auto">
                  <div className="row my-50 pt-5">
                    <div className="col-sm-6 col-10 m-auto d-none d-lg-block" data-aos="fade-up">
                      <div className=" align-items-center d-height py-4">
                        <div data-aos="fade-up">
                          <h1 className="fw-bold display-5 my-3">
                            New CQ-2545
                            <br/>
                            Photo Drones
                          </h1>
                          <p>RWX70 2QF-621XPP</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 col-10 m-auto"data-aos="fade-left">
                      <img src="assets/img/shop-img-71.jpg" className="w-100" alt="coffee-machine"/>
                    </div>
                    <div className="col-sm-6 col-10 m-auto d-lg-none text-center">
                      <div className=" align-items-center d-height py-4">
                        <div data-aos="fade-up">
                          <h1 className="fw-bold display-5 my-3">
                            New CQ-2545
                            <br/>
                            Photo Drones
                          </h1>
                          <p>RWX70 2QF-621XPP</p>
                          <button className="btn btn-primary d-inline text-light py-3 px-4 text-capitalize rounded mt-3"
                            >shop now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span class=" material-symbols-outlined text-dark h2" aria-hidden="true">arrow_back_ios</span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span class="material-symbols-outlined text-dark h2" aria-hidden="true">arrow_forward_ios</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
        {/*home carousel end */}

        {/* Marquee section start */}
      <section>
          <div className="marquee" data-aos="fade-up">
            <h5 className="h1-tag p-3"><span class="material-symbols-outlined px-2 h4 icons">laptop_mac</span>Computers & Laptops</h5>
            <h5 className="h1-tag"><span class="material-symbols-outlined px-2 h4">phone_iphone</span>Smartphones & Tablets</h5>
            <h5 className="h1-tag"><span class="material-symbols-outlined px-2 h4">photo_camera</span>Cameras & Lenses</h5>
            <h5 className="h1-tag"><span class="material-symbols-outlined px-2 h4">headphones</span>Headphones</h5>
            <h5 className="h1-tag"><span class="material-symbols-outlined px-2 h4">local_laundry_service</span>Washing Machines</h5>
            <h5 className="h1-tag"><span class="material-symbols-outlined px-2 h4">kitchen</span>Fridges & Coolers</h5>
          </div>
      </section>
        {/* Marquee section end */}

        {/* SlickSlider section start */}
      <section data-aos="fade-up">
          <div className='text-center'>
              <h2 className='py-5'>Top Rated Products</h2>
          </div>
          <div>
              <div className="container m-auto">
                  <SlickSlider/>
              </div>
          </div>
      </section>
        {/* SlickSlider section end */}

        {/* coman section start */}
        <section className='container'>
            <div className='row g-0 justify-content-around px-2 '>
                <div className='col-12 col-lg-6 my-5' data-aos="fade-right">
                    <div className='bg-img-1 text-light p-4'>
                        <h2 className='display-5'>EZ-77 PC
                          <br/>
                          Worldwide
                        </h2>
                        <p>MF841HN/A 13*</p>
                        <p className="mt-4">STARTING</p>
                        <p className='h3'>$1750</p>
                    </div>
                </div>
                <div className='col-12 col-lg-6 my-5' data-aos="fade-left">
                    <div className='bg-img-2 text-light p-4'>
                        <h2 className='display-5'>Limited
                          <br/>
                          Weekly
                          <br/>
                          Discount
                        </h2>
                        <p className="mt-4">DISCOUNT</p>
                        <p className='h3'>$349</p>
                    </div>
                </div>
            </div>
        </section>
         {/* coman section end */}

          {/* add to card section start */}
        <section data-aos="fade-up">
            <div>
                <div>
                    <Product/>
                </div>
            </div>
        </section>
        {/* add to card  section end */}
    </div>
  )
}
