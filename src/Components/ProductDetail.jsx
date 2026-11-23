import { FaStar, FaStarHalf } from 'react-icons/fa';
import Navbar from './Components/Navbar';
import Productlist from './Components/ProducstList';

export const ProductDetail= () => {
  return (
    <> 
    <Navbar/>
    
    <div className='flex  m-16 gap-4'>
        <div className='w-1/2 grid grid-cols-2 grid-rows-3 gap-4'>
          <img className='size-46 rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrWDPoZGuBJ-NYu7UrtA7uhru0JZNGoHeDnf9sLJmrw&s=10" alt="" />
          <img className='size-46 rounded-3xl'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrWDPoZGuBJ-NYu7UrtA7uhru0JZNGoHeDnf9sLJmrw&s=10" alt="" />
          <img className='size-46 rounded-3xl'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrWDPoZGuBJ-NYu7UrtA7uhru0JZNGoHeDnf9sLJmrw&s=10" alt="" />
          <img className='size-46  rounded-3xl'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrWDPoZGuBJ-NYu7UrtA7uhru0JZNGoHeDnf9sLJmrw&s=10" alt="" />
        </div>
        <div className='w-1/2 px-4'>
          <h1 className='font-extrabold text-4xl'>ONE LINE GRAPHICS T-SHIRT</h1>
          <ul className='flex gap-2 text-yellow-500 text-xl my-2'>
            <li><a href=""><FaStar /></a></li>
            <li><a href=""><FaStar /></a></li>
            <li><a href=""><FaStar /></a></li>
            <li><a href=""><FaStar /></a></li>
            <li><a href=""><FaStarHalf /></a></li>   
          </ul>
          <h1 className='font-bold text-4xl'>$260 <span className='text-gray-400'>$360</span></h1>
          <p className='text-gray-600 my-2'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <hr className='my-2 border-gray-300'/>
          <h4 className='text-gray-400 my-2'>Select Colors</h4>
          <ul className='flex gap-4'>
            <li className='size-8 bg-gray-600 rounded-full'></li>
            <li className='size-8 bg-green-900 rounded-full'></li>
            <li className='size-8 bg-red-500 rounded-full'></li>
          </ul>
          <hr className='my-2 border-gray-300'/>
          <h4 className='text-gray-400 my-2'>Choose Size</h4>
          <div>
            <ul className='flex
            gap-4'>
            <li className='px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>Small</li>
            <li className='px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>Medium</li>
            <li className='px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>Large</li>
            <li className='px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>X-large</li>
            </ul>
          </div>
          <hr className='my-2 border-gray-300'/>
          <div className='flex gap-6'>
           <div className=' flex  justify-center gap-6 px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>
            <p>+</p><p>2</p><p>-</p>
           </div>
           <div className=' flex flex-2 justify-center gap-6 px-6 py-2 text-gray-600 bg-gray-200 rounded-3xl hover:bg-black hover:text-white'>
            <p>Add to Cart</p>
           </div>
          </div>



        </div>
      </div> 
    </>
  )
}

export default ProductDetail
