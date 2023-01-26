import React from "react";
import ReactDOM from "react-dom/client";
import BtestApp from "./B-test/BtestApp";
import "./base.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BtestApp />
  </React.StrictMode>
);
