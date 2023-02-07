import React from 'react'

const BlueAndPurple = () => {
  return (
    <div className="secondBlob">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="AnotherGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffc582" />
            <stop offset="100%" stopColor="#63e4f2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#AnotherGradient)"
          d="M42.1,-46.7C51.6,-32.5,54.5,-16.2,54.1,-0.4C53.7,15.4,49.9,30.8,40.4,44.1C30.8,57.3,15.4,68.4,-2.3,70.8C-20.1,73.1,-40.2,66.7,-56.4,53.4C-72.5,40.2,-84.8,20.1,-82.5,2.3C-80.2,-15.5,-63.4,-31,-47.2,-45.2C-31,-59.4,-15.5,-72.2,0.4,-72.6C16.2,-72.9,32.5,-60.8,42.1,-46.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default BlueAndPurple