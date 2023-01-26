import React from "react";
import ReactDOM from "react-dom/client";
import AtestApp from "./A-test/ATestApp";
import BtestApp from "./B-test/BtestApp";
import "./base.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AtestApp />
    <BtestApp />
  </React.StrictMode>
);
