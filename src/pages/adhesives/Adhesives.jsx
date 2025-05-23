import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
import './adhesives.css'; // 👈 Import the CSS

const Adhesives = () => {
  const [adhesives, setAdhesives] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchAdhesives = async () => {
      try {
        const res = await axios.get('https://backend-1-gogw.onrender.com/api/products/adhesives');
        setAdhesives(res.data);
      } catch (err) {
        console.error('Error fetching adhesives:', err);
      }
    };
    fetchAdhesives();
  }, []);

  const renderItems = (title, items) => (
    <div className="product-category">
      <h3 className="category-title">{title}</h3>
      {items.length === 0 ? (
        <p className="no-products">No products available.</p>
      ) : (
        <div className="product-list">
          {items.map((product) => (
            <div className="product-card" key={product._id}>
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

  return (
    <div className="products-container">
      <h2 className="page-title">Adhesives</h2>
      {renderItems('Adhesive Diamond', adhesives.adhesiveDiamond || [])}
      {renderItems('Adhesive Gold', adhesives.adhesiveGold || [])}
      {renderItems('Adhesive Silver', adhesives.adhesiveSilver || [])}
      {renderItems('Adhesive Cement', adhesives.adhesiveCement || [])}
    </div>
  );
};

export default Adhesives;
