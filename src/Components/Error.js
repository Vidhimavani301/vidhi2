import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <section className='text-center mt-5'>
            <div>
                <h1 className='fw-bold h1-404'>Oops !</h1>
                <p className='mt-3 fw-bold display-6'>404 PAGE NOT FOUND</p>
                <p className='mt-1'>The Page You are looking for mingt have been removed<br/>
                Had its name chenged or is temporarily unavailable.</p>
                <Link to="/" className='text-decoration-none btn btn-primary' >Go To Homepage</Link>
            </div>
        </section>

    </div>
  )
}
