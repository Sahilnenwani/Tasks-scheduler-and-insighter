import React from 'react';
import ToDoSingle from './ToDoSingle';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';


const ToDosList = ({setCheck,FilterTodoList}) => {
 
  // const todoList=useSelector(state=> state.TodoSReducer)
  // // const dispatch=useDispatch();
  // console.log("filtered data",FilterTodoList)
 
   
   
    
    return (
    <div>
        {FilterTodoList?.map((todo)=>{
            return(
                <ToDoSingle  todo={todo} setCheck={setCheck}/>
            )
        })}
    </div>
  )
}

export default ToDosList;