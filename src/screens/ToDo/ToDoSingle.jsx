import React from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteCreater } from '../../Redux/Acrtions/DeleteTodoAction';
import { useDispatch } from 'react-redux';

// import { useDispatch } from 'react-redux';
import { EditTodoModal } from '../../components/Modals/EditTodoModal';
const ToDoSingle = ({todo,setCheck}) => {
  const todoList=useSelector(state=> state.TodoSReducer);
  const dispatch =useDispatch();

  const RemoveTodo=(id)=>{
    let newTodosList=todoList.filter(todo=>{
            return todo.id !== id;
          }) 
   console.log("Remove todo function")
   dispatch(TodoDeleteCreater(newTodosList));
}

  


    return (
    <div key={todo.id} style={{display:"flex"}}>
        <div>{todo.task}</div>||
        <div>{todo.time}</div>||
        <div style={{display:"flex"}}>
        <button type='submit' onClick={()=> RemoveTodo(todo.id)}>delete
        </button>||
        <button type='submit' onClick={()=>setCheck(true)}  >Edit
        </button>
        </div>
    </div>
  )
}

export default ToDoSingle;