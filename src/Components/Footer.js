import React from 'react'
import logo from '../Assets/icons/logo_big.png'
import instagram from '../Assets/icons/instagram_icon.png'
import whatsapp from '../Assets/icons/whatsapp_icon.png'
import pinterest from '../Assets/icons/pintester_icon.png'
import '../Assets/style.css'
const mainColor = '#F3a847'

function Footer() {
  return (
    <div id='footer' className='py-5 mt-5'>
        <div className='d-flex justify-content-center align-items-center'>
            <img src={logo} alt='logo' />
            <h1 id='footerText'>HaEl Shop</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center py-5'>
            <a href='#' style={{margin: '0 30px', color: 'white'}}><h1><i class="bi bi-instagram"></i></h1></a>
            <a href='#' style={{margin: '0 30px', color: 'white'}}><h1><i class="bi bi-facebook"></i></h1></a>
            <a href='#' style={{margin: '0 30px', color: 'white'}}><h1><i class="bi bi-whatsapp"></i></h1></a>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <p style={{color: 'white'}}>Copyrights @2024 - HaEl Shop</p>
        </div>
    </div>
  )
}

export default Footer