import React from "react";

export const ListItems = ({ fruitsListB, setfruitsListB }) => {
  return (
    <>
      {fruitsListB
        .filter((fruitsList) => 6 <= fruitsList.id)
        .map((fruits, index) => (
          <label className="c__list--text" key={index}>
            <input type="checkbox" checked={fruitsListB.checked} />
            {fruits.name}
          </label>
        ))}
    </>
  );
};
