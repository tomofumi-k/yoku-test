import { useState } from "react";
import TodoList from "./B-test/TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  return (
    <>
      <input type="text" />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
