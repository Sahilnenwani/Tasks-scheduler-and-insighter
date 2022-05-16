import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteCreater } from '../../Redux/Acrtions/DeleteTodoAction';
import { useDispatch } from 'react-redux';
import { DropdownButton, Dropdown, Card } from 'react-bootstrap';
import "./Todo.scss";
// import { useDispatch } from 'react-redux';

// import { EditTodoModal } from '../../components/Modals/EditTodoModal';



const ToDoSingle = ({ todo, setCheck }) => {
  // const [check,setCheck]=useState(false);
  const todoList = useSelector(state => state.TodoSReducer);
  const dispatch = useDispatch();
  

  const RemoveTodo = (id) => {
    let newTodosList = todoList.filter(todo => {
      return todo.id !== id;
    })
    console.log("Remove todo function")
    dispatch(TodoDeleteCreater(newTodosList));
  }
  



  return (
    <div key={todo.id} >
      
      
      <Card body style={{width:"300px", height:"70px", marginBottom:"8px"}}>
        <div className='card-data-todo'>
        <div className='task-time-style'>
          <div>{todo.todo}</div>
          <div>{todo.time}</div>
        </div>
        <div className='points-icon-style'>
          <DropdownButton id="dropdown-item-button" title="...">
            {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
            <Dropdown.Item as="button" onClick={() => setCheck(true)}>Edit</Dropdown.Item>
            <Dropdown.Item as="button">InProgress</Dropdown.Item>
            <Dropdown.Item as="button" >Mark as done</Dropdown.Item>
            <Dropdown.Item as="button" onClick={()=> RemoveTodo(todo.id)}>Delete</Dropdown.Item>
          </DropdownButton>
        </div>
        </div>
      </Card>


      {/* <div style={{display:"flex"}}>
        <button type='submit' onClick={()=> RemoveTodo(todo.id)}>delete
        </button>||
        <button type='submit' onClick={()=>setCheck(true)}  >Edit
        </button>
        </div> */}
    </div>
  )
}

export default ToDoSingle;