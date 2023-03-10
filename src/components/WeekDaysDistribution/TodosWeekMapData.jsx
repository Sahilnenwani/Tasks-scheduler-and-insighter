// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Button, Collapse } from 'react-bootstrap';
// import { IoMdArrowDropdown } from "react-icons/io";
// import "./week-days.scss";
// import DaydisList from '../WeekDaysDistribution/DaydisList';


// const TodosWeekMapData = () => {
//   const [daysData, setDaysData] = useState([]);

//   const [open, setOpen] = useState(true);
//   const todoList = useSelector(state => state.TodoReducer.todos);
//   const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)
//   console.log("which tab is selected", whichTabClicked);

//   // const todoList=[
//   //     {},{

//   //     }
//   // ]

//   // console.log("............................",todoList)
//   // const dispatch = useDispatch();
//   // console.log("date in string from state", daysTime);
//   // console.log("date name from state", daysData);




 

//   useEffect(() => {
//     if (todoList?.length > 0) {
//       var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
//       let daysHave = new Set();
//       if (whichTabClicked === 2) {
//         const TodosWithDoneTag = todoList?.filter((todo) => {
//           return todo.Done === true;
//         })
//         TodosWithDoneTag?.map((todo)=>{
//           daysHave.add(todo.day)
//         })
//         // for (let i = 0; i < TodosWithDoneTag?.length; i++) {
//         //   var d = new Date(TodosWithDoneTag[i].time);
//         //   let dayName = days[d.getDay()];
//         //   daysHave.add(dayName)
//         // }
//       }
//       else if(whichTabClicked === 1){
//         const TodosWhichInProgress = todoList?.filter((todo) => {
//           return todo.inprogress == true;
//         })
//         TodosWhichInProgress?.map((todo)=>{
//           daysHave.add(todo.day)
//         })
//         // for (let i = 0; i < TodosWhichInProgress?.length; i++) {
//         //   var d = new Date(TodosWhichInProgress[i].time);
//         //   let dayName = days[d.getDay()];
//         //   daysHave.add(dayName)
//         // }
//       }
//       else {
//         const TodoInBackLog = todoList?.filter((todo) => {
//           return todo.backlog === true;
//         })
//         TodoInBackLog?.map((todo)=>{
//           daysHave.add(todo.day)
//         })
//         // for (let i = 0; i < todoList?.length; i++) {
//         //   var d = new Date(todoList[i].time);
//         //   let dayName = days[d.getDay()];
//         //   daysHave.add(dayName)
//         // }
//       }
//      return setDaysData([...daysHave])
//     }
//   }, [todoList, whichTabClicked])


//   return (
//     <div className='dataCheck'>

//       <Button
//       className='button-style-of-day-week'
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         <IoMdArrowDropdown /> Week({ todoList?.length})
//       </Button>
//       <Collapse in={open}>
//         <div className="day-dis">
//           <DaydisList daysData={daysData} />
//         </div>
//       </Collapse>

//     </div>
//   )
// }


// export default TodosWeekMapData

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import "./week-days.scss";
import DaydisList from '../WeekDaysDistribution/DaydisList';

const TodosWeekMapData = () => {
  return (
    <div>

    </div>
  )
}

export default TodosWeekMapData;