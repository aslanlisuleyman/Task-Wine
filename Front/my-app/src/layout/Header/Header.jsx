import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />
      <ul>

     <Link to="/" className='link'>Home</Link>
     <Link to="/basket" className='link'>Basket</Link>
     <Link to="/wishlist" className='link'>Wishlist</Link>
     <Link to="/add" className='link'>Add</Link>


      </ul>
    </div>
  )
}

export default Header