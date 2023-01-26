import React, { useState } from "react";
import { List } from "./List";
import { ListItems } from "./ListItems";
import "./c-test.scss";

function CtestApp() {
  const [fruitsList, setFruitsList] = useState([
    { id: 1, name: "Apple", checked: "false" },
    { id: 2, name: "grape", checked: "false" },
    { id: 3, name: "Strawberry", checked: "false" },
    { id: 4, name: "Cherry", checked: "false" },
    { id: 5, name: "Plum", checked: "false" },
    { id: 6, name: "Watermelon", checked: "false" },
    { id: 7, name: "Banana", checked: "false" },
    { id: 8, name: "Peach", checked: "false" },
  ]);

  const deleteFruits = () => {
    setFruitsList(
      // // 追加
      // setFruitsList([...fruitsList, fruitsList.id]),
      // 削除
      fruitsList.filter((fruitsList) => !fruitsList.completed)
    );
  };

  const FunctionButtonA = (e) => {
    console.log("ボタンAクリック");
  };
  const FunctionButtonB = (e) => {
    console.log("ボタンBクリック");
  };

  return (
    <div className="c-section">
      <List fruitsList={fruitsList} setFruitsListA={setFruitsList} FunctionButtonA={deleteFruits} />
      <ListItems fruitsList={fruitsList} setFruitsListB={setFruitsList} FunctionButtonB={FunctionButtonB} />
    </div>
  );
}

export default CtestApp;
