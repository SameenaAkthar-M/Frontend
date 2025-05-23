import React from 'react';
import Slider from 'react-slick'; // Import Slick Slider
import './carousel.css'
import { useNavigate } from 'react-router-dom';
// Import styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  // Slick slider settings
  const navigate = useNavigate();
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Slide transition speed in ms
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slides in ms
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Tile Grout</h2>
            <p>Explore our range of colorful tile grouts.</p>
            <button onClick={() => navigate('/tilegrout')}>View Product</button>
          </div>
          <div className="carousel-image img-1">
            <img src="/tilegrout.jpg" alt="Tile Grout" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Adhesive</h2>
            <p>High-strength adhesive for durable tiling.</p>
            <button onClick={() => navigate('/adhesives')}>View Product</button>
          </div>
          <div className="carousel-image">
            <img src="/adhesive.jpg" alt="Adhesive" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-slide">
          <div className="carousel-content">
            <h2>Wall Putty</h2>
            <p>Smooth your walls with our quality putty.</p>
            <button onClick={() => navigate('/wallputty')}>View Product</button>
          </div>
          <div className="carousel-image img-3">
            <img src="/wallputty.jpg" alt="Wall Putty" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
