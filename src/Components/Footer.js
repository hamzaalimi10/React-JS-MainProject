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
            <h1 id='footerText'>SimpleSelect Shop</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center py-5'>
            <a href='#' style={{margin: '0 30px'}}><img src={instagram}/></a>
            <a href='#' style={{margin: '0 30px'}}><img src={whatsapp}/></a>
            <a href='#' style={{margin: '0 30px'}}><img src={pinterest}/></a>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <p style={{color: 'grey'}}>Copyrights @2023 - SimpleSelect Shop</p>
        </div>
    </div>
  )
}

export default Footer