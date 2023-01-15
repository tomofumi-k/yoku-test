import React, { useState } from "react";
import { List } from "./C-test/List";
import { ListItems } from "./C-test/ListItems";
import "./base.scss";
import "./C-test/c-test.scss";

function App() {
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

  const FunctionButtonA = (e) => {
    console.log("ボタンAクリック");
  };
  const FunctionButtonB = (e) => {
    console.log("ボタンBクリック");
  };

  return (
    <div className="c-section">
      <List fruitsListA={fruitsListA} setFruitsListA={setFruitsListA} FunctionButtonA={FunctionButtonA} />
      <ListItems fruitsListB={fruitsListB} setFruitsListB={setFruitsListB} FunctionButtonB={FunctionButtonB} />
    </div>
  );
}

export default App;
