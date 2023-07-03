import React from 'react'
import { Link } from 'react-router-dom'
export default function Lostpassword() {
  return (
    <div className=' mt-5'>
        <div className='container'>
            
            <p className='fw-normal'><Link to="/" className='text-decoration-none text-dark '>HOME / </Link>MY ACCOUNT</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                    <input type="email" className="form-control w-75 py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter a username or email address.'/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.Username or email</label>
                    <input type="email" className="form-control w-75 py-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                   
                </div>
                
                <button type="submit" className="btn btn-dark mb-3">RESET PASSWORD</button>
            </form>
                
        </div>
    </div>
  )
}
