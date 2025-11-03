import React from 'react'
import './Homepage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Homecont1 from '../../Components/Homecont1/Homecont1'
import Homecont2 from '../../Components/Homecont2/Homecont2'
import Homecont3 from '../../Components/Homecont3/Homecont3'
import Homecont4 from '../../Components/Homecont4/Homecont4'
import Homecont5 from '../../Components/Homecont5/Homecont5'
import Homecont6 from '../../Components/Homecont6/Homecont6'
import Homecont7 from '../../Components/Homecont7/Homecont7'
import Footer from '../../Components/Footer/Footer'


const Homepage = () => {
  return (
    <div>
       <Navbar/>
       <Homecont1/>
       <Homecont2/>
       <Homecont3/>
       <Homecont4/>
       <Homecont5/>
       <Homecont6/>
       <Homecont7/>
       <Footer/>

    
    </div>
  )
}

export default Homepage