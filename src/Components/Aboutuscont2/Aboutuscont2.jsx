import React from 'react'
import './Aboutuscont2.css'
import Bluecircle from '../..//assets/Ellipse 69.png'
import Graycircle from '../..//assets/Ellipse 70.png'
const Aboutuscont2 = () => {
  return (
    <div className='Aboutuscont2'>
        <h3> What Define Us.</h3>
        <div className='About-cards'>
        <div className='card1'>
          <div className='boxes'>
          <img src ={Bluecircle} alt='iphone' className='circle circle1'/>
          <img src ={Graycircle} alt='iphone' className='circle circle2'/>
          </div>
            <h3> Customer Satisfaction Obsession</h3>
            <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
       </div>
        <div className='card2-about'>
            <div className='boxes2'>
            <div className='box-blue1'> 
            <div className='box-gray2'></div>
            </div>
            </div>
            <h3> Customer Satisfaction Obsession</h3>
            <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
       </div>
        <div  className='card2-about'>
        <div className='boxes2 '>
            <div className='box-blue1'>
            <div className='box-gray2'></div>
            </div>
        </div>
            <h3> Customer Satisfaction Obsession</h3>
            <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
       </div>
       </div>

    </div>
  )
}

export default Aboutuscont2