import React from "react";

export const List = ({ fruitsList, setfruitsList }) => {
  return (
    <ul className="c__list">
      {fruitsList.map((fruits, index) => (
        <li className="c__list--text" key={index}>
          {fruits.name}
        </li>
      ))}
    </ul>
  );
};
