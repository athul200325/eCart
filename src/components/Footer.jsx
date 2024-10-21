import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<>
<footer className="bg-indigo-900 text-white py-6">
  <div className="container mx-auto flex flex-wrap justify-between">
    <div className="w-full md:w-1/4 mb-4">
      <h4 className="font-extrabold text-3xl mb-2">ECart</h4>
      <p className='mb-1'>We are dedicated to providing the best online shopping experience for our customers.</p>
      <p className='mt-4 mb-1'>Code licensed eCart 3.0</p>
      <p>Currently V1.0.3</p>


    </div>

    <div className="w-full md:w-1/4 mb-4">
      <h4 className="font-semibold text-lg">Links</h4>
      <ul>
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
      </ul>
    </div>

    <div className="w-full md:w-1/4 mb-4">
      <h4 className="font-semibold text-lg">Guides</h4>
      <ul>
        <li><Link to="/faq" className="hover:underline">React</Link></li>
        <li><Link to="/privacy-policy" className="hover:underline">React Tailwind</Link></li>
        <li><Link to="/terms-of-service" className="hover:underline">Routing</Link></li>
      </ul>
    </div>

    <div className="w-full md:w-1/4 mb-4">
      <h4 className="font-semibold text-lg">Conatact Us</h4>
      <input className='w-64 p-1 my-2 rounded' placeholder='Enter your email' type="text" />
          <button className='bg-white text-indigo-400 p-1 ml-1 rounded hover:bg-gray-200'><i class="fa-solid p-1 fa-arrow-right"></i>
          </button>
      <div className="text-lg flex space-x-4">
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
        <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
        <i class="fa-regular fa-envelope"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
        <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="text-center mt-6">
    <p className="text-sm">&copy; {new Date().getFullYear()} ECart. All rights reserved.</p>
  </div>
</footer>

</>

  )
}

export default Footer