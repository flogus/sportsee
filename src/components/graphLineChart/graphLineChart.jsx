import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000
  },
  {
    name: 'M',
    uv: 4000
  },
  {
    name: 'M',
    uv: 4000
  },
  {
    name: 'J',
    uv: 4000
  },
  {
    name: 'V',
    uv: 4000
  },
  {
    name: 'S',
    uv: 3000,
  },
  {
    name: 'D',
    uv: 2000
  }
];

function graphLineChart()  {
    return (        
          <ResponsiveContainer width="100%" height="100%">
            <LineChart  data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#FFFFFF" />
            </LineChart>
          </ResponsiveContainer>
    );
}
export default graphLineChart

