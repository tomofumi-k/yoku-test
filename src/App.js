import { useState, useRef } from "react";
import TodoList from "./B-test/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./base.scss";
import "./B-test/b__section.scss";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Apple", completed: false },
    { id: 2, name: "grape", completed: false },
    { id: 2, name: "Strawberry", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  return (
    <div className="bsection">
      <div className="bsection__input--form">
        <input className="bsection__input" type="text" ref={todoNameRef} />
        <button className="bsection__button" onClick={handleAddTodo}>
          追加
        </button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
