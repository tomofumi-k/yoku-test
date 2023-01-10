import { useState } from "react";
import { InputForm } from "./B-test/InputForm";
import { TodoList } from "./B-test/TodoList";
import "./B-test/b__section.scss";

function App() {
  // フォームに入力された文字を監視して保管する箱
  // 状態が変化するものはuseStateで宣言する
  // taskListにはuseState(この中身に入ってくるもの、[]なら配列)
  // setTaskListは状態を変更する関数
  const [taskList, setTaskList] = useState([
    { id: 1, text: "Apple" },
    { id: 2, text: "grape" },
    { id: 3, text: "Strawberry" },
  ]);

  return (
    // 二つのコンポーネントにusestateを渡してる
    <div className="bsection">
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
