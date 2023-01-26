import React from "react";

export const ListItems = ({ fruitsList, setfruitsList, FunctionButtonB }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsList
          .filter((fruitsList) => 6 <= fruitsList.id)
          .map((fruits, index) => (
            <label className="c__list--text" key={index}>
              <input type="checkbox" checked={fruitsList.checked} />
              {fruits.name}
            </label>
          ))}
      </ul>
      <button className="c__list--button" onClick={FunctionButtonB}>
        左へ移動
      </button>
    </div>
  );
};
