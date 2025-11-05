import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
import Logo from '../../assets/TOMSPURSE LOGO_Horizontal Logo Full Color.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='img-div'>
          <Link to ="/">  <img src ={Logo} alt='logo'/> </Link>
        </div>
        <div className='nav-smallcont'>
        <ul className='nav-links'>
            <li className='home' ><Link to ="/">  Home </Link></li>
            <li className='about'><Link to ="/About"> About Us </Link></li>
            <li className='invest'> <Link to ="#">Invest </Link></li>
            
        </ul>
        <p className='login'><Link to ='/login'>Log in </Link></p>
        </div>
        <button className='Get'><Link to ='/signup'>Get started </Link></button>


    </div>
  )
}

export default Navbar