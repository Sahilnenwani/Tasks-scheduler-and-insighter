import React, {useState,useEffect} from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import "./TabsDown.scss"
import { useSelector,useDispatch } from 'react-redux';
import { clickedTabsActionCreater } from '../../Redux/Acrtions/ClickedTabsAction ';


export const TabsDownNav = () => {
  const [key, setKey] = useState('Backlog');
  const [totalDoneTodos,setTotalDoneTodos]=useState();
  const [totalInProgressTodos,setTotalInProgressTodos]=useState();
  const todoList = useSelector(state => state.TodoReducer.todos);
  const dispatch=useDispatch();

 

  const checkDoneTodo=()=>{
   
   const TodosWithDoneTag= todoList?.filter((todo)=>{
     return todo.Done!=false;
    })
    setTotalDoneTodos(TodosWithDoneTag?.length);
  }
  const checkInprogressTodo=()=>{
    const TodosWhichInprogress= todoList?.filter((todo)=>{
      return todo.inprogress==true;
     })
     setTotalInProgressTodos(TodosWhichInprogress?TodosWhichInprogress.length:0);
   }
 

  useEffect(() => {
    switch (key) {
        case "Backlog":
            dispatch(clickedTabsActionCreater(0))            
            break;
        case "Progress":
                dispatch(clickedTabsActionCreater(1))            
                checkInprogressTodo();
                break;
        case "Done":
          dispatch(clickedTabsActionCreater(2))         
          checkDoneTodo();          
             break;
        default:
          dispatch(clickedTabsActionCreater(0))            
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
      <Tab eventKey="Backlog" title="Backlog(6)">
      </Tab>
      <Tab eventKey="Progress" title={`Progress(${totalInProgressTodos})`}>
      </Tab>
      <Tab eventKey="Done" title={`Done(${totalDoneTodos})`}>
      </Tab>
    </Tabs>
    </div>
  );
}
