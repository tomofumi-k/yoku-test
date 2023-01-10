// 追加するフォームのコンポーネント
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
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
