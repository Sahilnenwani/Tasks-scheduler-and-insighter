import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {  } from 'react-redux/es/exports';
// import { useSelector,useDispatch } from 'react-redux/es/exports';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import "./week-days.scss";
import DaydisList from '../WeekDaysDistribution/DaydisList';


const TodosWeek = () => {
  const [daysData, setDaysData] = useState([]);
  const [daysTime, setDaysTime] = useState({});
  const [open, setOpen] = useState(true);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)
  console.log("which tab is selected", whichTabClicked);

  // const todoList=[
  //     {},{

  //     }
  // ]

  // console.log("............................",todoList)
  // const dispatch = useDispatch();
  // console.log("date in string from state", daysTime);
  // console.log("date name from state", daysData);

  console.log("week data changing ", todoList.length)


  //   const todoList = [];


  useEffect(() => {
    if (todoList?.length > 0) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let daysTimedata = {};
      let daysHave = new Set();
      if (whichTabClicked === 2) {
        const TodosWithDoneTag = todoList?.filter((todo) => {
          return todo.Done != false;
        })

        for (let i = 0; i < TodosWithDoneTag?.length; i++) {
          var d = new Date(TodosWithDoneTag[i].time);
          let dayName = days[d.getDay()];
          console.log("week data", dayName)
          daysTimedata[dayName] = TodosWithDoneTag[i].time;
          daysHave.add(dayName)
        }
      }
      else if(whichTabClicked === 1){
        const TodosWhichInProgress = todoList?.filter((todo) => {
          return todo.inprogress == true;
        })
        for (let i = 0; i < TodosWhichInProgress?.length; i++) {
          var d = new Date(TodosWhichInProgress[i].time);
          let dayName = days[d.getDay()];
          console.log("week data", dayName)
          daysTimedata[dayName] = TodosWhichInProgress[i].time;
          daysHave.add(dayName)
        }
      }
      else {
        for (let i = 0; i < todoList?.length; i++) {
          var d = new Date(todoList[i].time);
          let dayName = days[d.getDay()];
          console.log("week data", dayName)
          daysTimedata[dayName] = todoList[i].time;
          daysHave.add(dayName)
        }

      }
      setDaysData([...daysHave])
      setDaysTime({ ...daysTimedata })
    }
  }, [todoList, whichTabClicked])

  return (
    <div className='dataCheck'>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <IoMdArrowDropdown /> Week({ todoList?.length})
      </Button>
      <Collapse in={open}>
        <div className="day-dis">
          <DaydisList daysData={daysData} daysTime={daysTime} />
        </div>
      </Collapse>

    </div>
  )
}


export default TodosWeek