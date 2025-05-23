import React, { useState } from 'react';
import './colorchange.css';
import {useNavigate} from 'react-router-dom'

const groutColors = [
  '#964B00', '#C68642', '#800000', '#B22222',
  '#A0EEE2', '#003366', '#001F54', '#D9CBA3', '#F2E85C'
];

const Colorchange = () => {
  const [groutColor, setGroutColor] = useState('#A0EEE2');
  const navigate=useNavigate();

  return (
    <div className="visualize-content">
      <div className="visualizer-container">
        <h2 className="visualizer-heading">Tile Joint Filler Visualizer</h2>

        <svg viewBox="0 0 400 250" className="tile-svg">
          <g stroke={groutColor} strokeWidth="4">
            {/* Row 1 */}
            <polygon points="25,25 50,10 75,25 75,55 50,70 25,55" fill="#b9b9b98e" />
            <polygon points="75,25 100,10 125,25 125,55 100,70 75,55" fill="#b9b9b98e" />
            <polygon points="125,25 150,10 175,25 175,55 150,70 125,55" fill="#b9b9b98e" />
            <polygon points="175,25 200,10 225,25 225,55 200,70 175,55" fill="#b9b9b98e" />
            <polygon points="225,25 250,10 275,25 275,55 250,70 225,55" fill="#b9b9b98e" />

            {/* Row 2 (offset) */}
            <polygon points="50,70 75,55 100,70 100,100 75,115 50,100" fill="#b9b9b98e" />
            <polygon points="100,70 125,55 150,70 150,100 125,115 100,100" fill="#b9b9b98e" />
            <polygon points="150,70 175,55 200,70 200,100 175,115 150,100" fill="#b9b9b98e" />
            <polygon points="200,70 225,55 250,70 250,100 225,115 200,100" fill="#b9b9b98e" />
            <polygon points="250,70 275,55 300,70 300,100 275,115 250,100" fill="#b9b9b98e" />

            {/* Row 3 */}
            <polygon points="75,115 100,100 125,115 125,145 100,160 75,145" fill="#b9b9b98e" />
            <polygon points="125,115 150,100 175,115 175,145 150,160 125,145" fill="#b9b9b98e" />
            <polygon points="175,115 200,100 225,115 225,145 200,160 175,145" fill="#b9b9b98e" />
            <polygon points="225,115 250,100 275,115 275,145 250,160 225,145" fill="#b9b9b98e" />
            <polygon points="275,115 300,100 325,115 325,145 300,160 275,145" fill="#b9b9b98e" />

            {/* Row 4 (offset) */}
            <polygon points="100,160 125,145 150,160 150,190 125,205 100,190" fill="#b9b9b98e" />
            <polygon points="150,160 175,145 200,160 200,190 175,205 150,190" fill="#b9b9b98e" />
            <polygon points="200,160 225,145 250,160 250,190 225,205 200,190" fill="#b9b9b98e" />
            <polygon points="250,160 275,145 300,160 300,190 275,205 250,190" fill="#b9b9b98e" />
            <polygon points="300,160 325,145 350,160 350,190 325,205 300,190" fill="#b9b9b98e" />

            {/* Row 5 */}
            <polygon points="125,205 150,190 175,205 175,235 150,250 125,235" fill="#b9b9b98e" />
            <polygon points="175,205 200,190 225,205 225,235 200,250 175,235" fill="#b9b9b98e" />
            <polygon points="225,205 250,190 275,205 275,235 250,250 225,235" fill="#b9b9b98e" />
            <polygon points="275,205 300,190 325,205 325,235 300,250 275,235" fill="#b9b9b98e" />
            <polygon points="325,205 350,190 375,205 375,235 350,250 325,235" fill="#b9b9b98e" />
          </g>
        </svg>

        <div className="color-palette">
          {groutColors.map((color) => (
            <button
              key={color}
              onClick={() => setGroutColor(color)}
              className="color-button"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <div className="content">
        <h1>Tile Joint Filler Visualizer</h1>
        <p>Keep it subtle with a matching grout shade, explore the possibilities.</p>
        <button className="tile-g" onClick={()=>{
          navigate('/products')
        }}>Go to Product</button>
      </div>
    </div>
  );
};

export default Colorchange;
