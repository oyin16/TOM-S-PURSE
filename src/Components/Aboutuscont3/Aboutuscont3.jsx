import { Link } from "react-router"
import './Aboutuscont3.css'


const Aboutuscont3 = () => {
  return (
    <div className='Aboutuscont3'>
        <h3> Wondering How We Generate Funds?</h3>
        <div className='cont3-links'>
            <h3> REAL ESTATE</h3>
            <p> Semper convallis magna vitae, sit proin. Ipsum tristique varius vivamus sed mi laoreet.</p>

            <h3> AUTO MOBILE</h3>
             <Link to ='/signup' className="a"> Register an account and fill in necessary information</Link>

            <h3> AGRICULTURE</h3>
            <Link to ='/signup' className="a"> Register an account and fill in necessary information</Link>

            <h3> TRANSPORTATION</h3>
            <Link to ='/signup' className="a"> Register an account and fill in necessary information</Link>
            
            <h3> LIQUID ASSESTS</h3>
            <Link to ='/signup' className="a"> Register an account and fill in necessary information</Link>
            
        </div>





    </div>
  )
}

export default Aboutuscont3