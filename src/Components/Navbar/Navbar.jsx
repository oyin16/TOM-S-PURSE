import { useState } from 'react'
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi"
import './Navbar.css'
import Logo from '../../assets/TOMSPURSE LOGO_Horizontal Logo Full Color.png'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className='navbar'>
        <div className='img-div'>
          <Link to ="/">  <img src ={Logo} alt='logo'/> </Link>
        </div>

      <div className={`nav-smallcont ${menuOpen ? "active" : ""}`}>
        <ul className='nav-links'>
            <li className='home' ><Link to ="/">  Home </Link></li>
            <li className='about'><Link to ="/About"> About Us </Link></li>
            <li className='invest'> <Link to ="#">Invest </Link></li>
            
        </ul>
        <p className='login'><Link to ='/login' >Log in </Link></p>
        
        <button className="mobile-btn">
          <Link to="/signup">Register</Link>
        </button>
      </div>
        
      
        <button className='Get'><Link to ='/signup'>Get started </Link></button>

      
         <div className="menu-icon" onClick={toggleMenu}>
        <GiHamburgerMenu size={26} color="#0000FF" />
      </div>


    </div>
  )
}


export default Navbar