import React,{useState} from 'react';
 
const ToDoForm = ({addTodoHandler}) => {
    const[task,SetTask]=useState();
    
    const add=(e)=>{
        e.preventDefault();
        if (task==="") {
            alert("All the feilds are mandatory")
            return
        }
        console.log("task",task);
        addTodoHandler(task)
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