import React from 'react';
import './Support.css';

import delivery from '../../../images/delivery.svg';
import cashOnDelivery from "../../../images/cash-on-delivery.svg";
import quickReply from "../../../images/quick-reply.svg";

const Support = () => {
    return (
      <div className="support-container">
        <img width={350} src={delivery} alt="" />
        <img width={350} src={cashOnDelivery} alt="" />
        <img width={350} src={quickReply} alt="" />
      </div>
    );
};

export default Support;