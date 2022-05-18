import React,{useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux"; 
// import { TodoDataCreater } from '../../Redux/Acrtions/TodoDataAction';
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';
import { db } from "../../fire";
import {
    getFirestore,
     query,
   collection,
   where,
    addDoc,
} from "firebase/firestore";




export const AddTodoModal = ({setCheckAddButton}) => {  
    const [show, setShow] = useState(true);
    const[task,SetTask]=useState();   
    const handleClose = () => {
        setCheckAddButton(false);
        setShow(false);
    };
    const todoList = useSelector(state => state.TodoReducer.todos); 
      const dispatch =useDispatch();
      // console.log("add modal values of todoList",todoList);

      const add=async ()=>{
       
        // console.log("add button")
        if (task==="") {
            alert("All the feilds are mandatory")
            return;
        }
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        console.log("task",task);
        let today = new Date().toLocaleDateString()
        var d = new Date(today);
        let dayName = days[d.getDay()];
        console.log("day from add componet",dayName);

        await addDoc(collection(db, "todos"), {
          Done:false,
          backlog:true,
          inprogress:false,
          time:today,
          todo:task,
          day:dayName
        });
        // dispatch(TodoDataCreater(data));
        dispatch(TodoGetDataCreater());
        SetTask(" ");
    }

    return (
    <div>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="Enter task..."
                autoFocus
                onChange={(e)=>SetTask(e.target.value)}
                maxlength="20"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              handleClose();
              add();
              }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
