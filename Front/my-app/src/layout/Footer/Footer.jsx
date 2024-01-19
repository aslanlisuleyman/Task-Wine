import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icon'>
        <div className='ic'><i class="fa-brands fa-facebook-f"></i></div>
        <div className='ic'><i class="fa-brands fa-youtube"></i></div>
        <div className='ic'><i class="fa-brands fa-twitter"></i></div>
        <div className='ic'><i class="fa-brands fa-square-instagram"></i></div>

      </div>
      <div><p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart" style={{color: "#ff0000"}}></i>  by Colorlib</p></div>
    </div>
  )
}

export default Footer