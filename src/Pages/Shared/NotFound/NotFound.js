import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../../images/not-found.png';

const NotFound = () => {
    const navigate = useNavigate();

    const backToHomepage = () => {
        navigate('/');
    };

    return (
      <div className="container text-center mb-5">
        <div>
          <img width={350} src={notFoundImg} alt="" />
          <h1>This page could not be found!</h1>
          <p>
            We are sorry. But the page you are looking for is not available.{" "}
            <br />
            Perhaps you can try a new search.
          </p>
          <input
            className="w-25 py-1 ps-2"
            type="text"
            name="search"
            id=""
            placeholder="Search"
          />
          <button
            onClick={backToHomepage}
            className="btn btn-primary d-flex block text-center mx-auto mt-5"
          >
            BACK TO HOMEPAGE
          </button>
        </div>
      </div>
    );
};

export default NotFound;