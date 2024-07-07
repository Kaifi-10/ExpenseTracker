
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PieLabel from "../AppHead/PieLabel/PieLabel";
import styles from './ExpensePieChart.module.css'

const data = [
  { name: "Group A", value: 70 },
  { name: "Group B", value: 20 },
  { name: "Group C", value: 10 },

];

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
        
    return (
        <div className={styles.pieChart}>
            <div className={styles.pie}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={99}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.pieLabelsDiv}>
                <PieLabel name="Food" color="#A000FF"/>
                <PieLabel name="Entertainment" color="#FF9304"/>
                <PieLabel name="Travel" color="#FDE006"/>
            </div>
        </div>
    );
};

export default App;