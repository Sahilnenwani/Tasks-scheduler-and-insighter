import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteCreater } from '../../Redux/Acrtions/DeleteTodoAction';
import { useDispatch } from 'react-redux';
import { DropdownButton, Dropdown, Card } from 'react-bootstrap';
import { db } from '../../fire';
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';
import { EditTodoModal } from '../../components/Modals/EditTodoModal';
import { BsFillPauseFill,BsSkipStartFill } from "react-icons/bs";


import "./Todo.scss";



// import { useDispatch } from 'react-redux';

// import { EditTodoModal } from '../../components/Modals/EditTodoModal';




const ToDoSingle = ({ todo,checkTimer,setCheckTimer }) => {
  // const [check,setCheck]=useState(false);
  const [check, setCheck] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const todoList = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000)
    }
    else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [timerOn])

//On page Refresh
// useEffect(() => {
//   window.onbeforeunload = async function() {
//     await setDoc(doc(db, "todos", todo.id), {
//       Done: todo.Done,
//       backlog: todo.backlog,
//       inprogress: todo.inprogress,
//       time: todo.time,
//       todo: todo.todo,
//       day: todo.day,
//       timeTaken:timer,
//     });
//     dispatch(TodoGetDataCreater());
//   };
//   return () => {
//       window.onbeforeunload = null;
//   };
// }, []);


  
  const setCheckHandler = (value) => {
    setCheck(value)
  }
  const setCheckTheTimer=()=>{
    setCheckTimer(!checkTimer);
  }
  const setTodoAsDone = async (todo) => {
    console.log("id of doc for update the todo as Done", todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done: true,
      backlog: false,
      inprogress: false,
      time: todo.time,
      todo: todo.todo,
      day: todo.day,
      timeTaken:timer,
    });
    dispatch(TodoGetDataCreater());
    setTimerOn(false);
  }
  const setMakeBacklog = async () => {

    await setDoc(doc(db, "todos", todo.id), {
      Done: false,
      backlog: true,
      inprogress: false,
      time: todo.time,
      todo: todo.todo,
      day: todo.day,
      timeTaken:0,
    });
    dispatch(TodoGetDataCreater());
  }



  const setMakeInporgress = async (todo) => {
    console.log("id of doc for update the Inprogress", todo.id);

    await setDoc(doc(db, "todos", todo.id), {
      Done: false,
      backlog: false,
      inprogress: true,
      time: todo.time,
      todo: todo.todo,
      day: todo.day,
      timeTaken:0,
    });
    dispatch(TodoGetDataCreater());
    // const todoRef= setDoc(doc(db,"todos",id));
    // setDoc(todoRef, {inprogress:true});
  }


  const RemoveTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));

    let newTodosList = todoList?.filter(todo => {
      return todo.id !== id;
    })
    dispatch(TodoDeleteCreater(newTodosList));
  }




  return (
    <div key={todo.id} >

      <Card className='card-of-todo-single' body style={{ width: "300px", height: "70px", marginBottom: "8px" }}>
        <div className='card-data-todo'>
          <div className='task-time-style'>
            <div>{todo.todo}</div>
            <div>{todo.time}</div>
          </div>
          <div className='points-icon-style'>

            {todo.inprogress === true ? <div className='Timer-on-card'>
             {checkTimer===false && timerOn===false  || checkTimer===true && timerOn===true ? 
             <div className='start-pause-icon'>
                {!timerOn &&  (
                  <button onClick={() => {setTimerOn(true)
                  setCheckTheTimer()}} className="start-icon"><BsSkipStartFill/></button>
                )}
                {timerOn && <button onClick={() => {setTimerOn(false)
                setCheckTheTimer()
                }} className="pause-icon"><BsFillPauseFill/></button>}
              </div>
              :""}
              <div style={{marginTop:"2px"}}>
                <span>{("0" + Math.floor((timer / 3600) % 12)).slice(-2)}:</span>
                <span>{("0" + Math.floor((timer / 60) % 60)).slice(-2)}:</span>
                <span>{("0" + ((timer) % 60)).slice(-2)}</span>
              </div>
            </div> : ""}





            {todo.Done === true ? <div className='Timer-on-card'>
              <div style={{marginTop:"2px"}}>
                <span>{("0" + Math.floor((parseInt(todo?.timeTaken)/ 3600) % 12)).slice(-2)}:</span>
                <span>{("0" + Math.floor((parseInt(todo?.timeTaken) / 60) % 60)).slice(-2)}:</span>
                <span>{("0" + ((parseInt(todo?.timeTaken)) % 60)).slice(-2)}</span>
              </div>
            </div> : ""}





            <DropdownButton id="dropdown-item-button" style={{marginTop:"-2px",boxShadow:"none !important"}} className='button-style-of-dropdown-todos'>
              {todo.Done == true ? "" : <Dropdown.Item as="button" onClick={() => setCheck(true)}>Edit</Dropdown.Item>}
              {todo.backlog === true || todo.Done == true ? <Dropdown.Item as="button" onClick={() => setMakeInporgress(todo)}>
                {/* {todo.inprogress==false?"Completed":"Inprogress"} */}
                Inprogress
              </Dropdown.Item> : <Dropdown.Item as="button" onClick={() => setMakeBacklog(todo)}>
                drop in backlog
              </Dropdown.Item>}

              {todo.backlog == true ? "" : todo.Done == true ? "" :
                <Dropdown.Item as="button" onClick={() => setTodoAsDone(todo)} disabled={timer < 200?true:""} >Mark as done</Dropdown.Item>
              }
              <Dropdown.Item as="button" onClick={() => RemoveTodo(todo.id)}>Delete</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </Card>

      {check ? <EditTodoModal setCheck={setCheckHandler} EidtTodo={todo} /> : " "}
      {/* <div style={{display:"flex"}}>
        <button type='submit' onClick={()=> RemoveTodo(todo.id)}>delete
        </button>||
        <button type='submit' onClick={()=>setCheck(true)}  >Edit
        </button>
        </div> */}
    </div>
  )
}

export default ToDoSingle;