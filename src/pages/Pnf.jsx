import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
      <Header/>
      <div style={{padding:'200px'}} className='flex justify-center items-center flex-col'>
        <img width={'30%'} src="https://www.isaacyaner.com/404.png" alt="" />
        <h1 className='text-5xl font-bold mt-3'>Page Not Found</h1>
        <Link className='bg-blue-700 text-white p-2 rounded font-semibold m-3 '>Go to HOME</Link>
      </div>
    </>
  )
}

export default Pnf
