import React from 'react'
import './Aboutuscont1.css'
import Tom from '../../assets/Group 14.png'

const Aboutuscont1 = () => {
  return (
    <div className='Aboutuscont'>
        <h3> Our Customer’s Above Finacial Freedom</h3>
        <p> We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
        <div className='tom-purse'>
            <div className='tom-text'>
                <h4> Little About Tompurse</h4>
                <p> In cursus ac turpis massa eu volutpat semper. Fringilla consequat aliquam ornare odio lectus condimentum proin lacus vitae. Adipiscing amet elementum, tempor dolor senectus dui. Aliquam viverra eget nunc mi posuere in morbi diam. Pellentesque sed quis ultrices fames. Pretium nec vulputate commodo eu adipiscing quis donec. Ultricies fames accumsan nibh ultricies purus a. Rutrum purus lectus egestas dui velit tellus. Ac eleifend amet tellus sit urna aliquet et magna eu. Arcu et nisl, dictum enim vestibulum adipiscing.</p>
                </div>
                <div className='tom-image'>
                    <img src ={Tom} alt='img' />
                </div>
            </div>




    </div>
  )
}

export default Aboutuscont1