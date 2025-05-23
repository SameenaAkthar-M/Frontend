import React from 'react';
import './about.css'; // create and style this CSS file

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Sasen Product Solutions</h1>
        <p>Your trusted partner for tile and stone fixing solutions</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            At Sasen Product Solutions, we specialize in providing high-quality products for tile and stone applications. 
            With a commitment to durability and aesthetics, we cater to both residential and commercial projects.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li><strong>Tile Grout:</strong> Available in over 64 colors to suit every design need.</li>
            <li><strong>Adhesive:</strong> Offered in Silver, Gold, and Diamond variants for maximum bonding strength and style.</li>
            <li><strong>Wall Putty:</strong> Smooth finishing solutions for interior and exterior walls.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower architects, contractors, and homeowners with superior fixing products that ensure beauty, longevity, and performance.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Top-tier product quality</li>
            <li>Reliable customer support</li>
            <li>Wide color and material variety</li>
            <li>Timely delivery across locations</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
