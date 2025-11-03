import React from 'react'
import './Homecont4.css'
import  Finance from '../../assets/Vector (7).png'
import  Swift from '../../assets/Vector (4).png'
import Save from '../../assets/Vector (5).png'

const Homecont4 = () => {
  return (
    <div className='Homecont4'>
        <h3> Zero Commissions </h3>
        <h6> Our Company non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes,</h6>
        <div className='card-cont4'>
            <div className='card4' style={{background: 'linear-gradient(157.9deg, #022B69 37.56%, #0066F5 106.92%)'}}>
                <img src ={Finance} alt='logo' className='finance'/>
                <h5 style={{color:'#FFFFFF'}}> Financial Stablity</h5>
                <p style={{color:'#FFFFFF'}}>Our Payment gateway is secured with military grade encryption</p>

            </div>
            <div className='card4'>
                <img src ={Swift} alt='logo' className='swift'/>
                <h5>Swift Payment </h5>
                <p> Our Payment gateway is secured with military grade encryption</p>

            </div>
            <div className='card4'>
                <img src ={Save} alt='logo' className='save'/>
                <h5> Easy to Use</h5>
                <p> Our Payment gateway is secured with military grade encryption</p>
            </div>

        </div>




    </div>
  )
}

export default Homecont4