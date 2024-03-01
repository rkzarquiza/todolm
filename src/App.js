import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import AddTodo from './Components/Addtodo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
    
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteAll = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const handleDoneAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, isCompleted: true })));
  };

  const handleSelectAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, isCompleted: true })));
  };

  return (
    <div className="card-container">
      <h1>LexMeet To-Do List Application</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onCheck={handleCheck}
        onDeleteAll={handleDeleteAll}
        onDoneAll={handleDoneAll}
        onSelectAll={handleSelectAll}
      />

    </div>
  );
};

export default App;