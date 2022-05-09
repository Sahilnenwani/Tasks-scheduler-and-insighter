import React,{useState} from 'react';
import ToDoSingle from './ToDoSingle';
// import data from "./data.json"


const ToDosList = ({todoList,RemoveThisTodo,setCheck}) => {
    // const [toDoList,setToDoList]=useState(data);
    return (
    <div>
        {todoList?.map((todo)=>{
            return(
                <ToDoSingle todo={todo} RemoveThisTodo={RemoveThisTodo} setCheck={setCheck}/>
            )
        })}
    </div>
  )
}

export default ToDosList;