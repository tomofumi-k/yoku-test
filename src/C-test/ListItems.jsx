import React from "react";

export const ListItems = ({ fruitsListB, setfruitsListB, FunctionButtonB }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsListB.map((fruits, index) => (
          <label className="c__list--text" key={index}>
            <input type="checkbox" checked={fruitsListB.checked} />
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
