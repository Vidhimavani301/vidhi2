import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Lostpassword from './Components/Lostpassword';
import Home from './Components/Home';
import Standard from './Components/Standard';
import ProductSlider from './Components/ProductSlider';
import Footer from './Components/Footer';
import About from './Components/About';
import Faq from './Components/Faq';
import Product from './Components/Product';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';
import Terms from './Components/Terms';
import Error from './Components/Error';
import Contact from './Components/Contact';
import Plans from './Components/Plans';
import Right from './Components/Right';
import Variable from './Components/Variable';
import Standards from './Components/Standards';
import Banner from './Components/Banner';
import Two from './Components/Two';
import Grouped from './Components/Grouped';
import External from './Components/External';
import Virtual from './Components/Virtual';
class App extends Component {
  render() {
    return (
      <Router>
          <Header/>
          <Routes>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Lostpassword' element={<Lostpassword/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/Standard' element={<Standard/>}/>
              <Route path='/ProductSlider' element={<ProductSlider/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Faq' element={<Faq/>}/>
              <Route path='/Product' element={<Product />}/>
              <Route path='/Cart' element={<Cart />}/>
              <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
              <Route path='/Terms' element={<Terms />}/>
              <Route path='/*' element={<Error />}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/Plans' element={<Plans />}/>
              <Route path='/Right' element={<Right />}/>
              <Route path='/Variable' element={<Variable />}/>
              <Route path='/Standards' element={<Standards />}/>
              <Route path='/Banner' element={<Banner />}/>
              <Route path='/Two' element={<Two />}/>
              <Route path='/Grouped' element={<Grouped />}/>
              <Route path='/External' element={<External />}/>
              <Route path='/Virtual' element={<Virtual />}/>
          </Routes>
          <Footer/>
      </Router>
    )
  }
}
export default App;

                  