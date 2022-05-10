import React, { useState, useEffect } from 'react';
import "./Todo.scss";
import ToDosList from './ToDosList';
// import ToDoForm from './ToDoForm';
// import ToDoSingle from './ToDoSingle';
import { EditTodoModal } from './../../components/Modals/EditTodoModal';
import {Button, Collapse} from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTodoModal } from './../../components/Modals/AddTodoModal';


const ToDoApp = () => {

  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [openInner, setOpenInner] = useState(false);
  const [checkAddButton,setCheckAddButton]=useState(false);
 
  return (
    <>

      <div className='display-todos'>
        <div className='Backlog-dropdown'>
          <button><IoMdArrowDropdown></IoMdArrowDropdown> <span>Backlog</span> </button>
        </div>
        <div className='todos-style'>
          <div className='todos-input'>

            <div className='collapes-week'>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
               <IoMdArrowDropdown /> Week()
              </Button>
              <Collapse in={open}>
                <div className="day-dis">
                  <Button
                    onClick={() => setOpenInner(!openInner)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openInner}
                  >
                   <IoMdArrowDropdown /> Day()
                  </Button>
                  <Collapse in={openInner} >
                    <div className='card-data'>
                      <ToDosList setCheck={setCheck} />
                    </div>
                  </Collapse>
                </div>
              </Collapse>
              {/* <DropdownButton id="dropdown-item-button" title="Week" className="week-button">
            <DropdownButton id="dropdown-item-button" title="Day">
            </DropdownButton>
            </DropdownButton> */}
            </div>
            <div className='plus-button' onClick={()=>setCheckAddButton(true)}><button><AiOutlinePlus /></button>
           
            </div>
            {/* <ToDoForm />
           */}
          </div>
        </div>
        {check ? <EditTodoModal setCheck={setCheck} /> : " "}
        {checkAddButton?<AddTodoModal setCheckAddButton={setCheckAddButton}/>:" "}
      </div>


    </>
  )
}

export default ToDoApp;