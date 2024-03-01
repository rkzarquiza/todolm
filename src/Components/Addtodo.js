import React, { useState } from 'react';
import "../Addtodo.css"

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div id="addDiv">
      <input
        id="taskName"
        type="text"
        value={text}
        placeholder='Enter Task Here'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} id="addBtn">Add</button>
      <br />
    </div>
  );
};

export default AddTodo;
