// 追加されるTodoのコンポーネント
import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  // Todoの削除
  const handleDelete = (id) => {
    // filter((task) で taskを監視、task.id(todoリストのid) が id と = だった場合,除外する
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      {/* map関数で一つずつ取り出す。forEachみたいなもの */}
      {/* 変化するものが task , index。これらが渡される */}
      {taskList.map((task, index) => (
        <div className="todo__input--container" key={index}>
          <label className="todo__deletebutton">
            <button onClick={() => handleDelete(task.id)}>x</button>
          </label>
          <div className="todoText">
            {/* InputForm.jsxで定義したtextが出力される */}
            <span>{task.text}</span>
          </div>
        </div>
      ))}
    </>
  );
};
