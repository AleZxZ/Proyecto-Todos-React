import { createContext } from "react";
import { useLocalStorage } from "./LocalStorage";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext=createContext();

function TodoProvider({children}){
  
  const [todos,saveTodosLocalStorage]=useLocalStorage('data',[]);//utilizando es CUSTOM HOOKS 
  const [openModal,setOpenModal]=useState(false);
  /*
    [todos,saveTodosLocalStorage]=return [item,saveItem] 
    el todos = item y el saveTodosLocalStorage=saveItem
  */
  const todosCompleted= todos.filter(todo=>todo.completed).length;
  const totalTodos=todos.length;
  const [searchValue,setSearchValue]=useState('');


  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id:uuidv4(),
      text,
      completed: false,
    });
    saveTodosLocalStorage(newTodos);
  };
  
  const searhTodos=todos.filter(todo=>{
    const datosMinuscula=todo.text.toLowerCase();
    const busquedaMinuscula=searchValue.toLowerCase();

   return datosMinuscula.includes(busquedaMinuscula);
  });

  const completeTodo=(id)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      todo=>todo.id===id
    );
    newTodos[todoIndex].completed=true;
    saveTodosLocalStorage(newTodos);
  };
  const deleteTodo=(id)=>{
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex(
      todo=>todo.id===id
    );
    newTodos.splice(todoIndex,1)
    saveTodosLocalStorage(newTodos);
  };
  

    return(
        <TodoContext.Provider value={{
            todosCompleted,
            searchValue,
            setSearchValue,
            totalTodos,
            searhTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};