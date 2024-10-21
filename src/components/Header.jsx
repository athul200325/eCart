import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { serachProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const userCart=useSelector(state=>state.cartReducer)

    const userWishlist=useSelector(state=>state.wishliistReducer)
    const dispatch=useDispatch()

  return (
    <nav className=''>
<div className='font-semibold  w-full fixed flex flex-wrap items-center justify-between mx-auto p-4 z-10 bg-indigo-400	'>
        <Link className='text-white	text-2xl' to={'/'}><i class="text-3xl fa-brands fa-shopify"></i> Ecart</Link>
  
        <ul className='flex '>
          { insideHome&& <li className='p-2 mr-5'><input onChange={e=>dispatch(serachProduct(e.target.value.toLocaleLowerCase()))} className='w-64 p-1 rounded' placeholder='Search' type="text" />
          </li>}
          <li className='text-white p-1 mx-3	text-lg	relative' > <Link to={'/wishlist'}><i className="fa-solid fa-heart text-2xl text-red-600"></i></Link> Wishlist <span className='absolute -top-1 -right-2 bg-red-600 text-white rounded-full px-2 text-xs'>{userWishlist?.length}</span></li>
          <li className='text-white p-1 mx-3 text-lg	relative	'> <Link to={'/cart'}><i className="fa-solid text-2xl text-green-300 fa-cart-shopping"></i></Link> Cart <span className='absolute -top-1 -right-2 bg-red-600 text-white rounded-full px-2 text-xs'>{userCart?.length}</span></li>
          
        </ul>
</div>
    </nav>
  )
}



export default Header
