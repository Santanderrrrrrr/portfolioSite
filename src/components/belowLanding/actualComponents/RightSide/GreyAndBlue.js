import React from 'react'
import "../actualComponents.css"

const GreyAndBlue = () => {
  return (
    <div className="gabHue">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="MyGradientB" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#303f85" />
            <stop offset="100%" stopColor="#979899" />
          </linearGradient>
        </defs>
        <path
          fill="url(#MyGradientB)"
          d="M38.5,-45.1C54,-41.7,73.7,-36,82.7,-23.3C91.8,-10.6,90.4,9.2,84.5,27.5C78.5,45.8,68.1,62.6,53.3,66.4C38.5,70.2,19.2,60.9,0.9,59.6C-17.4,58.4,-34.8,65.1,-48.1,60.8C-61.4,56.5,-70.6,41.2,-75.9,24.7C-81.3,8.2,-82.8,-9.6,-75,-21.5C-67.2,-33.4,-50.2,-39.5,-36.1,-43.4C-22.1,-47.3,-11,-49.1,0.2,-49.4C11.5,-49.7,22.9,-48.5,38.5,-45.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default GreyAndBlue