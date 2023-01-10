// 追加するフォームのコンポーネント
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// app.jsの [taskList, setTaskList] を受け取る
export const InputForm = ({ taskList, setTaskList }) => {
  // taskList の中身を inputText に渡していく
  const [inputText, setInputText] = useState("");

  // e.preventDefault は再レンダリングを阻止するために使用
  const handleSubmit = (e) => {
    e.preventDefault();

    // 空白の場合,リターンする
    if (inputText === "") return;
    setTaskList([
      // ...がないと追加ではなく更新される。
      // ...は以前の状態に追加する
      ...taskList,
      {
        // taskList.length でもできるが、アンチパターンになるため uuid を使用
        id: uuidv4(),
        text: inputText,
      },
    ]);
    // 入力した文字を削除
    setInputText("");
  };

  // フォームに入力された文字を取得してる
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form className="bsection__input--form" onSubmit={handleSubmit}>
        {/* valueを inputText にすることで setInputText(""); のからの状態になる */}
        <input className="bsection__input" type="text" onChange={handleChange} value={inputText} />
        <button className="bsection__button">追加</button>
      </form>
    </div>
  );
};
