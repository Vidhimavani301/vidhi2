import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div>
        <p className='container mt-2'><Link to="/" className='text-decoration-none text-dark'>Home </Link>| Contact us</p>
        <section>
            <div className=' text-center' data-aos="fade-up">
                <img src='assets/img/google-maps.png' className='w-75' ></img>
            </div>
            <div className='container mt-5'>
                <div className='row g-0 justify-content-around'>
                    <div className='col-12 col-lg-5' data-aos="fade-right">
                        <h1>Get in touch with us</h1>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am, velit rutrum dictum lobortis, turpis justo auc tor quam, a auctor. Vix ut ignota deserunt partien ad, pros tale falli periculis ad, idque deseruisse constituam.</p>
                        <p>Nam nibh purus, fermentum sit amet lorem eget, pellentesque. Vestibulum vestibulum urna odio, non pulvinar mauris cursus.</p>
                        <p><span class="material-symbols-outlined px-2 ">laptop_mac</span>+000 123 456 789</p>
                        <p><span class="material-symbols-outlined px-2 ">stadia_controller</span>gizmos@example.com</p>
                        <p><span class="material-symbols-outlined px-2 ">aod_watch</span>18 Manhattan Avenue, New York, USA</p>
                        <p><span class="material-symbols-outlined px-2 ">headphones</span>Monday to Friday: 9am-9pm<br/>Saturday to Sunday: 9am-10pm</p>
                    </div>
                    <div className='col-12 col-lg-6' data-aos="fade-left">
                        <Form/>
                    </div>
                </div>
                <div className='row g-3 justify-content-around mt-5' data-aos="fade-up">
                    <div className='col-12 col-lg-4'>
                        <span class="material-symbols-outlined h1">local_shipping</span>
                        <h3>Our Vision</h3>
                        <p>Integer feugiat, nulla ut cursus sodales, turpis turpis efficitur tortor, vel dictum sapien augue mi. Duis maximus purus nec magna hendrerit elementum.</p>
                    </div>

                    <div className='col-12 col-lg-4'>
                    <span class="material-symbols-outlined h1 ">headphones</span>
                        <h3>What We Do</h3>
                        <p>Integer feugiat, nulla ut cursus sodales, turpis turpis efficitur tortor, vel dictum sapien augue mi. Duis maximus purus nec magna hendrerit elementum.</p>
                    </div>

                    <div className='col-12 col-lg-4'>
                        <span class="material-symbols-outlined h1">credit_card</span>
                        <h3>Company History</h3>
                        <p>Integer feugiat, nulla ut cursus sodales, turpis turpis efficitur tortor, vel dictum sapien augue mi. Duis maximus purus nec magna hendrerit elementum.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
