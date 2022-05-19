import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import ToDosList from '../../screens/ToDo/ToDosList';
import { FilteredTodoActionCreater } from '../../Redux/Acrtions/FilteredTodoAction';

import { useSelector, useDispatch } from 'react-redux';



const Daydis = ({ dayData }) => {

  const [openInner, setOpenInner] = useState(false);
  const [filterTodoList, setFilterTodoList] = useState([]);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)

  console.log("filter data in days component checking the rendering", filterTodoList, dayData);
  const dispatch = useDispatch();
  // console.log("Day dis todo data",todoList)

  // console.log("Day dis todo data",FilterTodoList)


  //Graph dependency
  useEffect(() => {
    if (todoList?.length > 0) {
      const filterlenghtdata = {
      }
      if (whichTabClicked === 2) {
        const TodosWithDoneTag = todoList?.filter((todo) => {
          return todo.Done === true;
        })
        const filtertododata = TodosWithDoneTag?.filter(todo => {
          return todo.day === dayData;
        });
        filterlenghtdata[dayData] = filtertododata?.length;
        dispatch(FilteredTodoActionCreater(filterlenghtdata));

      }
      if (whichTabClicked === 1) {
        const TodosWhichInProgress = todoList?.filter((todo) => {
          return todo.inprogress === true;
        })
        const filtertododata = TodosWhichInProgress?.filter(todo => {
          return todo.day === dayData;
        });
        filterlenghtdata[dayData] = filtertododata?.length;
        dispatch(FilteredTodoActionCreater(filterlenghtdata));
      }
      else if(whichTabClicked === 0){
        const filtertododata = todoList?.filter(todo => {
          return todo.day === dayData;
        });
        filterlenghtdata[dayData] = filtertododata?.length;
        dispatch(FilteredTodoActionCreater(filterlenghtdata));
      }

    }
  }, [todoList, whichTabClicked])


//task dynmaic show code
  useEffect(() => {
   
      if (whichTabClicked === 2) {
        const TodosWithDoneTag = todoList?.filter((todo) => {
          return todo.Done === true;
        })
        const filtertododata = TodosWithDoneTag?.filter(todo => {
          return todo.day === dayData;
        });
        console.log("data of the Done tab",filtertododata);
        return  setFilterTodoList(filtertododata);
      }
      else if (whichTabClicked === 1) {
        const TodosWhichInProgress = todoList?.filter((todo) => {
          return todo.inprogress === true;
        })
        const filtertododata = TodosWhichInProgress?.filter(todo => {
          return todo.day === dayData;
        });
        console.log("data of the inprogress tab",filtertododata);
        return setFilterTodoList(filtertododata);
      }
      else {
        const TodoInBackLog = todoList?.filter((todo) => {
          return todo.inprogress===false && todo.Done===false;
        })
        const filtertododata = TodoInBackLog?.filter(todo => {
          return todo.day === dayData;
        });
        console.log("data of the Backlog tab",filtertododata);
        return  setFilterTodoList(filtertododata);
      }
   
  }, [whichTabClicked,todoList])
  
  // useEffect(() => {
  //   if (todoList?.length > 0) {
  //       const TodoInBackLog = todoList?.filter((todo) => {
  //         return todo.inprogress===false && todo.Done===false;
  //       })
  //       const filtertododata = TodoInBackLog?.filter(todo => {
  //         return todo.day === dayData;
  //       });
  //       console.log("data of the Backlog tab",filtertododata);
  //       return setFilterTodoList(filtertododata);

  //   }
  // }, [todoList])


  return (
    <div>
      {filterTodoList?.length===0?" ":
      < div>
     
        <Button
          onClick={() => setOpenInner(!openInner)}
          aria-controls="example-collapse-text"
          aria-expanded={openInner}
        >
         <IoMdArrowDropdown /> {dayData}({filterTodoList?.length})
        </Button>
        <Collapse in={openInner} >
          <div className='card-data'>
            {/* {console.log("time divided", daysTime[dayData])} */}
           <ToDosList FilterTodoList={filterTodoList} />
          </div>
        </Collapse>
     </div>
    }
    </div>
  )
}

export default Daydis;