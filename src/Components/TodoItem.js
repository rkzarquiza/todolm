import React, { useState } from 'react';
import { BsPencil, BsTrash, BsCheck } from 'react-icons/bs';
import '../TodoItem.css';

const TodoItem = ({ todo, onDelete, onEdit, onCheck }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setEditing(false);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onCheck(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="icon-btn" onClick={handleSave}>
            <BsPencil />
          </button>
        </>
      ) : (
        <>

          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div className="buttons-container">
            <button className="icon-btn" onClick={handleEdit}>
              <BsPencil />
            </button>
            <button className="icon-btn delete-btn" onClick={() => onDelete(todo.id)}>
              <BsTrash />
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
