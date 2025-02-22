"use client";

import React, { useState, useEffect } from "react";
import "./heading.css";


const GradientText: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(35* 24 * 60 * 60); // Set initial time (e.g., 3 days in seconds)

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when time reaches zero

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [timeLeft]);

  // Convert total seconds into Days, Hours, Minutes, and Seconds
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days} days ${hours} hours ${minutes} minutes ${secs} seconds`;
  };

  return (
    <div className="backg">
       {/* <img src="./logo.jpeg" alt="logo" width={200} height={100}/>  */}
      <div className="content">
        <h1 className="text">Vayudoot'25</h1>
        <div className="timer">{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default GradientText;
