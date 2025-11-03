import React from 'react'
import {Link} from 'react-router'
import './Footer.css'
import  Tom from '../..//assets/TOMSPURSE LOGO_Vertical Logo B&W 7.png'
import  Facebook from '../..//assets/Vector (12).png'
import  Twitter from '../..//assets/Vector (13).png'
import Instagram from '../..//assets/Vector (14).png'
const Footer = () => {
  return (
    <div className='Footer'>
      <section className="started">
       <div className="squares">
        <div className="boxes">
          <div className="box1">
            <span className="sqr"></span>
            <span className="sqr2"></span>
          </div>
          <div className="rect"></div>
        </div>
       </div>
         <div className='Footer-cont1'>
            <h4>  Total control, total freedom. Be invested.</h4>
            <button className='footer-btn'> Get Started</button>
        </div>
      </section>
        <div className='foot-container'>
             <img src ={Tom} alt='logo' className='footer-logo'/>
            <div className='foot-links'> 
            <div className='font-link'> 
                <h6> Company</h6>
                <ul>
                  <li> <Link to ="/"> Home </Link> </li>
                  <li> <Link to ="/About"> About Us </Link></li>
                  <li><Link to ="/#"> Investment Plan </Link></li>
                  <li> <Link to ="/#"> Mail Us</Link></li>
                </ul>
            </div>

                <div className='font-link'> 
                <h6> Product</h6>
                <ul>
                  <li><Link to ="/#"> Savings Plan</Link></li>
                 <li> <Link to ="/#"> Value Plan</Link></li>
                  </ul>
                </div>

                <div className='font-link'> 
                <h6> Quick links.</h6>
                <ul>
                <li> <Link to ="/signup"> Create an account</Link></li> 
                 <li> <Link to ="/login"> Log In</Link></li> 
                  <li><Link to ="/#"> Instructions</Link></li>
                  </ul>
                </div>

                <div className='font-link'> 
                <h6> Connect</h6>
                <ul>
                <li> 
                    <div className='footer-img'>
                    <img src ={Facebook} alt='logo' className=''/>
                    <img src ={Twitter} alt='logo' className=''/>
                    <img src ={Instagram} alt='logo' className=''/>
                    </div>
                </li>
                <li> support@tompurse.com </li>
                 <li> +2345685921</li> 
                  <li style={{width: 209, height: 51}}>  Suite C201, Plot 1245 Adetokunbo Ademola Crescent,Wuse 2, Abuja, FCT</li>
                  </ul>
                </div>
             </div>
        </div>
        <div className='footer-p'>
             <p style={{marginBottom:8}}>By using this website, you accept our Terms of Use and Privacy Policy and acknowledge receipt of all disclosures in our Disclosure Library . All agreements are available in our Agreement Library. M1 relies on information from various sources believed to be reliable, including clients and third parties, but cannot guarantee the accurac</p>
            <p>By using this website, you accept our Terms of Use and Privacy Policy and acknowledge receipt of all disclosures in our Disclosure Library . All agreements are available in our Agreement Library. M1 relies on information from various sources believed to be reliable, including clients and third parties, but cannot guarantee the accurac</p>
        </div>

    </div>
  )
}

export default Footer