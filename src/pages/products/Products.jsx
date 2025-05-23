import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./products.css"; // Assuming you have a separate CSS file

const Products = () => {
  const [products, setProducts] = useState({
    adhesiveDiamond: [],
    adhesiveGold: [],
    adhesiveSilver: [],
    wallputty: [],
    tileGrout: [],
  });
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("https://backend-1-gogw.onrender.com/api/products/all");
        setProducts(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch products");
      }
    };
    fetchAllProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderProducts = (title, items) => (
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
      <h2 className="page-title">All Products</h2>
      {error && <p className="error-message">{error}</p>}
      {renderProducts("Wall Putty", products.wallputty)}
      {renderProducts("Adhesive Diamond", products.adhesiveDiamond)}
      {renderProducts("Adhesive Gold", products.adhesiveGold)}
      {renderProducts("Adhesive Silver", products.adhesiveSilver)}
      {renderProducts("Tile Grout", products.tileGrout)}
    </div>
  );
};

export default Products;
