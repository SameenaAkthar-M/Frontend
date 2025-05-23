import React from "react";
import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price (₹/kg)</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={`https://backend-1-gogw.onrender.com/uploads/${item.image}`}
                      alt={item.name}
                      className="cart-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn minus-btn"
                        onClick={() =>
                          updateQuantity(
                            item._id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn plus-btn"
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <span className="kg-label">kg</span>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Grand Total: ₹{totalAmount}</h3>
            <button
              onClick={() => navigate("/checkout")}
              className="checkout-btn"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
