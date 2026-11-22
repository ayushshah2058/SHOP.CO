
import { FaStar, FaStarHalf } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowForward , IoIosArrowUp } from "react-icons/io";
import Navbar from "./Navbar";
import Footer from "./Footer";
export const Productlist = () => {
  return (
   <>
   <Navbar/>
    <main className='mx-16 flex gap-4'>

      <div className="left-sidebar w-1/4  py-2 px-6 border border-gray-400 rounded-3xl">
        <div className='flex items-center justify-between my-4'>
          <h4 className='text-xl font-bold'>Filters</h4>
          <GiSettingsKnobs className='text-gray-500'/>
        </div>
        <hr className='text-gray-300 my-2'/>
        <div>
        <ul className='mb-4'>
          <li><div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-gray-600'>T-shirts</h5>
            <IoIosArrowForward />
            </div></li>
      
          <li><div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-gray-600'>Shorts</h5>
            <IoIosArrowForward />
            </div></li>
       
          <li><div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-gray-600'>Shirts</h5>
            <IoIosArrowForward />
            </div></li>
       
          <li><div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-gray-600'>Hoodie</h5>
            <IoIosArrowForward />
            </div></li>
        
          <li><div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-gray-600'>Jeans</h5>
            <IoIosArrowForward />
            </div></li>
        </ul>
        </div>
        <hr className='text-gray-300 my-2'/>
        <div>
          <div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-black font-bold text-xl'>Price</h5>
            <IoIosArrowUp />
          </div>
          <input type="range" name="" id="" min={20} max={80} className='w-full cursor-pointer accent-black'/>
        </div>
         <hr className='text-gray-300 my-2'/>
         <div>
           <div className='flex justify-between items-center my-2'>
            <h5 className='text-md text-black font-bold text-xl'>Colors</h5>
            <IoIosArrowUp />
          </div>
          <div className='flex flex-wrap gap-4 my-4'>
            <div className='size-10 rounded-full  bg-red-800'></div>
            <div className='size-10 rounded-full  bg-green-800'></div>
            <div className='size-10 rounded-full  bg-yellow-800'></div>
            <div className='size-10 rounded-full  bg-orange-800'></div>
            <div className='size-10 rounded-full  bg-purple-800'></div>
            <div className='size-10 rounded-full  bg-black'></div>
            <div className='size-10 rounded-full  bg-pink-800'></div>
            <div className='size-10 rounded-full  bg-blue-800'></div>
            <div className='size-10 rounded-full  bg-sky-400'></div>
            <div className='size-10 rounded-full  bg-red-200'></div>
          </div>
         </div>
      </div>

      <section className=" grid grid-cols-3 px-4 gap-4 place-items-center">
        <div className="">
          <img className="rounded-2xl object-cover size-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuSu5OE7a3HeSy2ie1TLP9Gw9coutbiCoLKykjowA9ypsII-pvHU6bPr_&s=10" alt="" />
          <h1 className="text-xl font-bold mt-2">Gradient Graphics T-Shirt</h1>
          <div className="flex gap-2 text-yellow-500 text-xl my-2 items-center">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
            <span className="text-gray-400 font-medium text-sm">4.5/5</span>
          </div>
          <h1 className="font-extrabold text-2xl">$225</h1>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>

      


      
     </main>
     <Footer/>
   </>
  )
}

export const Card = () =>{
  return(
    <div className="">
          <img className="rounded-2xl object-cover size-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEuSu5OE7a3HeSy2ie1TLP9Gw9coutbiCoLKykjowA9ypsII-pvHU6bPr_&s=10" alt="" />
          <h1 className="text-xl font-bold mt-2">Gradient Graphics T-Shirt</h1>
          <div className="flex gap-2 text-yellow-500 text-xl my-2 items-center">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
            <span className="text-gray-400 font-medium text-sm">4.5/5</span>
          </div>
          <h1 className="font-extrabold text-2xl">$225</h1>
        </div>
  )
}

export default Productlist;
