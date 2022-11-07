import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

function graphPie()  {
    return (
      <ResponsiveContainer width={200} height={200}>
        <PieChart width={200} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        </PieChart>
      </ResponsiveContainer>
    );
}

export default graphPie
