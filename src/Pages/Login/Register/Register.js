import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
    const [agree, setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
  const navigate = useNavigate();
  
  if (loading) {
    return (<Loading></Loading>);
  }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (!agree) {
        return "Please accept Terms and Conditions";
      }
        
      createUserWithEmailAndPassword(email, password);
      toast("Please check your email");
      
    };


    return (
      <div className="bg-light w-50 mx-auto my-5 py-2 shadow">
        <h3 className="text-center text-primary mt-5">PLEASE REGISTER</h3>
        <div className="w-75 mx-auto">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)}
                type="checkbox"
                label="I agree to Terms and conditions & Privacy Policy"
              />
            </Form.Group>
           
            <p className="mt-2">
              Forgot your password?
              <button className="text-primary text-decoration-none btn btn-link">
                Reset
              </button>
            </p>
            <div className="text-center">
              <Button disabled={!agree} className="w-50 mb-3" variant="primary" type="submit">
                REGISTER
              </Button>
            </div>
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-danger text-decoration-none">
                Please Login
              </Link>
            </p>
          </Form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Register;