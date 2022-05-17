import React, { useEffect, useState } from 'react';
// import { TodoGetDataCreater } from '../../Redux/Acrtions/GetTodoAction';
// import { useSelector, useDispatch } from 'react-redux';
import "./week-days.scss";
import Daydis from './Daydis';

const DaydisList = ({ daysData, daysTime, }) => {


  return (
    <div>

      {
        daysData?.map((dayData) => {
          console.log("day data from list", dayData)
          return (<Daydis dayData={dayData} daysTime={daysTime}  />)
        })
      }
     
    </div>
  )
}

export default DaydisList
