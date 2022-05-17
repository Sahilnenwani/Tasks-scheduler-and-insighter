import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteCreater } from '../../Redux/Acrtions/DeleteTodoAction';
import { useDispatch } from 'react-redux';
import { DropdownButton, Dropdown, Card } from 'react-bootstrap';
import { db } from '../../fire';
import { doc, deleteDoc,setDoc } from "firebase/firestore";
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';
import { EditTodoModal } from '../../components/Modals/EditTodoModal';

import "./Todo.scss";


// import { useDispatch } from 'react-redux';

// import { EditTodoModal } from '../../components/Modals/EditTodoModal';



const ToDoSingle = ({ todo}) => {
  // const [check,setCheck]=useState(false);
  const [check, setCheck] = useState(false);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();
  

  const setCheckHandler = (value) => {
    setCheck(value)
  }

  const setTodoAsDone=async(todo)=>{
    console.log("id of doc for update the todo as Done",todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done:true,
      inprogress:false,
      time:todo.time,
      todo:todo.todo,
    });
    dispatch(TodoGetDataCreater());
  }




  const setMakeInporgress=async(todo)=>{
    console.log("id of doc for update the Inprogress",todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done:todo.Done,
      inprogress:false,
      time:todo.time,
      todo:todo.todo,
    });
    dispatch(TodoGetDataCreater());
    // const todoRef= setDoc(doc(db,"todos",id));
    // setDoc(todoRef, {inprogress:true});
  }


  const RemoveTodo = async(id) => {    
    await deleteDoc(doc(db, "todos", id));

    let newTodosList = todoList?.filter(todo => {
      return todo.id !== id;
    })
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
          <DropdownButton id="dropdown-item-button" >
            <Dropdown.Item as="button" onClick={() => setCheck(true)}>Edit</Dropdown.Item>
            {todo.inprogress==false?"":<Dropdown.Item as="button" onClick={()=> setMakeInporgress(todo)}>{todo.inprogress==false?"Completed":"Inprogress"}</Dropdown.Item>}
            
            {todo.Done==true?"":
            <Dropdown.Item as="button" onClick={()=> setTodoAsDone(todo)} >{todo.Done==true?"Marked Done":"Mark as done"}  </Dropdown.Item>
            }
            <Dropdown.Item as="button" onClick={()=> RemoveTodo(todo.id)}>Delete</Dropdown.Item>
          </DropdownButton>
        </div>
        </div>
      </Card>

        {check ? <EditTodoModal setCheck={setCheckHandler} EidtTodo={todo} /> : " "}
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