import React from 'react'
import'./Homecont6.css'
import  Frame from '../../assets/Frame.png'
import Googleplay from '../../assets/google-play-badge 2.png'
import Appstore from '../../assets/available-on-the-app-store-1 2.png'


const Homecont6 = () => {
  return (
    <div className='Homecont6'>
        <div className='invest-container'>
        <div className='img-cont6'>
            <img src ={Frame} alt='img' className='phone'/>
            <img src ={Frame} alt='img' className='phone'/>
        </div>
        <div className='invest-cont6'>
            <h3> Invest.Earn</h3>
            <p> Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
             <div className='store-btns'> 
            <img src ={Googleplay} alt='img'/>
             <img src ={Appstore} alt='img' />

             </div>
             </div>
        </div>



    </div>
  )
}

export default Homecont6