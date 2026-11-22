
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
     <header className='lg:mx-16 md:mx-8 sm:mx-4'>
          <nav className='flex itmes-center justify-between mx-4 my-2'>
            <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
            <ul className='flex gap-4 items-center '>
              <li>Shop</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
            <div className="search-bar bg-gray-200 rounded-full flex items-center gap-4 px-4 text-gray-600"><CiSearch className='text-2xl font-bold'/><input type="search" className=''placeholder='Search the products'/></div>
            <ul className='flex items-center gap-4 text-2xl'>
              <li><a href=""><IoCartOutline /></a></li>
              <li><a href=""><CgProfile /></a></li>
            </ul>
          </nav>
         <hr className='my-4 border-gray-500'/>
         </header>

    </>
  )
}
export default Navbar;
