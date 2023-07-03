import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CardContext } from '../Context/CardContext'
export default function Header() {

  const {cart} = useContext(CardContext)
  return (
    
    <div>
        <section className='d-none d-lg-block'>
            <div className='d-flex justify-content-around g-0'>
                <p className='my-2 text-Secondary'><i className="fa-solid fa-laptop pe-2"></i>WELCOME TO WORLDWIDE GIZMOS STORE</p>
                
                <div className='d-flex justify-content-around g-0'>
                    <p className='text-decoration-none text-Secondary my-2'><i className="fa-solid fa-location-dot pe-2"></i>STORE LOCATOR</p>
                    <p className='my-2 text-Secondary px-4'><i className="fa-solid fa-truck pe-2"></i>FREE SHIPPING & RETURNS</p>
                    <p className='my-2 text-Secondary'><i className="fa-solid fa-user pe-2"></i>MY ACCOUNT</p>
                </div>
            </div>
        </section>

        <section>
          <div className="px-sm-0 px-4 bg-dark">
            <nav className="navbar navbar-expand-lg " id='navbar'>
              <div className="container m-auto ">
                <Link className="navbar-brand" to="#">
                    <img src='assets/img/logo-white-new.png' style={{width:"150px"}} alt='logo'></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon material-symbols-outlined text-light pt-2 h-3">menu</span>
                </button>

                <div className="collapse navbar-collapse nevu" id="navbarTogglerDemo03">
                  <ul className="navbar-nav m-auto mb-lg-0 fw-bold ">
 
                    <li className="nav-item dropdown px-2">
                      <Link className="nav-link text-light" aria-expanded="true" to="/">Home</Link>
                    </li>

                    <li className="nav-item dropdown px-2">
                      <Link className="nav-link" to="#" id="navbarDropdown" role="button" aria-expanded="false">Pages </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link to="/About" className="dropdown-item">About Us</Link></li>
                          <li><Link to="/FAQ" className="dropdown-item">FAQ's</Link></li>
                          <li><Link to="/Terms" className="dropdown-item">Terms & Conditions</Link></li>
                          <li><Link to="/Contact" className="dropdown-item">Contact Us</Link></li>
                          <li><Link to="/Touch" className="dropdown-item">Get In Touch</Link></li>
                          <li><Link to="/Locator" className="dropdown-item">Store Locator</Link></li>
                          <li><Link to="/Plans" className="dropdown-item">Pricing Plans</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown px-2">
                        <Link className="nav-link" to="#">Shop </Link>
                          <ul className="dropdown-menu mega-menu menu" aria-labelledby="navbarDropdown">
                            <div className="row py-3">
                                <div className="col-12 col-lg-2 text-center mx-2" >
                                    <h5 className='mb-3 text-light'> Product Types</h5>
                                    <li><Link className="dropdown-item" to="/Standard">Standard Product</Link></li>
                                    <li><Link className="dropdown-item" to="/Variable">Variable Product </Link></li>
                                    <li><Link className="dropdown-item" to="/Grouped">Grouped Product</Link></li>
                                    <li><Link className="dropdown-item" to="/External">External Product</Link></li>
                                    <li><Link className="dropdown-item" to="/Virtual">Virtual Product</Link></li>
                                    <li><Link className="dropdown-item" to="/Product">New Product</Link></li>
                                    <li><Link className="dropdown-item" to="/Sale">Sale Product</Link></li>
                                    <li><Link className="dropdown-item" to="/Sold">Sold Product</Link></li> 
                                </div>
                                
                                <div className="col-12 col-lg-2 text-center mx-2" >
                                    <h5 className='mb-3 text-light'> Shop Lists</h5>
                                    <li><Link className="dropdown-item" to="/Standards">Standard</Link></li>
                                    <li><Link className="dropdown-item" to="/Banner">Banner </Link></li>
                                    <li><Link className="dropdown-item" to="/Category">Category Icons</Link></li>
                                    <li><Link className="dropdown-item" to="/Filter">Filter On Top</Link></li>
                                    <li><Link className="dropdown-item" to="/Countdown">Countdown List</Link></li>
                                    <li><Link className="dropdown-item" to="/Slider">Slider</Link></li>
                                </div>

                                <div className="col-12 col-lg-2 text-center mx-2" >
                                    <h5 className='mb-3 text-light'> Shop Layouts</h5>
                                    <li><Link className="dropdown-item" to="/Two">Two Columns</Link></li>
                                    <li><Link className="dropdown-item" to="/Three">Three Columns</Link></li>
                                    <li><Link className="dropdown-item" to="/Four">Four Columns</Link></li>
                                    <li><Link className="dropdown-item" to="/Five">Five Columns </Link></li>
                                    <li><Link className="dropdown-item" to="/Six">Six Columns </Link></li>
                                </div>
                                
                                <div className="col-12 col-lg-2 text-center mx-2" >
                                    <h5 className='mb-3 text-light'> Shop Pages</h5>
                                    <li><Link className="dropdown-item" to="/Login">My Account</Link></li>
                                    <li><Link className="dropdown-item" to="/Wishlist">Wishlist</Link></li>
                                    <li><Link className="dropdown-item" to="/Cart">Cart</Link></li>
                                    <li><Link className="dropdown-item" to="/Checkout">Checkout</Link></li>
                                </div>
                                <div className="col-12 col-lg-3 mx-2">
                                    <img src='assets/img/nevu.jpg' className='py-2 w-100'></img>
                                </div>
                            </div>
                          </ul>
                        </li>

                        <li className="nav-item dropdown px-2">
                          <Link className="nav-link"  to="#" id="navbarDropdown" role="button" aria-expanded="false">Blogs</Link>
                            <ul className="dropdown-menu header2-bg-color" aria-labelledby="navbarDropdown">
                              <li><Link to="/Right" className="dropdown-item">Right Sidebar</Link></li>
                              <li><Link to="/Left" className="dropdown-item">Left Sidebar</Link></li>
                              <li><Link to="/Sidebar" className="dropdown-item">No Sidebar</Link></li>
                              <li><Link to="/Post" className="dropdown-item">Post Types</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2">
                          <Link className="nav-link "aria-current="page" to="#" >Landing</Link>
                        </li>
                  </ul>

                  <div className='d-flex'>
                    <div className="search-box ">
                      <input className="search-input" type="text" name="" placeholder="search type..."/>
                      <Link to="#" className="search-btn">
                        <i className="fas fa-search text-light "></i>
                      </Link>     
                    </div>

                    <div>
                        <Link to="/Login"><i className="fa-solid fa-user  text-light h5 mt-3 px-3 fw-bold"></i></Link>
                    </div>  
                    
                    <div>
                        <Link className="nav-link" to="/Cart">
                            <button type="button" className=" mt-3  border-0  bg-transparent position-relative">
                            <span className="material-symbols-outlined text-light">shopping_cart</span>
                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-white rounded-circle" style={{fontSize:"11px"}}>{cart.totalItems? cart.totalItems:"0"}
                                </span>
                            </button>
                        </Link>
                    </div>

                  </div>

                </div>

              </div>

            </nav>
          </div>
      </section>
  </div>
  )
}
