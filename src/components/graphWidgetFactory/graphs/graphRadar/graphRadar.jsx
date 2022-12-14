import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

/**
 * graph Radar
 * @function graphRadar
 * @param {Object} props the object for the radar chart
 * @returns {String} a graph chart
 */
function graphRadar(props) {
  return (
    <ResponsiveContainer width="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="45%"
        data={props.data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tick={{ fontSize: 10 }} />
        <PolarRadiusAxis tickLine={false} tick={{ fontSize: 8 }}  />
        <Radar name="fullMark" dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default graphRadar;