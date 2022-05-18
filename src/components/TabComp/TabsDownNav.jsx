import React, {useState,useEffect} from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import "./TabsDown.scss"
import { useSelector,useDispatch } from 'react-redux';
import { clickedTabsActionCreater } from '../../Redux/Acrtions/ClickedTabsAction ';


export const TabsDownNav = () => {
  const [key, setKey] = useState('Backlog');
  const [totalDoneTodos,setTotalDoneTodos]=useState(0);
  const [totalInProgressTodos,setTotalInProgressTodos]=useState(0);
  const [totalBackLogTodos,setTotalBackLogTodos]=useState(0);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const dispatch=useDispatch();
  console.log("cheking todo's list in Tabs Component",todoList);
 
  const checkBacklogTodo=()=>{
    if(todoList?.length > 0 ){
      const TodosWithBackLogTag= todoList?.filter((todo)=>{
        return todo.backlog === true;
       })
       setTotalBackLogTodos(TodosWithBackLogTag?.length);
  }
  }
  const checkDoneTodo=()=>{
    if(todoList?.length > 0 ){
   const TodosWithDoneTag= todoList?.filter((todo)=>{
     return todo.Done!=false;
    })
    setTotalDoneTodos(TodosWithDoneTag?.length);
  }
  }
  const checkInprogressTodo=()=>{
   if(todoList?.length > 0 ){
    const TodosWhichInprogress= todoList?.filter((todo)=>{
      return todo.inprogress==true;
     })
     setTotalInProgressTodos(TodosWhichInprogress?.length);
    }
   }
 
useEffect(()=>{
  checkDoneTodo();
  checkInprogressTodo();
  checkBacklogTodo();
},[todoList])

  useEffect(() => {
    switch (key) {
        case "Backlog":
            dispatch(clickedTabsActionCreater(0));
            break;
        case "Progress":
                dispatch(clickedTabsActionCreater(1));            
               
                break;
        case "Done":
          dispatch(clickedTabsActionCreater(2));         
                  
             break;
        default:
          dispatch(clickedTabsActionCreater(0));     
            break;
    }
            
}, [key])

  return (
    <div className="tabs-design">
    <Tabs
       id="controlled-tab-example"
       activeKey={key}
       onSelect={(k) => {
         setKey(k)
        }}
      className="mb-3 tabs-overall-design"
    >
      <Tab eventKey="Backlog" title={`Backlog(${totalBackLogTodos})`}>
      </Tab>
      <Tab eventKey="Progress" title={`Progress(${totalInProgressTodos})`}>
      </Tab>
      <Tab eventKey="Done" title={`Done(${totalDoneTodos})`}>
      </Tab>
    </Tabs>
    </div>
  );
}
