import React from "react";
import "../styles/Screen.scss";

const Screen = ({ input }) => {
  return (
    <div className="screen">
      <p className="screen-input">{input}</p>
    </div>
  );
};

export default Screen;
