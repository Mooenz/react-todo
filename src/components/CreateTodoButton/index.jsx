import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      Add Task
    </button>
  );
}

export { CreateTodoButton };
