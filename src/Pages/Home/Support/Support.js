import React from 'react';
import './Support.css';

import delivery from '../../../images/delivery.svg';
import cashOnDelivery from "../../../images/cash-on-delivery.svg";
import quickReply from "../../../images/quick-reply.svg";

const Support = () => {
    return (
      <div className="support-container">
        <div className="container">
          <div className="row justify-content-center row-cols-1 row-cols-md-1 row-cols-lg-3 gy-4 gy-md-4">
            <div className="col">
              <img width={300} src={delivery} alt="" />
            </div>
            <div className="col">
              <img width={300} src={cashOnDelivery} alt="" />
            </div>
            <div className="col">
              <img width={300} src={quickReply} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Support;