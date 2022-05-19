import React,{useState} from 'react';
import { Modal,Button,Form } from 'react-bootstrap';
import { db } from '../../fire';
import { doc,setDoc } from "firebase/firestore";
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';
import { useDispatch } from 'react-redux';

export const EditTodoModal = ({setCheck,EidtTodo}) => {
    const [show, setShow] = useState(true);
    const[task,SetTask]=useState(EidtTodo.todo);  
    const handleClose = () => {
      setShow(false);
      setCheck(false);
    };

    const dispatch=useDispatch();
    const ChangeTasksInTodo=async()=>{
      console.log("id of doc for update the todo task from Edit modal",EidtTodo);

      await setDoc(doc(db, "todos", EidtTodo.id), {
        Done:false,
        backlog:EidtTodo.backlog,
        inprogress:EidtTodo.inprogress,
        time:EidtTodo.time,
        todo:task,
        day:EidtTodo.day,
        timeTaken:0,
      });
      dispatch(TodoGetDataCreater());
    }

    return (
    <div>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={task}
                onChange={(e)=>SetTask(e.target.value)}
                maxlength="20"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {
            handleClose()
            ChangeTasksInTodo()
            }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
