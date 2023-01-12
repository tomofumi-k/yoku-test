import React, { useState } from "react";
import { List } from "./C-test/List";
import "./base.scss";
import "./C-test/c-test.scss";

function App() {
  const [fruitsList, setfruitsList] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "grape" },
    { id: 3, name: "Strawberry" },
    { id: 4, name: "Cherry" },
    { id: 5, name: "Plum" },
    { id: 6, name: "Watermelon" },
    { id: 7, name: "Banana" },
    { id: 8, name: "Peach" },
  ]);

  return (
    <div className="c-section">
      <List fruitsList={fruitsList} setfruitsList={setfruitsList} />
      <button className="c__list--button">右へ移動</button>
    </div>
  );
}

export default App;
