import React from 'react';
import './SocialLogin.css';
import googleIcon from '../../../images/google.png';
import facebookIcon from '../../../images/facebook.png';


const SocialLogin = () => {
    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
          <p className="mt-2 px-3">or</p>
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
        </div>
        
        <div className="text-center">
          <button            
            className="google-button w-75 p-2 bg-light rounded"
          >
            <img height={40} src={googleIcon} alt="" /> Google Sign In
          </button>
        </div>
        <div className="text-center">
          <button className="facebook-button w-75 p-2 bg-light rounded my-3">
            <img height={40} src={facebookIcon} alt="" /> Facebook Sign In
          </button>
        </div>        
      </div>
    );
};

export default SocialLogin;