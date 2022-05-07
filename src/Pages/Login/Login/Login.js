import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {  
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return (<Loading></Loading>);
  }

  if (user) {
    // navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error?.message}</p>
      </div>
    )
  }

  // jwt used here for login
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    // jwt (login)
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  

  const resetPassword = async() => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Please check your email');
    }
    else {
      toast('Please enter your email address');
    }
  };


    return (
      <div className="bg-light w-50 mx-auto my-5 py-2 shadow">
        <h3 className="text-center text-primary mt-5">PLEASE LOGIN</h3>
        <div className="w-75 mx-auto">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {errorElement}            

            <p className="mt-2">
              Forgot your password?
              <button
                onClick={resetPassword}
                className="text-primary text-decoration-none btn btn-link"
              >
                Reset
              </button>
            </p>
            <div className="text-center">
              <Button className="w-25 mb-4" variant="primary" type="submit">
                LOGIN
              </Button>
            </div>
            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-danger text-decoration-none">
                Please Register
              </Link>
            </p>
          </Form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Login;