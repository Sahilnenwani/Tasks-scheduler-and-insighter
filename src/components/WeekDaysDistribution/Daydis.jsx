import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import ToDosList from '../../screens/ToDo/ToDosList';
import { FilteredTodoActionCreater } from '../../Redux/Acrtions/FilteredTodoAction';

import { useSelector, useDispatch } from 'react-redux';



const Daydis = ({ dayData }) => {
 
  const [openInner, setOpenInner] = useState(false);
  const [filterTodoList, setFilterTodoList] = useState();
  const todoList = useSelector(state => state.TodoReducer.todos);
  const whichTabClicked = useSelector(state => state.inprogressDoneReducer.tab)

  console.log("filter data in days component checking the rendering",filterTodoList,dayData);
  const dispatch = useDispatch();
  // console.log("Day dis todo data",todoList)

  // console.log("Day dis todo data",FilterTodoList)


  //Graph dependency
  useEffect(()=>{
   const filtertododata = todoList?.filter(todo => {
      return todo.day === dayData;
    });

    const filterlenghtdata = {
    }
    
    filterlenghtdata[dayData] = filtertododata?.length;
    dispatch(FilteredTodoActionCreater(filterlenghtdata));


        // console.log("filtered data from day compoennt", filtertododata)
    // console.log("filtered data from day compoennt", FilterTodoList)
    // dispatch(FilteredTodoActionCreater(filtertododata));
    // console.log("Todos filter data default tab is clicked",dayData," ",filtertododata);
    // console.log(".............//////////////", dayData);
  },[todoList])

  useEffect(() => {
    if (todoList?.length > 0 ) {
      if (whichTabClicked===2) {
        const TodosWithDoneTag = todoList?.filter((todo) => {
          return todo.Done === true;
        })
        const filtertododata = TodosWithDoneTag?.filter(todo => {
          return todo.day === dayData;
        });
        return   setFilterTodoList(filtertododata);
      }
      else if(whichTabClicked===1){
        const TodosWhichInProgress = todoList?.filter((todo) => {
          return todo.inprogress === true;
        })
        const filtertododata = TodosWhichInProgress?.filter(todo => {
          return todo.day === dayData;
        });
        return   setFilterTodoList(filtertododata); 
      }
      else{
        const TodoInBackLog = todoList?.filter((todo) => {
          return todo.backlog === true;
        })
      const filtertododata = TodoInBackLog?.filter(todo => {
          return todo.day === dayData;
        });
     return   setFilterTodoList(filtertododata);
      }
     
      
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
          <IoMdArrowDropdown /> {dayData}({filterTodoList?.length})
        </Button>
        <Collapse in={openInner} >
          <div className='card-data'>
            {/* {console.log("time divided", daysTime[dayData])} */}
            <ToDosList  FilterTodoList={filterTodoList} />
          </div>
        </Collapse>
      </div>

    </div>
  )
}

export default Daydis;