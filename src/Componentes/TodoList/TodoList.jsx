import '../TodoList/TodoList.css'

function TodoList(props){
    if(props.tareasTotal>0){
        return(
        <ul className="TodoList">{props.children}</ul>
        );
    }
    else{
        return(
          <div className='message-box'>
            <h1>No tiene ninguna tarea en LocalStorage , ingresa alguna</h1>
          </div>
        )
      }
}
export{TodoList};