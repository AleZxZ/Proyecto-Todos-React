import './App.css';
import { TodoCounter } from './Componentes/TodoCounter/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch/TodoSearch';
import { TodoList } from './Componentes/TodoList/TodoList';
import { TodoItem } from './Componentes/TodoItem/TodoItem';
import { CreateTodoButton } from './Componentes/CreateTodoButton/CreateTodoButton';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './CustomHooks/LocalStorage';//mi CUSTOM HOOK
import { Modal } from './Componentes/Modal/Modal';
import { TodoContext, TodoProvider } from './CustomHooks/TodoContext';
import ApIU from './Componentes/App/ApIU';
/*
const defaultTodos=[
  {id:uuidv4(),text:'Cortar cebolla',completed:true},
  {id:uuidv4(),text:'Tomar el Curso de Intro a React.js',completed:false},
  {id:uuidv4(),text:'Llorar con la Llorona',completed:false},
  {id:uuidv4(),text:'LALALALALA',completed:false},
];

localStorage.setItem('data',JSON.stringify(defaultTodos))*/

function App() {
 
  return (
    <TodoProvider>
      <div className='App'>
      <ApIU/>
      </div>
    </TodoProvider>
  );
}
export default App;
