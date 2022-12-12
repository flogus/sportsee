import React from 'react';
import {
  PieChart, Pie, Sector, Cell, Label ,ResponsiveContainer,
} from 'recharts';


function graphPie(props) {
  const middleText1 = props.data[0].value + "%"
  const middleText2 = "de votre objectif"

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart width="100%" height={250}>
      <text x={15} y={30} fontWeight="bold">Score</text>
        <Pie
          data={props.data}
          dataKey="value"
          nameKey="name"
          startAngle={90}
          endAngle={180}
          cx="50%"
          cy="50%"
          outerRadius={93}
          innerRadius={80}
          fill="#FF0000"
          cornerRadius={90}
          >
            <Label value={middleText1} dy={-10} position="center" style={{
              fontSize: "32px",
              fontWeight: "bold",
            }} />
            <Label value={middleText2} dy={16} position="center" style={{
              fill: "#999999",
            }}/>
          </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}


export default graphPie;
