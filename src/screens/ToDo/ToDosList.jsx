import React,{useState,useEffect} from 'react';
import ToDoSingle from './ToDoSingle';
import { useDispatch } from 'react-redux';
// import data from "./data.json"
import { useSelector } from 'react-redux';
import { TodoDeleteCreater } from '../../Redux/Acrtions/DeleteTodoAction';
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';

const ToDosList = ({setCheck,FilterTodoList}) => {
  // const [FilterTodoList, setFilterTodoList] = useState([])
  
  const todoList=useSelector(state=> state.TodoSReducer)
  const dispatch=useDispatch();
  console.log("filtered data",FilterTodoList)
 
   
   
    const RemoveTodo=(id)=>{
        let newTodosList=todoList.filter(todo=>{
                return todo.id !== id;
              }) 
       console.log("Remove todo function")
       dispatch(TodoDeleteCreater(newTodosList));
    }
    return (
    <div>
        {FilterTodoList?.map((todo)=>{
            return(
                <ToDoSingle removeThisTodo={RemoveTodo} todo={todo} setCheck={setCheck}/>
            )
        })}
    </div>
  )
}

export default ToDosList;