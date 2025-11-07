import React from 'react'
import { Link } from 'react-router'
import './Homecont1.css'
import Iphone from '../../assets/52050b6a235c18f24d0aa15ccd2abfdb373200bd.png'

const Homecont1 = () => {
  return (
    <div className='homecont1'>
        <div className='text-cont1'>
            <h4>Save Invest & Earn Anywhere ! </h4>
            <p> Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
            <button><Link to ="/signup">  Get Started </Link></button>
        </div>
        <div className='img-cont1'>
            <img src ={Iphone} alt='iphone' className=''/>

        </div>

    </div>
  )
}

export default Homecont1