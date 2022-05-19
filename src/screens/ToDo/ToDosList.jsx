import React,{useState} from 'react';
import ToDoSingle from './ToDoSingle';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


const ToDosList = ({setCheck,FilterTodoList}) => {
  const [checkTimer, setCheckTimer] = useState(false);
 
  // const todoList=useSelector(state=> state.TodoSReducer)
  // // const dispatch=useDispatch();
  // console.log("filtered data",FilterTodoList)
 
   
   
    
    return (
    <div>
        {FilterTodoList?.map((todo)=>{
            return(
                <ToDoSingle checkTimer={checkTimer} setCheckTimer={setCheckTimer}  todo={todo} />
            )
        })}
    </div>
  )
}

export default ToDosList;