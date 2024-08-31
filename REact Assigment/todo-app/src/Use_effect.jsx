import React, { useState, useEffect } from "react";

const Use_effect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleStyle = {
    position: "absolute",
    top: position.y - 50,
    left: position.x - 50,
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
    borderRadius: "50%",
    border: "10px solid rgba(0, 0, 139, 0.5)",
    pointerEvents: "none",
  };

  return (
    <div style={{ height: "70vh", backgroundColor: "#f0f0f0", position: "relative" }} ><hr />
      <div style={circleStyle}></div>
    </div>
    
  );
};

export default Use_effect;
