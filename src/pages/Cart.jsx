import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate()
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const [cartTotal,setCartTotal]=useState(0)
  useEffect(()=>{
      if(userCart?.length>0){
        setCartTotal(userCart?.map(item=>item.totalPrice)?.reduce((a,b)=>a+b))
      }
  },[userCart])

  const handleDecQuantity=(product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout=()=>{
    dispatch(emptyCart())
    alert('Order Confirmed ... Thank you for shoping')
    navigate('/')
  }

  return (
    <>
      <Header/>
      <div style={{padding:'300px 0'}} className='container p-4 mx-auto'>
      {
        userCart?.length>0 ?
        <>
        <h1 className='text-5xl text-blue-600 font-bold'>Cart Summary</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-2 border rounded shadow p-5">
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <td className='font-bold'>#</td>
                  <td className='font-bold'>Name</td>
                  <td className='font-bold'>Image</td>
                  <td className='font-bold'>Quantity</td>
                  <td className='font-bold'>price</td>
                  <td className='font-bold'>...</td>

                </tr>
              </thead>

              <tbody>
                {
                  userCart?.map((product,index)=>(
                    <tr key={product?.id}>
                  <td className='font-semibold'>{index+1}</td>
                  <td className='font-semibold'>{product?.title}</td>
                  <td className='font-semibold'><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" />
                  </td>
                  <td className='font-semibold'><div>
                    <button onClick={()=>handleDecQuantity(product)} className='font-bold border rounded px-2 m-1'>-</button>
                    <input style={{width:'40px'}} value={product?.quantity} readOnly className='border rounded' type="text" />
                    <button onClick={()=>dispatch(incQuantity(product))} className='font-bold border rounded px-2 m-1'>+</button>
                    </div></td>
                  <td className='font-semibold'>$ {product?.totalPrice}</td>
                  <td className='font-semibold'><button onClick={()=>dispatch(removeCartItem(product?.id))} className='rounded border px-2'><i className="fa-solid text-red-800 fa-trash"></i></button></td>
                </tr>
                  ))
                }
              </tbody>
            </table>

            <div className='float-right  mt-4'>
              <button onClick={()=>dispatch(emptyCart())} className='rounded p-2 bg-red-800 text-white mx-2 font-bold'>Empty Cart</button>
              <button className='rounded p-2 bg-blue-600 text-white font-bold'>Shop more</button>
            </div>

          </div>
          <div className="col-span-1 border rounded shadow-2xl p-5">
          <h1 className="text-2xl font-bold">Total Amount: <span className='text-red-600'>$ {cartTotal}</span></h1>
          <hr />
          <button onClick={handleCheckout} className='w-full text-white font-semibold p-2 text-lg rounded m-1 bg-green-700'>Checkout</button>
          </div>

        </div>
        
        </>
        :
        <div>
           <h1 className='font-semibold mt-7 text-center text-4xl'>CART IS EMPTY</h1>
           <div className='flex justify-center items-center'>
            
            <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
            
           </div>
         </div>
        }
      </div>
    </>
  )
}

export default Cart
