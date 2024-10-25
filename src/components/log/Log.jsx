import './Log.scss';
import ProjectImage1 from '../../assets/Ellipse 1.png';
import ProjectImage3 from '../../assets/Ellipse 3.png';
import ProjectImage2 from '../../assets/Ellipse 2.png';
import { useState, useEffect } from 'react';

const Log = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className='log'>
      <div className="logContainer">
        <div className="circle3">
          <img src={ProjectImage2} alt="" />
        </div>
        <div className="leftbox">
          <h1>Welcome Page</h1>
          <h3>Sign in to your account</h3>
        </div>
        <div className="circle1">
          <img src={ProjectImage1} alt="" />
        </div>
        <div className="circle2">
          <img src={ProjectImage3} alt="" />
        </div>
      </div>

      <div className="login-container">
        <div className="up-section">
          <h1>Hello!</h1>
          <h2>{greeting}</h2>
        </div>
        <div className="down-section">
          <h3>Login Your Account</h3>
          <form>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember</label>
            </div>
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Log;
