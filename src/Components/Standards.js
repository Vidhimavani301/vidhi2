import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function Standards() {
  return (
    <div className='container'>
        <p className='mt-3'><Link to="/" className='text-decoration-none text-dark'>Home</Link> | Shop | Standard</p>
        <div className='row g-0 justify-content-around'>
            <div className='col-12 col-lg-3'>
                <div className='mt-50'>
                    <h4 className='mb-3'>Category</h4>
                    <form >
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1"> 3D Printers (5)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Activated Carbon (1)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3">Adapters (2)</label><br/>
                        
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1"> Air-To-Air (1)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Aluminium (4)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3">Amplifiers (1)</label><br/>
                        
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1">Analog Watches(3)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Appliances (9)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3"> Appliances Materials (10)</label><br/><br/>

                        <input type="submit" value="viwe more" className='btn btn-primary'/>
                    </form>
                </div>

                <div className='mt-5'>
                    <h4 className='mb-3'>Brand</h4>
                    <form >
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1"> BraunBraun (16)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Cosmos (7)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3">Ein (12)</label><br/>
                        
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1"> Lorem (8)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Monos (4)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3">Profeus (1)</label><br/>
                        
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1">Xmos(3)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> Yelo (9)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3"> Zeuss (10)</label><br/><br/>

                        <input type="submit" value="viwe more" className='btn btn-primary'/>
                    </form>
                </div>

                <div className='mt-5'>
                    <h4 className='mb-3'>Model</h4>
                    <form>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className='me-2'/>
                        <label for="vehicle1"> 128 (5)</label><br/>

                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className='me-2'/>
                        <label for="vehicle2"> 264(1)</label><br/>

                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className='me-2'/>
                        <label for="vehicle3">64 (2)</label><br/>
                    </form>
                </div>
            </div>
            <div className='col-12 col-lg-9'>
            <Product/>
            </div>
        </div>
       
    </div>
  )
}
