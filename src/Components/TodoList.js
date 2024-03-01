import React, { useState } from 'react';
import TodoItem from './TodoItem';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './TodoList.css';

const TodoList = ({ todos, onDelete, onEdit, onCheck, onDeleteAll, onDoneAll, onSelectAll }) => {
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(null);

  const handleDelete = (id) => {
    setDeleteTaskId(id);
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setDeleteTaskId(null);
  };

  const handleConfirmDelete = () => {
    onDelete(deleteTaskId);
    setShowDeleteConfirmation(true);
    setDeleteTaskId(null);
  };

  const handleDeleteAll = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmedDeleteAll = () => {
    onDeleteAll();
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => handleConfirmDelete(todo.id) }
          onEdit={onEdit}
          onCheck={onCheck}
        />
      ))}

      {todos.length > 0 && (
        <>
          <button onClick={onDoneAll}>Done All</button>
          {completedTodos.length > 0 && (
            <button onClick={handleDeleteAll}>Delete All Completed</button>
          )}
        </>
      )}

      {showDeleteConfirmation && (
        <DeleteConfirmationModal
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmedDeleteAll}
        />
      )}
    </div>
  );
};

export default TodoList;
