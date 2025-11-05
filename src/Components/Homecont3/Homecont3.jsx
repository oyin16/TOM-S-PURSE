import React from 'react'
import { Link } from 'react-router'
import'./Homecont3.css'
import  padlock from '../../assets/noun_padlock_1434755 1.png'

const Homecont3 = () => {
  return (
    <div className='homecont3'>
        <div className='img-homecont3'>
            <img src ={padlock} alt='iphone' className=''/>

        </div>
        <div className='text-homecont3'>
            <h4> Security that's strong as oak</h4>
            <h6>All your data is protected by bank-level security and 256-bit encryption. </h6>
            <p> <Link to ="/about">Learn more </Link></p>
            <h6 id='Our'>Our Company non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </h6>

        </div>

    </div>
  )
}

export default Homecont3