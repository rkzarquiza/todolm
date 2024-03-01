import React from 'react';
import './DeleteConfirmationModal.css';

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="delete-confirmation-modal">
      <p>Are you sure you want to delete this task?</p>
      <button onClick={onCancel}>No</button>
      <button onClick={onConfirm}>Yes</button>
    </div>
  );
};

export default DeleteConfirmationModal;
