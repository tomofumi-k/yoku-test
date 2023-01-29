import React from "react";
import ReactDOM from "react-dom/client";
// import AtestApp from "./A-test/AtestApp";
import BtestApp from "./B-test/BtestApp";
import CtestApp from "./C-test/CtestApp";
import "./base.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AtestApp /> */}
    {/* <BtestApp /> */}
    <CtestApp />
  </React.StrictMode>
);
