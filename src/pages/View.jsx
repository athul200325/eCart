import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
const {id}=useParams()
console.log(id);

const [product,setProducts]=useState({})
const userCart=useSelector(state=>state.cartReducer)

const userWishlist=useSelector(state=>state.wishliistReducer)
const dispatch=useDispatch()

const handleWishlist=(product)=>{
  const existingProduct=userWishlist?.find(item=>item.id==product.id)
  if(existingProduct){
    alert('product Already There')
  }else{
    dispatch(addToWishlist(product))
  }
}

const handleCart=(product)=>{
  dispatch(addToCart(product))
  const existingProduct=userCart?.find(item=>item.id==product.id)
  if(existingProduct){
    alert('product quantity incrementing')
  }
}

useEffect(()=>{
  if(sessionStorage.getItem("allproducts")){
    const allProducts=JSON.parse(sessionStorage.getItem("allproducts"))
    setProducts(allProducts?.find(item=>item.id==id))
  }
},[])

console.log(product);



  return (
    <>
    <Header/>
      <div style={{padding:'100px'}} className="flex content-center items-center mx-5">
        <div className="m-5 grid grid-cols-2 gap-2 items-center">
          <img width={'80%'} height={'150px'} src={product?.thumbnail} alt="" />
          <div>
            <h3>PID:{product?.id}</h3>
            <h1 className='text-5xl font-bold mb-5'>{product?.title}</h1>
            <h4 className='text-2xl mb-5 text-red-900 font-bold'>${product?.price}</h4>
            <p>
              <span>Description: </span>{product?.description}
            </p>

            <h3 className='my-3 font-bold'>Client Reviews:</h3>
            {
              product?.reviews?.length>0&&
                product?.reviews?.map((item)=>(
                  <div key={item?.date} className='shadow border border-green-700 rounded p-2 my-2'>
          
                <h5>
                  <span className='font-bold'> {item?.reviewerName} :</span> {item?.comment}
              
              </h5>
              <p>Rating : {item?.rating}</p>
                  </div>
                ))
            }
            <div className=" flex justify-between mt-5"></div>
            <button onClick={()=>handleWishlist(product)} className=' bg-indigo-400 font-semibold text-white rounded p-3'><i class="fa-solid fa-heart text-2xl text-red-600"></i> Wishlist</button>
            <button onClick={()=>handleCart(product)} className='text-white ms-8 bg-indigo-400 font-semibold  rounded p-3'><i class="fa-solid text-2xl text-black-300 fa-cart-shopping"></i> Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
