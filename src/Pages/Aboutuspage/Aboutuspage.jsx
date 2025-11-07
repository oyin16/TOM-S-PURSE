import React from 'react'
import './Aboutuspage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Aboutuscont1 from '../../Components/Aboutuscont1/Aboutuscont1'
 import Aboutuscont2 from '../../Components/Aboutuscont2/Aboutuscont2'
import Aboutuscont3 from '../../Components/Aboutuscont3/Aboutuscont3'
import Footer from '../../Components/Footer/Footer'
const Aboutuspage = () => {
  return (
    <div>
      <Navbar/>
      <Aboutuscont1/>
      <Aboutuscont2/>
      <Aboutuscont3/>
      <Footer/> 
    </div>
  )
}

export default Aboutuspage