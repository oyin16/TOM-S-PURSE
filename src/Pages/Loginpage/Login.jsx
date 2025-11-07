import { Link } from 'react-router'
import './Login.css'
import  Tomp from '../..//assets//TOMSPURSE LOGO_Horizontal Logo Full Color (1).png'

const Login = () => {
  return (
    <div className="login-container">
      <div className="welcome-section">
         <Link to ="/"> <img src ={Tomp} alt='logo'  className='login-logo'/> </Link>
        <h4>Welcome Back,</h4>
        <p>Log in to continue.</p>
      </div>
      <div className="form-section">
        <h3>Login to your account</h3>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="links">
            <a href="#">Forgot password?</a>
            <a href="/signup">New user? Register</a>
          </div>
          <button type="submit" className='log-btn'>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
