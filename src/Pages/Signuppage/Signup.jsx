import { Link } from 'react-router'
import './Signup.css'
import  Tomp from '../..//assets//TOMSPURSE LOGO_Horizontal Logo Full Color (1).png' 

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-welcome">
        <div className="signup-logo">
         <Link to ="/">  <img src={Tomp} alt="logo" className="signup-logo-img" /></Link>
        </div>
        <h2>Welcome ,</h2>
        <p>Register in to continue.</p>
      </div>

    
      <div className="signup-form-section">
        <h3>Login to your account</h3>

        <form>
          <label>Full Name</label>
          <div className="name-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <label>Email</label>
          <input type="email" placeholder="tobbey@email.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <div className="signup-links">
            <a href="/login">Old user? Log in</a>
          </div>

          <button type="submit" className='sign-btn'>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

 