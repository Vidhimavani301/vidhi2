import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-color-block mt-5'>
            <div>
            <div className='container'>
                <div className='row g-0'>
                    <div className='col-12 col-lg-9 my-4'>
                        <h2 className='text-light'>Sign up to Newsletter</h2>
                    </div>
                    
                    <div className='col-12 col-lg-3'>
                        <p className='text-light mt-4 h4'>Follow us on:</p>
                        <Link to="https://www.youtube.com/QodeInteractiveVideos" target='_blank'><i class="fa-brands fa-youtube  mx-1 text-gray"></i></Link>

                        <Link to="https://open.spotify.com/?_ga=2.117242758.1490379885.1686736667-1298272920.1686736667" target='_blank'><i class="fa-brands fa-spotify mx-1 text-gray"></i></Link>

                        <Link to="https://www.mixcloud.com/?_ga=2.155082680.1490379885.1686736667-1298272920.1686736667" target='_blank'><i class="fa-solid fa-cloud  mx-1 text-gray"></i></Link>

                        <Link to="https://twitter.com/qodeinteractive?_ga=2.155082680.1490379885.1686736667-1298272920.1686736667" target='_blank'><i class="fa-brands fa-twitter mx-1 text-gray"></i></Link>

                        <Link to="https://www.facebook.com/QodeInteractive/?_ga=2.87423512.1490379885.1686736667-1298272920.1686736667" target='_blank'><i class="fa-brands fa-facebook-f mx-1 text-gray"></i></Link>
    
                        <Link to="https://www.instagram.com/qodeinteractive/?_ga=2.87423512.1490379885.1686736667-1298272920.1686736667" target='_blank'><i class="fa-brands fa-instagram mx-2 text-gray"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className='container'> 
            
            <div className='row g-0 justify-content-around mt-5'>
                <div className='col-12 col-lg-2'>
                    <h5 className='text-light mb-4'>Privacy Policy</h5>
                    <p><Link to="#" className='text-decoration-none t-gray'>Returns & Exchanges</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Payment Terms</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Payment Terms</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Delivery Terms</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Payment & Pricing</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Terms Of Use</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Privacy Policy</Link></p>
                </div>

                <div className='col-12 col-lg-2'>
                    <h5 className='text-light mb-4'>Get Involved</h5>
                    <p><Link to="#" className='text-decoration-none t-gray'>About Us</Link></p>
                    <p><Link to="#"className='text-decoration-none t-gray'>Our Vision</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Orders & Shipping</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Office Supplies</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Contact Us</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Customer Service</Link></p>
                </div>

                <div className='col-12 col-lg-2'>
                    <h5 className='text-light mb-4'>Quick Links</h5>
                    <p><Link to="#" className='text-decoration-none t-gray'>Smartphones</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Headphones</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Laptop & Tablet</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Monitors</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Printers</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Gadgets</Link></p>
                </div>

                <div className='col-12 col-lg-2'>
                    <h5 className='text-light mb-4'>Customer Care</h5>
                    <p><Link to="#" className='text-decoration-none t-gray'>My Account</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Store Locator</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Customer Service</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Returns/Exchange</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>Product Support</Link></p>
                    <p><Link to="#" className='text-decoration-none t-gray'>FAQs</Link></p>
                </div>

            </div>
            <hr/>
            <div className="text-center">
                <span className=' text-light'>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</span>
            </div>
        </div>
        </div>
    )
}

export default Footer;