import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='containerSearch'>
      <span className="material-icons icon">search</span>
      <input
        className="TodoSearch"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
