import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState();
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  function addItem() {
    const copyList = [...list];
    copyList.push(text);
    setList(copyList);
    setText("");
  }

  function updateItem() {
    const copyList = [...list];
    copyList[currentIndex] = text;
    setList(copyList);
    setEditMode(false);
    setText("");
  }

  function updateInpState(e) {
    setText(e.target.value);
  }

  function deleteTxt(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editTxt(index) {
    const value = list[index];
    setText(value);
    setEditMode(true);
    setCurrentIndex(index);
  }

  return (
    <div className="App">
      <h1>TodoList</h1>

      <input
        onChange={updateInpState}
        placeholder="Enter Any Item"
        value={text}
      />
      {!editMode ? (
        <button onClick={addItem}>Add</button>
      ) : (
        <button onClick={updateItem}>Update</button>
      )}
      <ul>
        {list.map(function (item, index) {
          return (
            <li>
              {item}
              <button onClick={() => deleteTxt(index)}>delete</button>
              <button onClick={() => editTxt(index)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
