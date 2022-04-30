import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="bg-light w-50 mx-auto my-5 py-2">
        <h3 className="text-center text-primary mt-5">PLEASE LOGIN</h3>
        <div className="w-75 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
        </div>
      </div>
    );
};

export default Login;