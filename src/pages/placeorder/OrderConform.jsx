import React from 'react';
import { useNavigate } from 'react-router-dom';
import './orderconformation.css';

const OrderConform = () => {
  const navigate = useNavigate();

  return (
    <div className="order-confirm-container">
      <div className="order-card">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order has been received and is being processed.</p>
        <button onClick={() => navigate('/')} className="home-btn">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConform;
