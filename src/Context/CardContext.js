import { createContext } from "react";
import { useState,useEffect } from 'react';

const CardContext = createContext()

const CardProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart =localStorage.getItem('cart')
    if(cart){
      setCart(JSON.parse(cart))
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart',JSON.stringify(cart))
  }, [cart])

  

  return (
    <CardContext.Provider value={{ cart,setCart}}>{children}</CardContext.Provider>
  )
}

export {CardContext,CardProvider}