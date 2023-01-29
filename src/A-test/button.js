import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button className="a__button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
