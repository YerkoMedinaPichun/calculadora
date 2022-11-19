import React from "react";
import "../styles/Button.scss";

const Button = ({ children, type, handleClick }) => {
  return (
    <div
      className={
        (type === "number" ? "button number" : "") ||
        (type === "operatorPositive" ? "button operator-positive" : "") ||
        (type === "operatorNegative" ? "button operator-negative" : "") ||
        (type === "equals" ? "button equals" : "")
      }
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
