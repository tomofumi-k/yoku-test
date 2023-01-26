import React from "react";

export const List = ({ fruitsListA, setfruitsListA }) => {
  return (
    <>
      {fruitsListA
        .filter((fruitsList) => 5 >= fruitsList.id)
        .map((fruits, index) => (
          <label className="c__list--text" key={index}>
            <input type="checkbox" checked={fruitsListA.checked} />
            {fruits.name}
          </label>
        ))}
    </>
  );
};
