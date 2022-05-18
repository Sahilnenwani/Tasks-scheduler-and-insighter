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
import { async } from '@firebase/util';


// import { useDispatch } from 'react-redux';

// import { EditTodoModal } from '../../components/Modals/EditTodoModal';



const ToDoSingle = ({ todo}) => {
  // const [check,setCheck]=useState(false);
  const [check, setCheck] = useState(false);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    let interval=null;
    if (timerOn) {
     interval= setInterval(()=>{
      setTime((prevTime)=>prevTime+10);
     },1000)
    }
    else if(!timerOn){
      clearInterval(interval);
    }

    return ()=> clearInterval(interval)
  },[timerOn])


  const setCheckHandler = (value) => {
    setCheck(value)
  }

  const setTodoAsDone=async(todo)=>{
    console.log("id of doc for update the todo as Done",todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done:true,
      backlog:false,
      inprogress:false,
      time:todo.time,
      todo:todo.todo,
      day:todo.day
    });
    dispatch(TodoGetDataCreater());
  }
  const setMakeBacklog=async()=>{

    await setDoc(doc(db, "todos", todo.id), {
      Done:false,
      backlog:true,
      inprogress:false,
      time:todo.time,
      todo:todo.todo,
      day:todo.day
    });
    dispatch(TodoGetDataCreater());
  }



  const setMakeInporgress=async(todo)=>{
    console.log("id of doc for update the Inprogress",todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done:false,
      backlog:false,
      inprogress:true,
      time:todo.time,
      todo:todo.todo,
      day:todo.day
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
      
      <Card className='card-of-todo-single' body style={{width:"300px", height:"70px", marginBottom:"8px"}}>
        <div className='card-data-todo'>
        <div className='task-time-style'>
          <div>{todo.todo}</div>
          <div>{todo.time}</div>
        </div>
        <div className='points-icon-style'>
          <div>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>
          
          <DropdownButton id="dropdown-item-button" >
            {todo.Done==true?"":<Dropdown.Item as="button" onClick={() => setCheck(true)}>Edit</Dropdown.Item>}
             {todo.Done==true?"":todo.backlog===true?<Dropdown.Item as="button" onClick={()=> setMakeInporgress(todo)}>
              {/* {todo.inprogress==false?"Completed":"Inprogress"} */}
              Inprogress
            </Dropdown.Item>:<Dropdown.Item as="button" onClick={()=> setMakeBacklog(todo)}>
              drop in backlog
            </Dropdown.Item>}
            
            {todo.backlog==true?"":todo.Done==true?"":
            <Dropdown.Item as="button" onClick={()=> setTodoAsDone(todo)} >Mark as done</Dropdown.Item>
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