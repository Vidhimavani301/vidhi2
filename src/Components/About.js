import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='overflow-hidden'>
        {/* about section start */}
            <section className='about-img'></section>
        {/* about section end */}

        {/* coman section start */}
            <section className='container'>
                <div className='row g-0 justify-content-around'>
                    <div className='col-12 col-lg-5 p-5 ' data-aos="fade-right">
                        <h1 className='mt-50'>More About Company History</h1>
                    </div>
                    <div className='col-12 col-lg-7' data-aos="fade-left">
                        <div className='p-5'>
                            <p>Nulla porta nulla nec orci vulputate, id rutrum sapien varius. Class aptent taciti sociosqu ad litora torquent per conubia sed nostra, per inceptos himenaeos. Nulla facilisi. Integer vel felis cursus, varius arcu non, sollicitudin tortor. Vivamus piorttitor libero id metus scele risque pellentesque sit amet in est. Mauris accumsan porta ante, vel tincidunt quam auctor vitae. Maecenas suscipit risus neque, at dapibus dolor sollicitudin vitae. Maecenas a eros eget lorem iaculis ultricies.</p>

                            <p>Suspendisse sodales magna ut gravida feugiat. Aenean gravida pellentesque lacinia. Suspendisse ullamcorper, volumuse iaculis pharet ra, lacus sem gravida urna, eu pharetra enim felis condiment um enim. Cras eget quam mollis, ultrices dolor tincidunt, finibus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sonet rhoncus metus ex, quis pretium neque tincidunt ut. Donec vestibulum congue sapien eu lacinia. Fusce vitae convallis tortor, sed ultricies eros. Morbi quis varius nibh, nec semper nibh.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className=''>
                <div className='container '>
                    <div className='row g-0 justify-content-around'>
                        <div className='col-12 col-lg-6 p-3' data-aos="fade-right">
                            <div>
                                <img src='assets/img/about-us-iwt-img1.jpg' className='w-100'></img>
                                <div className=''>
                                    <h2 className='mt-2'>Our Vision</h2> 
                                    <p>Ne nemore aeterno dolores sit, sit ne consulatu dignissim, vix autem volumus id tacimates id. Ad quod ignota democritum his, quis probatus mel te. At sale sonet eam, ex eam nostrum recusabo pertinacia. Est ne propriae cotidieque, an vel solet malorum inermis, alii admodum.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-lg-6 p-3' data-aos="fade-left">
                            <div>
                                <img src='assets/img/about-img-2.jpg' className='w-100'></img>
                                <div className=''>
                                    <h2 className='mt-2'>What We Do</h2> 
                                    <p>Ne nemore aeterno dolores sit, sit ne consulatu dignissim, vix autem volumus id tacimates id. Ad quod ignota democritum his, quis probatus mel te. At sale sonet eam, ex eam nostrum recusabo pertinacia. Est ne propriae cotidieque, an vel solet malorum inermis, alii admodum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>

            <section className='container' data-aos="fade-up">
                <div className='my-5'>
                    <h2>Our Team</h2>
                </div>
                <div className='row g-0 justify-content-between mb-5'>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img1.jpg' className='w-100'></img>
                    </div>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img2.jpg' className='w-100'></img>
                    </div>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img3.jpg'className='w-100'></img>
                    </div>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img4.jpg' className='w-100'></img>
                    </div>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img5.jpg' className='w-100'></img>
                    </div>
                    <div className='col-12 col-lg-2 px-1'>
                        <img src='assets/img/team-img6.jpg' className='w-100'></img>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up">
                <div className='container'>
                    <h2 className=''>Latest blog posts</h2>
                </div>
                <div className='container'>
                    <div className='row g-0 justify-content-around'>
                        <div className='col-12 col-lg-3 my-5'>
                            <img src='assets/img/h1-blog-img1.jpg' className='w-100'></img>
                            <div className='mt-3'>
                                <p>DIGITA | LSEPTEMBER 30, 2022</p>
                                <h3>New Trends In Digital Media</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.</p>
                                <Link to="/READ MORE"><button className='btn btn-primary '>READ MORE</button></Link>
                            </div>
                        </div>

                        <div className='col-12 col-lg-3 my-5'>
                            <img src='assets/img/h1-blog-img2.jpg' className='w-100'></img>
                            <div className=' mt-3'>
                                <p>DIGITA | LSEPTEMBER 30, 2022</p>
                                <h3>The Best Games For Pc</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.</p>
                                <Link to="/READ MORE"><button className='btn btn-primary'>READ MORE</button></Link>
                            </div>
                        </div>

                        <div className='col-12 col-lg-3 my-5'>
                            <img src='assets/img/h1-blog-img3.jpg' className='w-100'></img>
                            <div className='mt-3'>
                                <p>DIGITA | LSEPTEMBER 30, 2022</p>
                                <h3>Check Out Our New App!</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla case elitr.</p>
                                <Link to="/READ MORE"><button className='btn btn-primary'>READ MORE</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5' data-aos="fade-up">
                <div className='container'>
                    <h2>Multi-Vendor</h2>
                </div>
                <div className='container'>
                    <div className='row g-0 justify-content-evenly'>
                        <div className='col-12 col-lg-2'>
                            <img src='assets/img/client-1.png'></img>
                        </div>
                        <div className='col-12 col-lg-2'>
                            <img src='assets/img/client-2.png'></img>
                        </div>
                        <div className='col-12 col-lg-2'>
                            <img src='assets/img/client-3.png'></img>
                        </div>
                        <div className='col-12 col-lg-2'>
                            <img src='assets/img/client-4.png'></img>
                        </div>
                        <div className='col-12 col-lg-2'>
                            <img src='assets/img/client-5.png'></img>
                        </div>
                        
                    </div>
                </div>
                
            </section>
    </div>
  )
}
