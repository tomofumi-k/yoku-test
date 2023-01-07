import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo__input--container">
      <button className="todo__deletebutton" onClick={() => console.log("removed!")}>
        X
      </button>
      {todo.name}
    </div>
  );
};

export default Todo;
