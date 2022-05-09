import React,{useState,useEffect} from 'react'
import "./Todo.Scss";
import ToDosList from './ToDosList';
import ToDoForm from './ToDoForm';
import ToDoSingle from './ToDoSingle';
import { EditTodoModal } from './../../components/Modals/EditTodoModal';




const ToDoApp = () => {
  const [toDoData,setToDoData]=useState(
    [
      
    ]
  );
  const [check, setCheck] = useState(false);
  
 

    const addTodoHandler=(todo)=>{
      // console.log("Task from todoapp",todo);
      let today = new Date().toLocaleDateString()
      // console.log(today)
      setToDoData([...toDoData,{id:toDoData.length+1,task:todo,time:today}]);
      // console.log(toDoData);
    }

    const RemoveTodo=(id)=>{
      console.log(id);
      let newTodosList=toDoData.filter(todo=>{
        return todo.id !== id;
      })
      setToDoData(newTodosList);

    }

  return (
    <> 
    { check? <EditTodoModal/>: 
    <div>
      <ToDoForm addTodoHandler={addTodoHandler}/>
      <ToDosList todoList={toDoData} RemoveThisTodo={RemoveTodo} setCheck={setCheck}/>
      </div>
    }
    
    </>
  )
}

export default ToDoApp;