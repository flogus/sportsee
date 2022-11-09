import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
        <ResponsiveContainer height="100%">
        <BarChart
            title='Activité quotidienne'
            width="100%"
            height={300}
            data={data}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine={true} />
          <YAxis axisLine={false} orientation="right"  />
          <Tooltip />
          <Legend verticalAlign="top" align='right' iconType="circle" iconSize={10} />
          <Bar barSize={8} name='Poids (kg)' dataKey="pv" fill="#282D30" />
          <Bar barSize={8} name='Calories brûlées (kCal)' dataKey="uv" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
