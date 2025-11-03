import React from 'react'
import './Navbar.css'
import Logo from '../../assets/TOMSPURSE LOGO_Horizontal Logo Full Color.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='img-div'>
            <img src ={Logo} alt='logo' className=''/>
        </div>
        <div className='nav-smallcont'>
        <ul className='nav-links'>
            <li className='home' > Home</li>
            <li className='about'> About Us</li>
            <li className='invest'> Invest</li>
        </ul>
        <p className='login'> Log in</p>
        </div>
        <button className='Get'> Get started</button>


    </div>
  )
}

export default Navbar