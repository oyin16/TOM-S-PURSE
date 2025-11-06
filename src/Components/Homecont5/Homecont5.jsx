
import './Homecont5.css'
import React, { useState } from 'react';
import  Icon from '../..//assets/Ellipse 63.png'

  const Homecont5 = () => {
  const [openDropdowns, setOpenDropdowns] = useState([false, false]);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  const dropdownContent = (
    <>
      <div className='with'>
        <img src={Icon} alt='logo' />
        <h6>With a minimum of 5,000 you can invest and earn</h6>
      </div>
      <div className='with'>
        <img src={Icon} alt='logo' />
        <h6>Earn 27% on any investment for 6month</h6>
      </div>
      <div className='with'>
        <img src={Icon} alt='logo' />
        <h6>Withdrawal process instant no delay</h6>
      </div>
    </>
  );

  return (
    <div className='Homecont5'>
        <h3> Simple, Transparent Plans</h3>
        <div className='card-cont5'>
            <div className='card5'>
                <h4> Basic</h4>
                <h5> 7% for 2month</h5>
                <p> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                <button className='btn5'>Get Started </button>
               <div className='dropdown-header' onClick={() => toggleDropdown(0)}>
            <span className='span5'>What's Included</span>
            <span style={{ float: 'right' }}>{openDropdowns[0] ? '−' : '+'}</span>
          </div>
          {openDropdowns[0] && (
            <div className='dropdown-cont5' style={{ marginTop: '10px' }}>
              {dropdownContent}
            </div>
          )}
        </div>

          
            <div className='card5'>
                <h4> Plus</h4>
                <h5> 22% for 6month</h5>
                <p> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                <button className='btn5'>Get Started </button>
             <div className='dropdown-header' onClick={() => toggleDropdown(1)}>
            <span className='span5'>What's Included</span>
            <span style={{ float: 'right' }}>{openDropdowns[1] ? '−' : '+'}</span>
          </div>
          {openDropdowns[1] && (
            <div className='dropdown-cont5' style={{ marginTop: '10px' }}>
              {dropdownContent}
            </div>
          )}
        </div>
      </div>
      </div>

  )
}

export default Homecont5