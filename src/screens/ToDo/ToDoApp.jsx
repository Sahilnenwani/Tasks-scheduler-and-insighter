import React, { useState, useEffect } from 'react'
import "./Todo.scss";
import ToDosList from './ToDosList';
import ToDoForm from './ToDoForm';
import ToDoSingle from './ToDoSingle';
import { EditTodoModal } from './../../components/Modals/EditTodoModal';
import { DropdownButton,Dropdown,Button, Collapse, Card } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";


const ToDoApp = () => {

  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [openInner, setOpenInner] = useState(false);

  return (
    <>

      <div className='display-todos'>
        <div className='Backlog-dropdown'>
          {/* <DropdownButton id="dropdown-item-button" title="Backlog">
            {/* <Dropdown.ItemText>Backlog</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item> 
          </DropdownButton> */}

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
                Week <IoMdArrowDropdown />
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Button
                    onClick={() => setOpenInner(!openInner)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openInner}
                  >
                    Day<IoMdArrowDropdown />
                  </Button>
                  <Collapse in={openInner}>
                    <div className='card-data'>
                      <Card body>
                        ToDo data
                        <DropdownButton id="dropdown-item-button" title="...">
                          {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
                          <Dropdown.Item as="button">Edit</Dropdown.Item>
                          <Dropdown.Item as="button">InProgress</Dropdown.Item>
                          <Dropdown.Item as="button">Mark as done</Dropdown.Item>
                          <Dropdown.Item as="button">Delete</Dropdown.Item>
                        </DropdownButton>
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </Collapse>
              {/* <DropdownButton id="dropdown-item-button" title="Week" className="week-button">
            <DropdownButton id="dropdown-item-button" title="Day">
            </DropdownButton>
            </DropdownButton> */}
            </div>
            <div className='plus-button'><button><AiOutlinePlus /></button></div>
            {/* <ToDoForm />
          <ToDosList setCheck={setCheck} /> */}
          </div>
        </div>
        {check ? <EditTodoModal setCheck={setCheck} /> : " "}
      </div>


    </>
  )
}

export default ToDoApp;