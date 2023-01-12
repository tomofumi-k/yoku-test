import React from "react";
import Button from "./Button";

export const ListItems = ({ fruitsList, setfruitsList }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsList
          .filter((fruitsList) => 6 <= fruitsList.id)
          .map((fruits, index) => (
            <li className="c__list--text" key={index}>
              {fruits.name}
            </li>
          ))}
      </ul>
      <Button buttonName={"左へ移動"} />
    </div>
  );
};
