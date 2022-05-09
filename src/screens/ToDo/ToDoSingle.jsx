import React from 'react';
import { EditTodoModal } from '../../components/Modals/EditTodoModal';
const ToDoSingle = ({todo,RemoveThisTodo,setCheck}) => {
    // const removeThisTodo=(e)=>{
    //     e.preventDefault();
        
    // }

    return (
    <div key={todo.id} style={{display:"flex"}}>
        <div>{todo.task}</div>||
        <div>{todo.time}</div>||
        <div style={{display:"flex"}}>
        <button type='submit' onClick={()=>RemoveThisTodo(todo.id)}>delete
        </button>||
        <button type='submit' onClick={()=>setCheck(true)}  >Edit
        </button>
        </div>
    </div>
  )
}

export default ToDoSingle;