import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

function graphRadar(props) {
  // const data = [
  //   {
  //     "subject": 'Intensité',
  //     "value":200,
  //   },
  //   {
  //     "subject": 'Vitesse',
  //     "value":240,
  //   },
  //   {
  //     "subject": 'Force',
  //     "value":80,
  //   },
  //   {
  //     "subject": 'Energie',
  //     "value":80,
  //   },
  //   {
  //     "subject": 'Cardio',
  //     "value":220,
  //   },
  //   {
  //     "subject": 'History',
  //     "value":110,
  //   }
  // ]

  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={props.data}
        margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tick={{ fontSize: 14 }} />
        <PolarRadiusAxis tickLine={false} />
        <Radar name="fullMark" dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default graphRadar;
