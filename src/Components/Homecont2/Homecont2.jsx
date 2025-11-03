import React from 'react'
import './Homecont2.css'
import Invest from '../../assets/Homepage Desktop 05.14.19.png'
import Save from '../../assets/Later Icon.png'
import Grow from '../../assets/Homepage Desktop 05.14.19 (1).png'

const Homecont2 = () => {
  return (
    <div className='homecont2'>
        <div className='text-cont2'>
            <h4> Your guide to financial wellness </h4>
            <p> We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
           <p id='cont2link'> Learn more</p>
           </div>
        <div className='card2'>
            <div className='flex-cont'>
                <img src ={Invest} alt='logo' className='' style={{height: 24,}}/>
                <div className='cont-save'>
                <h5 > Invest your spare change</h5>
                <p style={{paddingBottom: 8}}> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>
            </div>
            <div className='flex-cont'>
                <img src ={Save} alt='logo' className=''style={{height: 19}}/>
                <div className='cont-save'>
                <h5> Save for later</h5>
                <p style={{paddingBottom: 12}}> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>
            </div>
            <div className='flex-cont'style={{ border:"none"}} > 
                 <img src ={Grow} alt='logo' className=''style={{height: 25}}/>
                 <div className='cont-save'>
                 <h5> Grow your knowledge</h5>
                <p style={{paddingBottom: 31}}> Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Homecont2