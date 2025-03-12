import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <div className="logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="skyblue" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold">
            Jerry
          </text>
        </svg>
      </div>
    </Link>
  );
};

export default Logo;
