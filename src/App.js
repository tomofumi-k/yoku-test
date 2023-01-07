import React, { useState } from "react";
import Button from "./A-test/button";
import craftNinja from "./A-test/axiosCraftNinja";
import "./A-test/a-section.scss";

const App = () => {
  const [resources, setResources] = useState([]);

  const getFacts = async () => {
    try {
      const facts = await craftNinja.get("/fact");
      setResources(facts.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="a__section">
      <div className="a__section--container">
        <p className="a__txt" key={resources.fact}>{resources.fact}</p>
        <Button className="a__button" onClick={getFacts} text="更新" />
      </div>
    </div>
  );
};

export default App;
