
import React from "react";
import {
  ComposedChart,
  
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
} from "recharts";

const data = [
  {
    name: "Entertainment",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490
  },
  {
    name: "Food",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590
  },
  {
    name: "Travel",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350
  },
  
];

export default function App() {
  return (
    <ComposedChart
      layout="vertical"
      width={650}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 80
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" tick={false}/>
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend formatter={(value) => {
          if (value === "pv") return null; // Hide "pv" from Legend
          return value;
        }}
        iconType="none"        
        />
      
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      
    </ComposedChart>
  );
}
