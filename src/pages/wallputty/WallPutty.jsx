import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import "./wallputty.css"; // Assuming your styles are in Products.css

const WallPutty = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://backend-1-gogw.onrender.com/api/products/wallputty"
        );
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load wall putty products. Please try again later.");
        console.error("Error fetching wallputty:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="products-container">
      <h2 className="page-title">Wall Putty</h2>

      {error && <p className="error-message">{error}</p>}

      {products.length === 0 ? (
        <p className="no-products">No wall putty products available.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-card-inner">
                <img
                  src={`https://backend-1-gogw.onrender.com/uploads/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">₹{product.price}/kg</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => {
                      addToCart(product);
                      alert(`${product.name} added to cart!`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WallPutty;
