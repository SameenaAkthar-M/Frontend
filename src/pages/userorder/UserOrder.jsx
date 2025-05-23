import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./userorder.css"; // Import the CSS

const UserOrder = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    } else {
      fetchUserOrders();
    }
  }, [userId]);

  const fetchUserOrders = async () => {
    try {
      const res = await axios.get(
        `https://backend-1-gogw.onrender.com/api/orders/user/${userId}`
      );
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h2 className="orders-heading">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="no-orders-text">You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-info">
                <p>
                  <strong>Order ID:</strong> {order._id}
                </p>
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p>
                  <strong>Placed At:</strong>{" "}
                  {new Date(order.placedAt).toLocaleString()}
                </p>
                <p>
                  <strong>Total Price:</strong> ₹{order.totalPrice}
                </p>
              </div>
              <div className="order-products">
                <strong>Products:</strong>
                <ul>
                  {order.products.map((item, index) => (
                    <li key={index} className="order-product-item">
                      {/* Removed image tag */}
                      <div className="product-details">
                        <p>
                          {item.productName} - {item.quantity}kg × ₹
                          {item.pricePerKg} = ₹{item.totalPrice}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserOrder;
