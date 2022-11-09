import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
function graphRadar()  {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tick={{ fontSize: 14 }} />
        <PolarRadiusAxis tickLine={false} />
        <Radar name="Mike" dataKey="A" fill="red" fillOpacity={0.6} />
      </RadarChart>
  </ResponsiveContainer>
  );
}

export default graphRadar
