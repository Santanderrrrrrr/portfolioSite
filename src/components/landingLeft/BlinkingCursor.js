import React, { useState, useEffect } from "react";

const BlinkingCursor = () => {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibility(!visibility);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [visibility]);

  return (
      <span style={{ visibility: visibility ? "visible" : "hidden", marginLeft: "5px", marginBottom: "auto" }}>|</span>
  );
};

export default BlinkingCursor;
