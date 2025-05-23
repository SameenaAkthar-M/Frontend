import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import "./tilegrout.css"; // Assuming the CSS from earlier is being used

const TileGrout = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://backend-1-gogw.onrender.com/api/products/tilegrout")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching tile grout:", err));
  }, []);

  return (
    <div className="products-container">
      <h2 className="page-title">Tile Grout</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p className="no-products">No tile grout products available.</p>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default TileGrout;
