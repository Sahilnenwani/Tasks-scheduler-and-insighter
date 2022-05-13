import React, { useState, useEffect } from 'react';
import "./Todo.scss";
import { EditTodoModal } from './../../components/Modals/EditTodoModal';
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AddTodoModal } from './../../components/Modals/AddTodoModal';
import TodosWeek from '../../components/WeekDaysDistribution/TodosWeek';
import { useDispatch } from 'react-redux';
import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';

const ToDoApp = () => {
  const [check, setCheck] = useState(false);
  const [checkAddButton, setCheckAddButton] = useState(false);
  const setCheckHandler = (value) => {
    setCheck(value)
  }
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("initail data getter is loaded")
    dispatch(TodoGetDataCreater());
  }, [])

  return (
    <>
      <div className='display-todos' >
        <div className='Backlog-dropdown'>
          <button><IoMdArrowDropdown></IoMdArrowDropdown> <span>Backlog</span> </button>
        </div>
        <div className='todos-style-data'>
        
          <div className='todos-input'>
            <TodosWeek setCheck={setCheckHandler} />
            <div className='plus-button' onClick={() => setCheckAddButton(true)}><button><AiOutlinePlus /></button>
            </div>
          </div>
        </div>
        {check ? <EditTodoModal setCheck={setCheckHandler} /> : " "}
        {checkAddButton ? <AddTodoModal setCheckAddButton={setCheckAddButton} /> : " "}
      </div>


    </>
  )
}

export default ToDoApp;