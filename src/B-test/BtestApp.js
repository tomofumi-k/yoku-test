import { useState } from "react";
import { InputForm } from "./InputForm";
import { TodoList } from "./TodoList";
import "../base.scss";
import "./b__section.scss";

function BtestApp() {
  const [taskList, setTaskList] = useState([
    { id: 1, text: "Apple" },
    { id: 2, text: "grape" },
    { id: 3, text: "Strawberry" },
  ]);

  return (
    <div className="bsection">
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default BtestApp;
