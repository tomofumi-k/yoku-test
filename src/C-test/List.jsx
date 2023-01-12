import React from "react";
import Button from "./Button";

export const List = ({ fruitsList, setfruitsList }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsList
          .filter((fruitsList) => 5 >= fruitsList.id)
          .map((fruits, index) => (
            <li className="c__list--text" key={index}>
              {fruits.name}
            </li>
          ))}
      </ul>
      <Button buttonName={"右へ移動"} />
    </div>
  );
};
