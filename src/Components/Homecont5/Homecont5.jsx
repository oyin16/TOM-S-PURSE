
import './Homecont5.css'
import React, { useState } from 'react';
import  Icon from '../..//assets/Ellipse 63.png'

const Homecont5 = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Homecont5'>
        <h3> Simple, Transparent Plans</h3>
        <div className='card-cont5'>
            <div className='card5'>
                <h4> Basic</h4>
                <h5> 7% for 2month</h5>
                <p> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                <button className='btn5'>Get Started </button>
                            <div className='dropdown-header' onClick={() => setIsOpen(!isOpen)}>
        <span className='span5'>What's Included</span>
        <span style={{float: 'right'}}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className= 'dropdown-cont5'style={{marginTop: '10px'}}>

            <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                 <h6>With a minimum of 5,000 you can invest and earn</h6>
            </div>
          <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                 <h6> Earn 27% on any investment for 6month</h6>
            </div>
            <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                  <h6> Withdrawal process instant no delay</h6>
            </div>
        </div>
      )}

            </div>
            <div className='card5'>
                <h4> Plus</h4>
                <h5> 22% for 6month</h5>
                <p> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                <button className='btn5'>Get Started </button>
                            <div  className='dropdown-header'onClick={() => setIsOpen(!isOpen)}>
        <span className='span5'> What's Included</span>
        <span style={{float: 'right'}}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className= 'dropdown-cont5'style={{marginTop: '10px'}}>
           <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                 <h6>With a minimum of 5,000 you can invest and earn</h6>
            </div>
          <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                 <h6> Earn 27% on any investment for 6month</h6>
            </div>
            <div className='with'> 
                 <img src ={Icon} alt='logo' className=''/>
                  <h6> Withdrawal process instant no delay</h6>
            </div>
        </div>
      )}

            </div>
            
    </div>
    </div>
  )
}

export default Homecont5