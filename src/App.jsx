import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Wishliist from './pages/Wishliist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/wishlist' element={<Wishliist/>}></Route>

      <Route path='/cart' element={<Cart/>}></Route>

      <Route path='/:id/view' element={<View/>}></Route>

      <Route path='/*' element={<Pnf/>}></Route>

    </Routes>

    <Footer/>
    </>
  )
}

export default App
