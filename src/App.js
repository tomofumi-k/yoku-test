import { useState, useRef } from "react";
import TodoList from "./B-test/TodoList";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = (e) =>{
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name:name, completed: false}];
    })
    todoNameRef.current.value = null;
  };

  return (
    <>
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>追加</button>
    <TodoList todos={todos} />
    </>
  );
};

export default App;
