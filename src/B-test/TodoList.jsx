import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      {taskList.map((task, index) => (
        <div className="todo__input--container" key={index}>
          <label className="todo__deletebutton">
            <button onClick={() => handleDelete(task.id)}>x</button>
          </label>
          <div className="todoText">
            <span>{task.text}</span>
          </div>
        </div>
      ))}
    </>
  );
};
