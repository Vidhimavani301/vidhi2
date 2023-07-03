import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className=' mt-5'>
        <div className='container'>
            
            <p className='fw-normal'><Link to="/" className='text-decoration-none text-dark '>HOME / </Link>MY ACCOUNT</p>
            <h1>Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username or email address *</label>
                    <input type="email" className="form-control w-75 py-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control w-75 py-3" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-dark mb-3">Submit</button>
            </form>
                <Link to="/Lostpassword" className='text-decoration-none text-dark'>Lost your password?</Link>
        </div>
    </div>
  )
}
