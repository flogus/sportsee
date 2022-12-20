import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

/**
 * CustomTooltip for the lineChart
 * @param {String} param
 * @returns html
 * @description return a custom tooltip
 */
const CustomTooltip = ({tooltipTime}) => {
  return (
    <div className='p-3 bg-white border-none'>
      {tooltipTime} min
    </div>
  )
}
/**
 * graph Line Chart
 * @function graphLineChart()
 * @param {Object} props the data for the line chart
 * @returns a line chart
 */
function graphLineChart(props) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={props.data}
        margin={{
          top: 50, right: 0, left: 0, bottom: 5,
        }}
      >
        <XAxis dataKey="day" axisLine={false} tick={{ fontSize: 12 }} padding={{ left: 20, right: 20 }} stroke="#eeeeee" type="category" interval="preserveStartEnd" />
        <Tooltip content={<CustomTooltip tooltipTime="68" />} />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default graphLineChart;
