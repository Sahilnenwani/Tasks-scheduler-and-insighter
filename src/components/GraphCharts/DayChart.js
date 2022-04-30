import React from 'react';
import ReactECharts from 'echarts-for-react';

export const DayChart = () => {
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
