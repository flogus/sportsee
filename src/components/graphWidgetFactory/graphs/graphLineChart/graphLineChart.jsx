import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    day: 'L',
    calories: 240,
    kilo: 500,
  },
  {
    day: 'M',
    calories: 220,
    kilo: 50,
  },
  {
    day: 'M',
    calories: 280,
    kilo: 50,
  },
  {
    day: 'J',
    calories: 290,
    kilo: 50,
  },
  {
    day: 'V',
    calories: 160,
    kilo: 50,
  },
  {
    day: 'S',
    calories: 162,
    kilo: 50,
  },
  {
    day: 'D',
    calories: 390,
    kilo: 50,
  },
];

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
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default graphLineChart;
