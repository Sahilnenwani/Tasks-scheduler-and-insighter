import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import "./week-days.scss";
import DaydisList from '../WeekDaysDistribution/DaydisList';


const TodosWeek = () => {
  const [daysData, setDaysData] = useState([]);
  const [open, setOpen] = useState(true);
  const [weekofMonthCurrent,setWeekofMonthCurrent]=useState(0);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)


  useEffect(() => {
    if (todoList?.length > 0) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let daysHave = new Set();
      let weeekWehave=new Set();
      if (whichTabClicked === 2) {
        // const currentWeekData=todoList.filter((todo)=>{
        //   let d=todo.day.getDay();
        //   weeekWehave.add(Math.ceil((todo.time.slice(2,4) - 1 - d) / 7)+1)    
        //   console.log("todo total weeks ",Math.ceil((todo.time.slice(2,4) - 1 - todo.time.getDay()) / 7)+1)     

        // })
        // console.log("total weeks we have",weeekWehave);
        const TodosWithDoneTag = todoList.filter((todo) => {
          return todo.Done === true && todo.inprogress ===false ;
        })
        TodosWithDoneTag?.map((todo) => {
          daysHave.add(todo.day)
        })

        // for (let i = 0; i < TodosWithDoneTag?.length; i++) {
        //   var d = new Date(TodosWithDoneTag[i].time);
        //   let dayName = days[d.getDay()];
        //   daysHave.add(dayName)
        // }
        return setDaysData([...daysHave])
      }
      else if (whichTabClicked === 1) {
        const TodosWhichInProgress = todoList.filter((todo) => {
          return todo.inprogress == true && todo.backlog===false;
        })
        TodosWhichInProgress?.map((todo) => {
          daysHave.add(todo.day)
        })
        // for (let i = 0; i < TodosWhichInProgress?.length; i++) {
        //   var d = new Date(TodosWhichInProgress[i].time);
        //   let dayName = days[d.getDay()];
        //   daysHave.add(dayName)
        // }
        return setDaysData([...daysHave])
      }
      else {
        const TodoInBackLog = todoList.filter((todo) => {
          return todo.backlog === true;
        })
        TodoInBackLog?.map((todo) => {
          daysHave.add(todo.day)
        })
        
        // for (let i = 0; i < todoList?.length; i++) {
        //   var d = new Date(todoList[i].time);
        //   let dayName = days[d.getDay()];
        //   daysHave.add(dayName)
        // }
        return setDaysData([...daysHave])
      }

    }
  }, [todoList, whichTabClicked])

  useEffect(()=>{
    var d = new Date();
        var date =d.getDate();
        var day = d.getDay();
        var weekOfMonth = Math.ceil((date - 1 - day) / 7);
        setWeekofMonthCurrent(weekOfMonth+1)
  },[])

  return (
    <div className='dataCheck'>

      <Button
        className='button-style-of-day-week'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <IoMdArrowDropdown /> Week{weekofMonthCurrent} ({todoList?.length})
      </Button>
      <Collapse in={open}>
        <div className="day-dis">
          <DaydisList daysData={daysData} />
        </div>
      </Collapse>

    </div>
  )
}


export default TodosWeek