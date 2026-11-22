import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router";

import './App.css'
import Navbar from './Components/Navbar'
import Productlist from './Components/ProducstList';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <h1 className='text-center py-2'> <Link to="/ProductList">ProductList</Link></h1>
    {/* <Navbar/> */}
     <h1 className='text-center bg-black text-white text-xs lg:text-md md:text-sm sm:text-xs py-2 '>Sign up and get 20% off to your first order. <span className="underline"> Sign Up Now</span></h1>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/ProductList" element={<Productlist />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/ProductDetail" element={<ProductDetail />} /> */}
      </Routes>
    </BrowserRouter>
    
   </>   
  )
}

export default App
