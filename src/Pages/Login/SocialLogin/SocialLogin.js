import React from 'react';
import './SocialLogin.css';
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleIcon from '../../../images/google.png';
import facebookIcon from '../../../images/facebook.png';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';


const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFb, errorFb] =
    useSignInWithFacebook(auth);
  const [token] = useToken(user || userFb);
  const navigate = useNavigate();
  const location = useLocation();
  
  let errorElement;
    if (error || errorFb) {
      errorElement =
        (<div>
        <p className='text-danger'>Error: {error?.message} {errorFb?.message}</p>
        </div>);
  }
  
  let from = location.state?.from?.pathname || "/";
  
  if (token) {
    navigate(from, { replace: true });
  }

    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
          <p className="mt-2 px-3">or</p>
          <div style={{ height: "1px" }} className="bar-color w-50"></div>
        </div>
        {errorElement}
        <div className="text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="google-button w-75 p-2 bg-light rounded"
          >
            <img height={40} src={googleIcon} alt="" /> Google Sign In
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => signInWithFacebook()}
            className="facebook-button w-75 p-2 bg-light rounded my-3"
          >
            <img height={40} src={facebookIcon} alt="" /> Facebook Sign In
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;