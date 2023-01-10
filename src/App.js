import React, { useState } from "react";
import { List } from "./C-test/List";
import "./C-test/c-test.scss";

function App() {
  const [fruits, setfruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "grape" },
    { id: 3, name: "Strawberry" },
    { id: 4, name: "Cherry" },
    { id: 5, name: "Plum" },
    { id: 6, name: "Watermelon" },
    { id: 7, name: "Banana" },
    { id: 8, name: "Peach" },
  ]);

  return <List fruits={fruits} setfruits={setfruits} />;
}

export default App;
