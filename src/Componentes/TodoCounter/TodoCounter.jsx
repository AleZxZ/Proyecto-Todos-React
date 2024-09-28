import { useContext } from 'react';
import '../TodoCounter/TodoCounter.css'
import { TodoContext } from '../../CustomHooks/TodoContext';


function TodoCounter(/*{tareasTotal,tareasCompletadas}*/) {
  const {
    todosCompleted: tareasCompletadas,
    totalTodos:tareasTotal
  }=useContext(TodoContext);
  if(tareasCompletadas !== tareasTotal){
    return (
      <h1 className="TodoCounter">
        Has completado <span>{tareasCompletadas} </span> de <span>{tareasTotal}</span> TODOS
      </h1>
    );
  }else{
    return (
      <h1 className="TodoCounter">
        <span>FELICIDADES COMPLETASTE TODAS LAS TAREAS!!!</span>
      </h1>
    );
  }
    
}
  
export { TodoCounter };