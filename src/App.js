import { useState, useRef } from "react";
import TodoList from "./B-test/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./base.scss";
import "./B-test/b__section.scss";

function App() {
  // デフォルトのリスト雛形
  const [todos, setTodos] = useState([
    { id: 1, name: "Apple", removed: false },
    { id: 2, name: "grape", removed: false },
    { id: 3, name: "Strawberry", removed: false },
  ]);

  // 追加ボタンで入力された文字をTodoリストに追加
  const todoNameRef = useRef();
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, removed: false }];
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
