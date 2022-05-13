import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'react-redux/es/exports';
// import { useSelector,useDispatch } from 'react-redux/es/exports';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import "./week-days.scss";
import DaydisList from '../WeekDaysDistribution/DaydisList';


const TodosWeek = ({setCheck}) => {
  const [daysData, setDaysData] = useState([]);
  const [daysTime, setDaysTime] = useState({});
  const [open, setOpen] = useState(true);
  
    // const todoList=[
    //     {},{

    //     }
    // ]
const todoList = useSelector(state => state.TodoReducer.todos);
    // console.log("............................",todoList)
const dispatch = useDispatch();
// console.log("date in string from state", daysTime);
// console.log("date name from state", daysData);
   

   
//   const todoList = [];
  
  
  useEffect(() => {

    if(todoList?.length > 0) {
      let daysTimedata = {};
      let daysHave = new Set();
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      for (let i = 0; i < todoList?.length; i++) {
        var d = new Date(todoList[i].time);
        let dayName = days[d.getDay()];
        console.log("week data", dayName)
        daysTimedata[dayName] = todoList[i].time;
        daysHave.add(dayName)
      }
      setDaysData([...daysHave])
      setDaysTime({ ...daysTimedata })
    }
  }, [todoList])

  return (
    <div className='dataCheck'>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <IoMdArrowDropdown /> Week({todoList?.length})
      </Button>
      <Collapse in={open}>
        <div className="day-dis">
          <DaydisList daysData={daysData} daysTime={daysTime} setCheck={setCheck} /> 
        </div>
      </Collapse>

    </div>
  )
}


export default TodosWeek