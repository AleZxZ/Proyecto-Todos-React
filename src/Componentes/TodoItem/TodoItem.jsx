import '../TodoItem/TodoItem.css'
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

function TodoItem(props) {
    
      return (
        <li className="TodoItem">
          <span 
            onClick={props.onCompleted} 
            className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          ><FaCheck /></span>
          <p 
            className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}
          >{props.text}</p>
          <span 
            onClick={props.onDelete} 
            className="Icon Icon-delete"
          ><ImCross  style={{ width: '100%' }}/></span>
         
        </li>
      );
    
  }
  
  export { TodoItem };