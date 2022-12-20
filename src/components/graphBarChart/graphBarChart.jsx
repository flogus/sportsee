import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

/**
 * CustomTooltip for the graphBarChart
 * @param {String} param tooltipKg, tooltipKcal
 * @returns {String} html
 */
const CustomTooltip = ({tooltipKg,tooltipKcal}) => {
  return (
    <div className='p-5 text-white bg-[#E60000] border-none'>
      <div className='pb-5'>{tooltipKg}kg</div>
      <div className='pt-5'>{tooltipKcal}Kcal</div>
    </div>
  )
}

/**
 * Get input data and transform data
 * @class GraphBarChart
 * @constructor
 */
export default class GraphBarChart extends PureComponent {
  constructor(props) {
    super(props);
  }
  /**
   * 
   * @method render
   * @param {Object} props the object for bar chart
   * @returns {String} the html for the bar chart
   * @class GraphBarChart
   */
  render(props) {
    return (
      <ResponsiveContainer height="100%">
        <BarChart
          width="100%"
          height={300}
          data={this.props.data}
        >
        <text x={15} y={23} fontWeight="bold">Activité quotidienne</text>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis axisLine />
          <YAxis axisLine={false} orientation="right" />
          <Tooltip content={<CustomTooltip tooltipKg="70" tooltipKcal="356" />} />
          <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} />
          <Bar radius={[4, 4, 0, 0]} barSize={8} name="Poids (kg)" dataKey="kg" fill="#282D30" />
          <Bar radius={[4, 4, 0, 0]} barSize={8} name="Calories brûlées (kCal)" dataKey="kcal" fill="#E60000"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
