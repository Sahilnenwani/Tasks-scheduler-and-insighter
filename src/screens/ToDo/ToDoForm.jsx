import React,{useState,useEffect} from 'react';
import { useDispatch } from "react-redux"; 
import { TodoDataCreater } from '../../Redux/Acrtions/TodoDataAction';
import { useSelector } from 'react-redux';

const ToDoForm = ({addTodoHandler}) => {
  const todoList=useSelector(state=> state.TodoSReducer);  
  const[task,SetTask]=useState();   
    const dispatch =useDispatch();
    console.log(todoList);
    // useEffect(() => {
    //     dispatch(TodoDataCreater(task))
    // }, [task])
    
    // const addTodoHandler=(todo)=>{
    //   let today = new Date().toLocaleDateString()
    //   setToDoData([...toDoData,{id:toDoData.length+1,task:todo,time:today}]);
    // }
    
    const add=(e)=>{
        e.preventDefault();
        if (task==="") {
            alert("All the feilds are mandatory")
            return
        }
        console.log("task",task);
        let today = new Date().toLocaleDateString()
        const data={
          id:todoList.length+1,
          task:task,
          time:today
        }
        dispatch(TodoDataCreater(data))
        SetTask(" ");
    }

    
    return (
    <div>
         <form onSubmit={add}>
        <input value={task} type="text" onChange={(e)=>SetTask(e.target.value)} placeholder="Enter task..." />
        <button type="submit" >Add</button>
      </form>
    </div>
  )
}

export default ToDoForm;