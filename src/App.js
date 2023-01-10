import { useState } from "react";
import { InputForm } from "./B-test/InputForm";
import { TodoList } from "./B-test/TodoList";
import "./B-test/b__section.scss";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="bsection">
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
