import React from "react";

export const List = ({ fruitsList, setfruitsList, FunctionButtonA }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsList
          .filter((fruitsList) => 5 >= fruitsList.id)
          .map((fruits, index) => (
            <label className="c__list--text" key={index}>
              <input type="checkbox" checked={fruitsList.checked} />
              {fruits.name}
            </label>
          ))}
      </ul>
      <button className="c__list--button" onClick={FunctionButtonA}>
        右へ移動
      </button>
    </div>
  );
};
