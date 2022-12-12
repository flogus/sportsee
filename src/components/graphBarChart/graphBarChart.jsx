import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';



export default class GraphBarChart extends PureComponent {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <ResponsiveContainer height="100%">
        <BarChart
          title="Activité quotidienne"
          width="100%"
          height={300}
          data={this.props.data}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine />
          <YAxis axisLine={false} orientation="right" />
          <Tooltip />
          <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} />
          <Bar barSize={8} name="Poids (kg)" dataKey="kg" fill="#282D30" />
          <Bar barSize={8} name="Calories brûlées (kCal)" dataKey="kcal" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
