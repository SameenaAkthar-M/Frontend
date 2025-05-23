import React, { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const userId = localStorage.getItem('userId');
  const [userAddress, setUserAddress] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔐 Redirect to login if user not logged in
  useEffect(() => {
    if (!userId) {
      navigate('/signin'); // Update to your actual login route
    }
  }, [userId, navigate]);

  // 🚚 Fetch user address
  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const response = await axios.get(`https://backend-1-gogw.onrender.com/api/auth/users/${userId}`);
        setUserAddress(response.data.address || 'Address not provided');
      } catch (err) {
        console.error('Error fetching user address:', err);
        setUserAddress('Failed to fetch address');
      }
    };

    if (userId) {
      fetchUserAddress();
    }
  }, [userId]);

  // ✅ Place Order
  const handlePlaceOrder = async () => {
    const orderData = {
      user: userId,
      products: cartItems.map((item) => ({
        productName: item.name,
        quantity: item.quantity,
        pricePerKg: item.price,
        totalPrice: item.price * item.quantity,
      })),
      totalPrice,
      payment: 'Pending',
      address: userAddress,
    };

    try {
      await axios.post('https://backend-1-gogw.onrender.com/api/orders/place', orderData);
      clearCart();
      navigate('/conformation');
    } catch (err) {
      console.error('Order placement error:', err);
      alert('Failed to place order');
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Checkout</h2>

      <section className="checkout-section">
        <h3>Shipping Address</h3>
        <p>{userAddress}</p>
      </section>

      <section className="checkout-section">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item._id} className="checkout-item">
            <span>{item.name}</span>
            <span>{item.quantity} kg × ₹{item.price}</span>
            <span> ₹{item.price * item.quantity}</span>
          </div>
        ))}
      </section>

      <section className="checkout-total">
        <h3>Total: ₹{totalPrice}</h3>
        <button onClick={handlePlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </section>
    </div>
  );
};

export default Checkout;
