import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../../CustomHooks/TodoContext';
import TodoForm from '../TodoForm/TodoForm';

function ApIU(){
    const {
        totalTodos,
        searhTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        click
        }=useContext(TodoContext);
    return(
        <>
        <TodoCounter 
         // tareasCompletadas={todosCompleted}
         // tareasTotal={totalTodos}
        />
        <TodoSearch 
         // searchValue={searchValue}
          //setSearchValue={setSearchValue}
        />
        <TodoList tareasTotal={totalTodos}>
            {
            searhTodos.map(todo=>(
                <TodoItem 
                key={uuidv4()}
                text={todo.text}
                completed={todo.completed}
                onCompleted={()=>completeTodo(todo.id)}
                onDelete={()=>deleteTodo(todo.id)}
                
                />
            ))
            }
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {
            openModal &&(
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )
        }
     </>
    )
}

export default ApIU;