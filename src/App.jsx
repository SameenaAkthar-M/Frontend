import React from "react";
import { Signup } from "./components/signup/Signup";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Products from "./pages/products/Products.jsx";
import Cart from "./pages/cart/Cart.jsx";
import TileGrout from "./pages/tilegrout/TileGrout.jsx";
import WallPutty from "./pages/wallputty/WallPutty.jsx";
import Adhesives from "./pages/adhesives/Adhesives.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import OrderConform from "./pages/placeorder/OrderConform.jsx";
import UserOrders from "./pages/userorder/UserOrder.jsx";
import About from "./pages/aboutus/About.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/adhesives" element={<Adhesives />} />
        <Route path="/wallputty" element={<WallPutty />} />
        <Route path="/tilegrout" element={<TileGrout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/conformation" element={<OrderConform />} />
        <Route path="/userorder" element={<UserOrders />} />
        <Route path="/aboutus" element={<About/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
