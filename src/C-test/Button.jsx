import React from "react";

const Button = ({ buttonName, FunctionButtonB }) => {
  return (
    <button className="c__list--button" onClick={FunctionButtonB}>
      {buttonName}
    </button>
  );
};

export default Button;
