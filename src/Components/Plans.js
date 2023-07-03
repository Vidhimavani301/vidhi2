import React from 'react'
import { Link } from 'react-router-dom'
export default function Plans() {
  return (
    <div>
        <hr/>
         <p className='container'><Link to="/" className='text-decoration-none text-dark'>Home </Link>| Pricing Plans</p>
         <section>
            <div className='container'>
                <h2>Pricing Plans</h2>
            </div>
            <div className='container mt-5'>
                <div className='row g-3 justify-content-around'>
                    <div className='col-12 col-lg-3'>
                        <div className='card p-3'>
                            <p className='h6 fw-light'>PACKAGE</p>
                            <h4>Basic</h4>

                            <p className='h2 mt-3'>$99</p>
                            <ul>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Ius an brute eam</li>
                                <li>Vis libris apeirian movet</li>
                                <li>Est no falli ne est saepe</li>
                            </ul>
                            <button className='btn btn-primary'>PURCHASE NOW</button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-3'>
                        <div className='card p-3'>
                            <p className='h6 fw-light'>PACKAGE</p>
                            <h4>Basic</h4>

                            <p className='h2 mt-3'>$99</p>
                            <ul>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Ius an brute eam</li>
                                <li>Vis libris apeirian movet</li>
                                <li>Est no falli ne est saepe</li>
                            </ul>
                            <button className='btn btn-primary'>PURCHASE NOW</button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-3'>
                        <div className='card p-3'>
                            <p className='h6 fw-light'>PACKAGE</p>
                            <h4>Basic</h4>

                            <p className='h2 mt-3'>$99</p>
                            <ul>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Ius an brute eam</li>
                                <li>Vis libris apeirian movet</li>
                                <li>Est no falli ne est saepe</li>
                            </ul>
                            <button className='btn btn-primary'>PURCHASE NOW</button>
                        </div>
                    </div>

                    <div className='col-12 col-lg-3'>
                        <div className='card p-3'>
                            <p className='h6 fw-light'>PACKAGE</p>
                            <h4>Basic</h4>

                            <p className='h2 mt-3'>$99</p>
                            <ul>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Ius an brute eam</li>
                                <li>Vis libris apeirian movet</li>
                                <li>Est no falli ne est saepe</li>
                            </ul>
                            <button className='btn btn-primary'>PURCHASE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </div>
  )
}
