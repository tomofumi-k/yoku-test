import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form className="bsection__input--form" onSubmit={handleSubmit}>
        <input className="bsection__input" type="text" onChange={handleChange} value={inputText} />
        <button className="bsection__button">追加</button>
      </form>
    </div>
  );
};
