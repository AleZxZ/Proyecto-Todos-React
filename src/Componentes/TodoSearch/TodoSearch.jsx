import '../TodoSearch/TodoSearch.css'
import { TodoContext } from '../../CustomHooks/TodoContext';
import { useContext } from 'react';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  }=useContext(TodoContext);
    return (
      <input className="TodoSearch" placeholder="Cortar cebolla" 
      value={searchValue}
        onChange={(event)=>
         setSearchValue(event.target.value)
        }
      />
    );
  }
  
export { TodoSearch };