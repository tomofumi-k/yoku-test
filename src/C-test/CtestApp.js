import React, { useState } from "react";
import { List } from "./List";
import { ListItems } from "./ListItems";
import "./c-test.scss";
import { Button } from "./Button";

function CtestApp() {
  const [fruitsListA, setFruitsListA] = useState([
    { id: 1, name: "Apple", checked: "false" },
    { id: 2, name: "grape", checked: "false" },
    { id: 3, name: "Strawberry", checked: "false" },
    { id: 4, name: "Cherry", checked: "false" },
    { id: 5, name: "Plum", checked: "false" },
  ]);
  const [fruitsListB, setFruitsListB] = useState([
    { id: 6, name: "Watermelon", checked: "false" },
    { id: 7, name: "Banana", checked: "false" },
    { id: 8, name: "Peach", checked: "false" },
  ]);

  const someClickFunctionA = () => {
    // const newFruitsList = fruitsListA.filter((fruits) => !fruits.checked);
    // setFruitsListA(newFruitsList);
    console.log(fruitsListA.checked);
  };
  const someClickFunctionB = () => {
    // const newFruitsList = fruitsListA.filter((fruits) => !fruits.checked);
    // setFruitsListA(newFruitsList);
    console.log(fruitsListB.checked);
  };

  return (
    <div className="c-section">
      <div className="c__container">
        <ul className="c__list">
          <List fruitsListA={fruitsListA} setFruitsListA={setFruitsListA} />
        </ul>
        <Button buttonName="左へ移動" onClick={() => someClickFunctionA} />
      </div>
      <div className="c__container">
        <ul className="c__list">
          <ListItems fruitsListB={fruitsListB} setFruitsListB={setFruitsListB} />
        </ul>
        <Button buttonName="右へ移動" onClick={() => someClickFunctionB} />
      </div>
    </div>
  );
}

export default CtestApp;
