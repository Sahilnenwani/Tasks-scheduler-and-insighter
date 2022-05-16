import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import ToDosList from '../../screens/ToDo/ToDosList';
import { FilteredTodoActionCreater } from '../../Redux/Acrtions/FilteredTodoAction';

import { useSelector, useDispatch } from 'react-redux';



const Daydis = ({ dayData, daysTime, setCheck }) => {
  const [FilteredCount, setFilteredCount] = useState({

  })
  const [openInner, setOpenInner] = useState(false);
  const [FilterTodoList, setFilterTodoList] = useState([]);
  const todoList = useSelector(state => state.TodoReducer.todos);
  const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)

  const dispatch = useDispatch();
  // console.log("Day dis todo data",todoList)

  // console.log("Day dis todo data",FilterTodoList)

  useEffect(() => {
    if (todoList?.length > 0) {
      let filtertododata;
      if (whichTabClicked === 2) {
        const TodosWithDoneTag = todoList?.filter((todo) => {
          return todo.Done != false;
        })
        filtertododata = TodosWithDoneTag?.filter(todo => {
          return todo.time === daysTime[dayData];
        });
      }
      else if(whichTabClicked===1){
        const TodosWhichInProgress = todoList?.filter((todo) => {
          return todo.inprogress == true;
        })
        filtertododata = TodosWhichInProgress?.filter(todo => {
          return todo.time === daysTime[dayData];
        });
      }
      else {
        filtertododata = todoList?.filter(todo => {
          return todo.time === daysTime[dayData];
        });
        console.log("filtered data from day compoennt", filtertododata)
        console.log("filtered data from day compoennt", FilterTodoList)
        // dispatch(FilteredTodoActionCreater(filtertododata));
        const filterlenghtdata = {
        }
        console.log(".............//////////////", dayData);
        filterlenghtdata[dayData] = filtertododata?.length;
        dispatch(FilteredTodoActionCreater(filterlenghtdata));
      }
      setFilterTodoList(filtertododata);

    }
  }, [todoList, whichTabClicked])


  return (
    <div>
      < div>
        <Button
          onClick={() => setOpenInner(!openInner)}
          aria-controls="example-collapse-text"
          aria-expanded={openInner}
        >
          <IoMdArrowDropdown /> {dayData}({FilterTodoList?.length})
        </Button>
        <Collapse in={openInner} >
          <div className='card-data'>
            {console.log("time divided", daysTime[dayData])}
            <ToDosList setCheck={setCheck} FilterTodoList={FilterTodoList} />
          </div>
        </Collapse>
      </div>

    </div>
  )
}

export default Daydis;