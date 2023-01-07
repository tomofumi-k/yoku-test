import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo__input--text">
      <label>
        <input className="todo__input--check" type="checkbox" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
