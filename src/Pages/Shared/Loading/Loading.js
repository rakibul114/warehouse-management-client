import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
      <div className='text-center d-flex justify-content-center align-items-center'>
        <div class="spinner-border text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
};

export default Loading;