import React from "react";

const Blob = () => {
  return (
    <div className="theBlob">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(148.72965240478516, -7.1440277099609375)">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor=" rgb(238, 205, 163)"></stop>
              <stop offset="100%" stopColor=" rgb(255, 0, 102)"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M419,308Q366,366,308,389Q250,412,183.5,397.5Q117,383,90,316.5Q63,250,85.5,179Q108,108,179,93Q250,78,335.5,78.5Q421,79,446.5,164.5Q472,250,419,308Z;
                        M447,330Q410,410,330,433Q250,456,176.5,426.5Q103,397,81.5,323.5Q60,250,71,166Q82,82,166,61.5Q250,41,321,74.5Q392,108,438,179Q484,250,447,330Z; M438,327Q404,404,327,444.5Q250,485,193,424.5Q136,364,75,307Q14,250,45,163Q76,76,163,80.5Q250,85,305,112.5Q360,140,416,195Q472,250,438,327Z; M409,313.5Q377,377,313.5,392Q250,407,167,411.5Q84,416,83.5,333Q83,250,92,175.5Q101,101,175.5,65.5Q250,30,311,79Q372,128,406.5,189Q441,250,409,313.5Z; M419,308Q366,366,308,389Q250,412,183.5,397.5Q117,383,90,316.5Q63,250,85.5,179Q108,108,179,93Q250,78,335.5,78.5Q421,79,446.5,164.5Q472,250,419,308Z;"
            ></animate>
          </path>
        </g>
      </svg>
    </div>
  );
};

export default Blob;

//"Frontend Developer", "Friend", "Node Js Developer", "FullStack Developer", "Brother", "Founder", "Lover Of Music", "Problem Solver"
