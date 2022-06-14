import React, {useContext} from 'react';

// Context
import { TodoContext } from '../context/TodoContext';

// Components
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { ToDoForm } from '../components/ToDoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';

// Styles
import './App.css';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="app">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <ToDoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
}

export { AppUI };
