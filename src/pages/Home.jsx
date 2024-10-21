import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error);

  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage=8
  const totalPage=Math.ceil(allProducts?.length/productPerPage)

  const currentPageLastProductIndex=currentPage * productPerPage
  const currentPageFirstProductIndex=currentPageLastProductIndex-productPerPage
  const visibleProducts=allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

  const navToPrevPage=()=>{
    if(currentPage!=1)
      setCurrentPage(currentPage-1)
  }

  const navToNextPage=()=>{
    if(currentPage!=totalPage)
      setCurrentPage(currentPage+1)
  }

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  return (
    <>
    <Header insideHome={true}/>
      {
        
        loading ?
        
        <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'70px'} src="https://cdnl.iconscout.com/lottie/premium/thumb/loading-circle-5922100-4936396.gif" alt="" />
              Loading
        </div>
        :
        <div >   <div style={{ height: '700px' }}>
        <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg" alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
          <h1 className='text-4xl font-bold'>Welcome to Our Store</h1>
          <p className='mt-2'>Discover amazing products just for you!</p>
          <Link className='bg-indigo-500 text-white py-2 px-4 rounded mt-4 inline-block'>
            Learn More
          </Link>
        </div>
      </div>
        <div className='container p-4 mx-auto'>
        <>
        
        <div className="mt-36 grid grid-cols-4 gap-4">
            {
              allProducts?.length>0 ?
              visibleProducts?.map(product=>(
              <div key={product?.id} className="rounded border shadow p-2">
                <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                <div className="mb-3 text-center">
                  <h2 className="text-lg font-semibold m-3">{product?.title}</h2>
                  <Link to={`${product?.id}/view`}  className='bg-indigo-400 text-white p-1 rounded'>View more</Link>
                </div>
            </div>))
            :
            <div className='flex justify-center items-center text-center text-red-800 my-5 text-lg'>
                  No products are available
            </div>
              }
        </div>

        <div className="text-center text-2xl  mt-20">
          <span onClick={navToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
          <span>{currentPage} of {totalPage}</span>
          <span onClick={navToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>

        </div>
        </>
      </div>
      </div>}
     
    </>
  )
}

export default Home
