
import React from "react";
import { useState, useEffect, useContext } from "react";
import { AllContext } from "../AllContext";
import {
  ComposedChart,
  
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
} from "recharts";



export default function App() {

  const {transactions} = useContext(AllContext)

  const [chartData, setChartData] =  useState([
    {name: "Entertainment", value: 0},
    {name: "Food", value: 0},
    {name: "Travel", value: 0}   
  ]);

  useEffect ( () =>{
  
      const newChartData = [
        {name: "Entertainment", value: 0},
        {name: "Food", value: 0},
        {name: "Travel", value: 0}   
      ]

      transactions.forEach(transaction => {
          const name = transaction.category.toLowerCase()
          const price = parseFloat(transaction.price)  
          
          const index = newChartData.findIndex(item => item.name.toLowerCase() === name)
          if(index !== -1){
            newChartData[index].value += price
          }
      });

      setChartData(newChartData)
  },[transactions])

  return (
    <>{!transactions.length ? (<div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        height: "100%",
        fontSize: "1.5rem",
      }}
    >
      No transactions!
    </div>) : (<ComposedChart
      layout="vertical"
      width={650}
      height={500}
      data={chartData}
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
      
      <Bar dataKey="value" barSize={20} fill="#413ea0" />
      
    </ComposedChart>)}
    
    </>
  );
}
