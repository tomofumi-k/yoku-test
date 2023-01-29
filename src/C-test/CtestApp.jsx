import React, { useState } from "react";
import "./c-test.scss";

function CtestApp() {
  // 元となる配列
  // filter,mapで分割するよりコードも短くて分かりやすいから変更
  const [fruitsListA, setFruitsListA] = useState([
    { id: 1, name: "Apple", checked: false },
    { id: 2, name: "grape", checked: false },
    { id: 3, name: "Strawberry", checked: false },
    { id: 4, name: "Cherry", checked: false },
    { id: 5, name: "Plum", checked: false },
  ]);

  const [fruitsListB, setFruitsListB] = useState([
    { id: 6, name: "Watermelon", checked: false },
    { id: 7, name: "Banana", checked: false },
    { id: 8, name: "Peach", checked: false },
  ]);

  // ---------------------------------------------------------------------------------------------

  const someClickFunctionA = () => {
    // fruitsListAにfilterでtrueだけ取得。checkの入ってるものだけfruitsという変数に格納する
    const checkedFruits = fruitsListA.filter((fruits) => fruits.checked === true);

    // fruitsListB の末に checkedFruits を追加する
    setFruitsListB([...fruitsListB, ...checkedFruits]);

    // fruitsListA にfilterで!== でtrueの付いてるものをフィルタリングする
    setFruitsListA(fruitsListA.filter((fruits) => fruits.checked !== true));
  };

  const someClickFunctionB = () => {
    const checkedFruits = fruitsListB.filter((fruits) => fruits.checked === true);
    setFruitsListA([...fruitsListA, ...checkedFruits]);
    setFruitsListB(fruitsListB.filter((fruits) => fruits.checked !== true));
  };

  // ---------------------------------------------------------------------------------------------

  function toggleCheckbox(id, setFruitsList) {
    setFruitsList((prevState) => prevState.map((fruits) => (fruits.id === id ? { ...fruits, checked: !fruits.checked } : fruits)));
  }

  return (
    <div className="c-section">
      <div className="c__container">
        <ul className="c__list">
          {fruitsListA.map((fruits, index) => (
            <label className="c__list--text" key={index}>
              <input type="checkbox" checked={fruits.checked} onChange={() => toggleCheckbox(fruits.id, setFruitsListA)} readOnly />
              {fruits.name}
            </label>
          ))}
        </ul>
        <button className="c__list--button" onClick={someClickFunctionA}>
          左へ移動
        </button>
      </div>
      <div className="c__container">
        <ul className="c__list">
          {fruitsListB.map((fruits, index) => (
            <label className="c__list--text" key={index}>
              <input type="checkbox" checked={fruits.checked} onChange={() => toggleCheckbox(fruits.id, setFruitsListB)} readOnly />
              {fruits.name}
            </label>
          ))}
        </ul>
        <button className="c__list--button" onClick={someClickFunctionB}>
          右へ移動
        </button>
      </div>
    </div>
  );
}

export default CtestApp;
