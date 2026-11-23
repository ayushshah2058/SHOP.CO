import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export const Cart = () => {
  return (
    <>
    <Navbar/>
    <section className='mx-8 md:mx-12 sm:mx-16 my-6'>

    <h1 className='font-extrabold text-4xl mb-4'>YOUR CART</h1>
    <div className='grid grid-cols-1 md:grid-cols-5 sm:gap-4 gap-y-4'>
        <div className=' col-span-3 p-4 border border-gray-400 rounded-3xl'>
            <Items/>
            <hr className='border-gray-400 my-4'/>
            <Items/>
            <hr className='border-gray-400 my-4'/>
            <Items/>
        </div>
        <div className='col-span-2 p-4 border h-min border-gray-400 rounded-3xl '>
            <p className='font-bold text-2xl mb-2'>Gradient T-shirt </p>
            <div className='flex justify-between text-lg mb-2'><p className='text-gray-400'>Subtotal</p><p className='font-bold'>$565</p></div>
            <div className='flex justify-between text-lg mb-2'><p className='text-gray-400'>Discount (20%)</p><p className='font-bold text-red-500'>-$113</p></div>
            <div className='flex justify-between text-lg mb-2'><p className='text-gray-400'>Delivery Fee</p><p className='font-bold'>$13</p></div>
            <hr className='border-gray-400 my-4'/>
            <div className='flex justify-between text-lg mb-4'><p className='text-black font-bold text-2xl'>Total</p><p className='font-bold'>$467</p></div>
            <div className='flex flex-wrap justify-between gap-2 my-4'>
                <input type="text" className=' flex-2 px-2 md:px-4 lg:px-8 py-2 bg-gray-300 rounded-3xl' placeholder='Promo code'></input>
                <a href='' className=' px-8 py-2 bg-black text-white rounded-3xl' >Apply</a>
            </div>
                <p href='' className='px-8 py-2 bg-black text-white rounded-3xl' placeholder='Promo code'>Go to Checkout</p>
        </div>
    </div>

    </section>
    <Footer/>
    </>
  )
}


export const Items = () => {
  return (
    <div className='flex h-30 '>
        <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuSu5OE7a3HeSy2ie1TLP9Gw9coutbiCoLKykjowA9ypsII-pvHU6bPr_&s=10" alt="" />
        <div className='px-4'>
            <p className='font-bold text-lg mb-2'>Gradient T-shirt </p>
            <p>Size: <span className='text-gray-500 mb-1'>Large</span></p>
            <p>Color: <span className='text-gray-500'>White</span></p>
            <p className='font-bold text-xl mt-3'>$225</p>
        </div>
    </div>
  )
}



export default Cart;