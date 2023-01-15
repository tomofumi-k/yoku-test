import React from "react";

export const List = ({ fruitsListA, setfruitsListA, FunctionButtonA }) => {
  return (
    <div className="c__container">
      <ul className="c__list">
        {fruitsListA.map((fruits, index) => (
          <label className="c__list--text" key={index}>
            <input type="checkbox" checked={fruitsListA.checked} />
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
