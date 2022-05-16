import React,{useEffect,useState} from 'react';
import ReactECharts from 'echarts-for-react';
import { useSelector,useDispatch } from 'react-redux/es/exports';

export const DayChart = () => {
  // const [daysData, setDaysData] = useState([]);
  // const [daysTime, setDaysTime] = useState({}); 
  const filterlength = useSelector(state => state.FilteredDataReducer.filterdtodos);
  
  console.log("Filtered length in chart component ///",filterlength)


  let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [parseInt(filterlength?.Monday),parseInt(filterlength?.Tuesday),parseInt(filterlength?.Wednesday),parseInt(filterlength?.Thursday),parseInt(filterlength?.Friday),parseInt(filterlength?.Saturday),parseInt(filterlength?.Sunday) ],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
    return (
    <div>
         <ReactECharts
                    option={option}
                    // onEvents={onEvents}
                />
    </div>
  )
}
