
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PieLabel from "../AppHead/PieLabel/PieLabel";
import styles from './ExpensePieChart.module.css'
import { AllContext } from "../AllContext";
import { useContext, useState, useEffect } from "react";


const COLORS = ["#FF9304", "#A000FF", "#FDE006"];





const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
// export default function App() {
//   return (
    // <PieChart width={400} height={400}>
    //   <Pie
    //     data={data}
    //     cx={200}
    //     cy={200}
    //     labelLine={false}
    //     label={renderCustomizedLabel}
    //     outerRadius={80}
    //     fill="#8884d8"
    //     dataKey="value"
    //   >
    //     {data.map((entry, index) => (
    //       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //     ))}
    //   </Pie>
    // </PieChart>
//   );
// }


const App = () => {
    //hooks
    // const chartData  = useChartData([
    //         { name: 'Entertainment', value: 0 },
    //         { name: 'Food', value: 0 },
    //         { name: 'Travel', value: 0 },
    //     ]);
    const {transactions} = useContext(AllContext)
    console.log("TRANSACTION PROP IN PIECHART:",transactions)
    const [chartData, setChartData] = useState([
      { name: "Food", value: 0 },
      { name: "Entertainment", value: 0 },
      { name: "Travel", value: 0 },
  ]);

  useEffect(() => {
      const newChartData = [
          { name: "Food", value: 0 },
          { name: "Entertainment", value: 0 },
          { name: "Travel", value: 0 },
      ];

      transactions.forEach(transaction => {
          const category = transaction.category.toLowerCase();
          const price = parseFloat(transaction.price);

          const index = newChartData.findIndex(item => item.name.toLowerCase() === category);
          if (index !== -1) {
              newChartData[index].value += price;
          }
      });

      setChartData(newChartData);
  }, [transactions]);


  // if (!chartData?.length) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       No transactions!
  //     </div>
  //   );
  // }
        
    return (
      <>
      {!transactions.length ? (<div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#888",
          height: "100%",
          fontSize: "1.5rem",
        }}
      >
        No transactions!
      </div>) : (
      
        <div className={styles.pieChart}>
            <div className={styles.pie}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={99}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
        </div>
      )}
      <div className={styles.pieLabelsDiv}>
                <PieLabel name="Food" color="#A000FF"/>
                <PieLabel name="Entertainment" color="#FF9304"/>
                <PieLabel name="Travel" color="#FDE006"/>
            </div>
        </>
    );
};

export default App;