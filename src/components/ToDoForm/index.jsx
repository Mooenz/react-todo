import React from 'react';

// Styles
import './ToDoForm.css';

function ToDoForm({ onSubmit, newTodoValue, onChange, onCancel }) {
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
