import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removieWishlistItem} from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishliist = () => {
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishliistReducer)

  const handleCart=(product)=>{
    dispatch(removieWishlistItem(product.id))
    dispatch(addToCart(product))
    const existingProduct=userCart?.find(item=>item.id==product.id)
    
    if(existingProduct){
      alert('product quantity incrementing')
    }
  }


  return (
    <>
        <Header/>
      <div style={{padding:'100px'}} className='container p-4 mx-auto'>
       {
        userWishlist?.length>0?
         <>
         <div className="grid grid-cols-4 gap-4">
              {
                userWishlist?.map(product=>(
                  <div key={product?.id} className="rounded border shadow p-2">
                  <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                  <div className="text-lg text-center font-semibold m-2">{product?.title}</div>
                  <div className="text-lg text-center text-red-600 font-semibold m-2">$ {product?.price}</div>
                  <div className="text-center justify-evenly flex mt-3">
                      <button onClick={()=>dispatch(removieWishlistItem(product?.id))} className='text-xl bg-slate-100 p-2 rounded'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                      <button onClick={()=>handleCart(product)} className='text-xl  bg-slate-100 p-2 rounded'><i class="fa-solid fa-cart-shopping text-green-900"></i></button>
  
                   </div>
              </div>
                ))
              }
         </div>
         </>:

         <div>
           <h1 className='font-semibold mt-7 text-center text-4xl'>WISHLIST IS EMPTY</h1>
           <div className='flex justify-center items-center'>
            
            <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
            
           </div>
         </div>
       }
      </div> 
    </>
  )
}

export default Wishliist
