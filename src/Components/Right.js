import React from 'react'
import { Link } from 'react-router-dom'

export default function Right() {
  return (
    <div className='container mt-2'>
        <p><Link to="/" className='text-decoration-none text-dark'>HOME </Link>| BLOG | RIGHT SIDEBAR</p>

        <section>
            <div className='row g-0 justify-content-around'>
                <div className='col-12 col-lg-8'>
                    <div>
                        <img src='assets/img/h1-blog-img1.jpg' className='w-100'></img> 
                        <div className='my-3'>
                            <p>ELECTRONICS | SEPTEMBER 28, 2022</p>
                            <h2>Futuristic Interactive Designs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla perpet. Ut est lacus, molestie in no, icula mea ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. Vivamus viverra tem pus. Proin inan tincidunt sem. Etiam sed dapibus augue. Praesent eu pulvinar est ed quis.</p>
                            <button className='btn btn-primary'>READ MORE</button>
                        </div> 
                    </div>
                    <div>
                        <img src='assets/img/h1-blog-img2.jpg' className='w-100'></img> 
                        <div className='my-3'>
                            <p>ELECTRONICS | SEPTEMBER 28, 2022</p>
                            <h2>New Video Game</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla perpet. Ut est lacus, molestie in no, icula mea ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. Vivamus viverra tem pus. Proin inan tincidunt sem. Etiam sed dapibus augue. Praesent eu pulvinar est ed quis.</p>
                            <button className='btn btn-primary'>READ MORE</button>
                        </div> 
                    </div>

                    <div>
                        <img src='assets/img/h1-blog-img3.jpg' className='w-100'></img> 
                        <div className='my-3'>
                            <p>ELECTRONICS | SEPTEMBER 28, 2022</p>
                            <h2>The Best Online Platform</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla perpet. Ut est lacus, molestie in no, icula mea ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. Vivamus viverra tem pus. Proin inan tincidunt sem. Etiam sed dapibus augue. Praesent eu pulvinar est ed quis.</p>
                            <button className='btn btn-primary'>READ MORE</button>
                        </div> 
                    </div>
                </div>

                <div className='col-12 col-lg-4'>
                    <div className='px-4 py-2'>
                        <input type="search" id="search" name="search" placeholder="Type Your text" className='w-100 px-3'/>

                        <div className='mt-5 lh-1'>
                            <h4>Categories</h4>
                            <p>Business</p>
                            <p>Creative</p>
                            <p>Development</p>
                            <p>Digital</p>
                            <p>Electronics</p>
                            <p>Technology</p>
                            <p>Trends</p>
                            <p>Web</p>    
                        </div>  

                        <div className='mt-5'>
                            <div className='row g-0 p-1 w-100'>
                                <div className='col-12 col-lg-2'>
                                    <img src='assets/img/blog-img5-150x150.jpg' style={{width:"100px"}}></img>
                                </div>
                                <div className='col-12 col-lg-9'>
                                    <p className='ms-50'>OCTOBER 2, 2022</p>
                                    <p className='h6 ms-50'>Digtal Strategy Design And Solution For Award Winning</p>
                                </div>
                            </div>

                            <div className='row g-0 p-1 w-100 mt-2'>
                                <div className='col-12 col-lg-2'>
                                    <img src='assets/img/blog-img6-150x150.jpg' style={{width:"100px"}}></img>
                                </div>
                                <div className='col-12 col-lg-9'>
                                    <p className='ms-50'>OCTOBER 2, 2022</p>
                                    <p className='h6 ms-50'>Design Your Way To The Future That Will Change Your Life</p>
                                </div>
                            </div>

                            <div className='row g-0 p-1 w-100 mt-2'>
                                <div className='col-12 col-lg-2'>
                                    <img src='assets/img/blog-img7-150x150.jpg' style={{width:"100px"}}></img>
                                </div>
                                <div className='col-12 col-lg-9'>
                                    <p className='ms-50'>OCTOBER 2, 2022</p>
                                    <p className='h6 ms-50'>With These Lectures Your Design Skills Will Improve Tenfold</p>
                                </div>
                            </div>

                            <div className='row g-0 p-1 w-100 mt-2'>
                                <div className='col-12 col-lg-2'>
                                    <img src='assets/img/blog-img8-150x150.jpg' style={{width:"100px"}}></img>
                                </div>
                                <div className='col-12 col-lg-9'>
                                    <p className='ms-50'>OCTOBER 2, 2022</p>
                                    <p className='h6 ms-50'>Best Way To Find a Perfect Design For Your New Logo</p>
                                </div>
                            </div>
                        </div>   

                        <div className='mt-5'>
                            <h4>Tags</h4>
                            <Link to="#" className='text-decoration-none text-dark h6'>BRANDING | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>DESIGN | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>FUNDING | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>GADGET | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>INNOVATION | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>MARKETING | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>NEW | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>STYLE | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>SUCCESS | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>SUSTAINABLE | </Link>
                            <Link to="#" className='text-decoration-none text-dark h6'>VIRAL  </Link>    
                        </div>  

                        <div className='mt-5'>
                            <h4>Follow Us On</h4>
                            <div className='row g-0 '>
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery1.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery2.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery3.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                            </div>  

                            <div className='row g-0 '>
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery4.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery5.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                                <div className='col-lg-4'>
                                    <img src='assets/img/blog-sidebar-gallery6.jpg' className='p-3' style={{width:"130px"}}></img>     
                                </div> 
                            </div>  
                        </div> 

                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}
