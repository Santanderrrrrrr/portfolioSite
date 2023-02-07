import React from 'react'

const BlueAndPurple = () => {
  return (
    <div className="raoHueItself">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="MyGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF0066" />
            <stop offset="100%" stopColor="#70b3ff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#MyGradient)"
          d="M42.2,-67.7C55.3,-57.3,66.8,-46.5,70.6,-33.6C74.4,-20.7,70.4,-5.6,64.3,6.5C58.2,18.5,50.1,27.4,42,35.9C33.9,44.4,25.9,52.6,15.4,58.3C5,63.9,-7.8,67.1,-23,67.6C-38.2,68.1,-55.9,65.9,-67.1,56.3C-78.4,46.7,-83.3,29.7,-78.5,15.6C-73.7,1.6,-59.3,-9.4,-50.8,-21.1C-42.2,-32.7,-39.4,-44.9,-31.9,-57.8C-24.5,-70.7,-12.2,-84.4,1.2,-86.2C14.6,-88,29.2,-78,42.2,-67.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default BlueAndPurple