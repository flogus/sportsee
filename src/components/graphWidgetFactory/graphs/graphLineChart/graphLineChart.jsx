import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
  },
  {
    name: 'M',
    uv: 4000,
  },
  {
    name: 'M',
    uv: 4000,
  },
  {
    name: 'J',
    uv: 4000,
  },
  {
    name: 'V',
    uv: 4000,
  },
  {
    name: 'S',
    uv: 3000,
  },
  {
    name: 'D',
    uv: 2000,
  },
];

function graphLineChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={data}
        margin={{
          top: 50, right: 0, left: 0, bottom: 5,
        }}
      >
        <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} padding={{ left: 20, right: 20 }} stroke="#eeeeee" type="category" interval="preserveStartEnd" />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#FFFFFF" />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default graphLineChart;
