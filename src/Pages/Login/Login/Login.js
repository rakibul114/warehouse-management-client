import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };


    return (
      <div className="bg-light w-50 mx-auto my-5 py-2 shadow">
        <h3 className="text-center text-primary mt-5">PLEASE LOGIN</h3>
        <div className="w-75 mx-auto">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p className="mt-2">
              Forgot your password?
              <button className="text-primary text-decoration-none btn btn-link">
                Reset
              </button>
            </p>
            <div className="text-center">
              <Button className="w-25" variant="primary" type="submit">
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