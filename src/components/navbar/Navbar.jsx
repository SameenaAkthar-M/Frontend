import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import './navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    setUserName(name);
    setUserId(storedUser);
  }, []);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");  // 🔧 This was missing
  localStorage.removeItem("name");
  setUserId(null);
  setUserName(null); // reset username too
  navigate("/");
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-user")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Left: Logo */}
        <div className="nav-left">
          <img src="/logo.svg" alt="Logo" className="logo" />
        </div>

        {/* Center: Navigation Links */}
        <ul className="nav-center" style={{ fontFamily: "Poppins, sans-serif" }}>
          <li className={activeLink === "/" ? "active" : ""}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className={activeLink === "/aboutus" ? "active" : ""}>
            <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>
          <li
            className="dropdown-wrapper"
            onMouseEnter={() => setProductDropdownOpen(true)}
            onMouseLeave={() => setProductDropdownOpen(false)}
          >
            <Link to="/products" className="dropdown-title">Products</Link>
            {productDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/tilegrout">Tile Grout</Link></li>
                <li><Link to="/adhesives">Adhesive</Link></li>
                <li><Link to="/wallputty">Wall Putty</Link></li>
              </ul>
            )}
          </li>
          {userId && (
            <li>
              <Link to="/userorder" className="nav-link">Orders</Link>
            </li>
          )}
        </ul>

        {/* Right: Cart and User */}
        <div className="nav-right">
          <Link to="/cart" className="cart-icon">
            <FaCartShopping size={20} />
          </Link>

          {userId ? (
            <div className="dropdown-user">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="dropdown"
              >
                <FaUserCircle size={20} />
                <span>{userName}</span>
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu-user">
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn-l-r">Login/Register</Link>
          )}
        </div>

      </div>
    </nav>
  );
};
