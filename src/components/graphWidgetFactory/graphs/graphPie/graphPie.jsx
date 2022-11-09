import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 }
];

function graphPie()  {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart width="100%" height={250}>
        <Pie
        data={data} 
        dataKey="value"
        nameKey="name"
        startAngle={90}
        endAngle={180}
        cx="50%" cy="50%" 
        outerRadius={90}
        innerRadius={80}
        fill="#FF0000"
        label />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default graphPie
